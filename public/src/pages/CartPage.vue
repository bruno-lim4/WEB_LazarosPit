<template>
  <v-container fluid class="px-15">
    <v-row>
      <!-- Coluna esquerda: 2/3 da largura -->
      <v-col cols="12" lg="8">
        <v-btn variant='text' color="green" class="mb-4" @click="$router.back()">
          <v-icon left>mdi-arrow-left</v-icon> Back to Products
        </v-btn>
        
        <h1 class="text-white">Cart Page</h1>
        <br>

        <v-card
          v-for="(item, index) in cartItems"
          :key="item.id"
          class="mb-4"
          color="#1e293b"
          dark
          elevation="2"
        >
        <v-row class="pa-4" no-gutters>
          <!-- Imagem do produto -->
          <v-col cols="12" sm="2" class="d-flex justify-center mb-2 mb-sm-0">
            <v-img :src="item.image" max-width="80" max-height="80" />
          </v-col>

          <!-- Nome e preço -->
          <v-col cols="12" sm="4" class="text-center text-sm-left">
            <div class="text-h6">{{ item.name }}</div>
            <div class="text-subtitle2" style="color: #22c55e;">
              R$ {{ item.price.toFixed(2) }}
            </div>
          </v-col>

          <!-- Quantidade, subtotal e lixeira -->
          <v-col cols="12" sm="6" class="d-flex align-center justify-center justify-sm-end flex-wrap">
            <div class="d-flex align-center mb-2 mb-sm-0">
              <v-btn variant='text' color="white" @click="decrementQuantity(index)" :disabled="item.quantity <= 1">
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <div class="mx-3">{{ item.quantity }}</div>
              <v-btn variant='text' color="white" @click="incrementQuantity(index)">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>

            <div class="font-weight-bold ml-sm-6 text-center text-sm-right" style="color: #22c55e; min-width: 90px;">
              R$ {{ (item.price * item.quantity).toFixed(2) }}
            </div>

            <v-btn variant='text' color="red" class="ml-sm-4" @click="removeItem(index)">
              <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        </v-card>
      </v-col>

      <!-- Coluna direita: 1/3 da largura -->
      <v-col cols="12" lg="4">
        <v-card color="#1e293b" dark elevation="2" class="pa-10">
          <h1 class="mb-10">Total sum</h1>

          <v-row justify="space-between" class="mb-2">
            <div>Products</div>
            <div>$ {{ productsTotal.toFixed(2) }}</div>
          </v-row>

          <v-divider class="my-3"></v-divider>

          <v-row justify="space-between" class="text-h6 font-weight-bold" style="color:#22c55e;">
            <div>Total</div>
            <div>$ {{ totalSum.toFixed(2) }}</div>
          </v-row>

          <v-btn
            color="green"
            class="mt-6"
            block
            large
            @click="checkout"
          >
            Checkout
          </v-btn>
        </v-card>

        <!-- Seção de cartão de crédito -->
        <v-card v-if="checkoutDone" color="#1e293b" dark elevation="2" class="pa-10 mt-10">
          <h1 class="mb-6">Credit Card</h1>

          <v-form ref="creditForm" v-model="formValid">
            <v-text-field
              v-model="creditCardNumber"
              label="Card Number"
              outlined
              dense
              color="white"
              :rules="[rules.required, rules.card]"
              class="mb-6"
            ></v-text-field>

            <v-btn
              color="green"
              class="mt-2"
              :disabled="!isCardValid"
              block
              large
              @click="submitCardForm"
            >
              Buy
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getByClient, setProductQuantity, removeProductFromCart, updateCart } from '@/services/cartService';
import { updateProduct, getProductById } from '@/services/productService';
import { getUserFromToken } from '@/utils/auth';

export default {
  name: 'CartPage',
  data() {
    return {
      cartItems: [],
      cart: {},
      creditCardNumber: '',
      formValid: false,
      checkoutDone: false,
      rules: {
        required: v => !!v || 'Card Number is required',
        card: v => /^\d{16}$/.test(v) || 'Card Number must contain exactly 16 digits'
      }
    }
  },
  computed: {
    productsTotal() {
      return this.cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    totalSum() {
      return this.productsTotal;
    },
    isCardValid() {
      return (
        this.creditCardNumber &&
        /^\d{16}$/.test(this.creditCardNumber)
      );
    }
  },
  methods: {
    async fetchCartItems() {
      const user = getUserFromToken();
      const carts = await getByClient(user.id);
      if (Array.isArray(carts) && carts.length > 0) {
        this.cart = carts[0];

        this.cartItems = this.cart.products.map(p => ({
          id: p.product._id,
          name: p.product.name,
          price: p.product.price,
          quantity: p.quantity,
          image: p.product.image,
        }));
      } else {
        this.cartItems = [];
      }
    },
    async incrementQuantity(index) {
      const product = await getProductById(this.cartItems[index].id);
      this.cartItems[index].quantity = (this.cartItems[index].quantity === product.quantity) ? this.cartItems[index].quantity : this.cartItems[index].quantity + 1;
      await setProductQuantity({ productId: this.cartItems[index].id, quantity: this.cartItems[index].quantity });
      await this.fetchCartItems();
    },
    async decrementQuantity(index) {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        await setProductQuantity({ productId: this.cartItems[index].id, quantity: this.cartItems[index].quantity });
        await this.fetchCartItems();
      }
    },
    async removeItem(index) {
      await removeProductFromCart(this.cartItems[index].id);
      this.cartItems.splice(index, 1);
    },
    checkout() {
      this.checkoutDone = true;
    },
    submitCardForm() {
      const isValid = this.$refs.creditForm.validate();
      if (isValid) {
        this.soldCart();
      } else {
        console.warn('Formulário inválido');
      }
    },
    async soldCart() {
      // pegar o carrinho do user e sold: true
      this.cart.sold = true

      // debitar no estoque todos os produtos comprados
      this.cart.products.forEach(async e => {
        const prod_id = e.product._id;
        const qtd = e.quantity;

        const prod = await getProductById(prod_id);
        const new_quant = prod.quantity - qtd;
        const new_sold = prod.quantitySold + qtd;

        await updateProduct(prod_id, {
          "quantitySold": new_sold,
          "quantity": new_quant
        })
      })
      
      // salver esse novo cart no bd
      await updateCart(this.cart._id, this.cart);

      await this.fetchCartItems();
      this.checkoutDone = false;
    }
  },
  async mounted() {
    await this.fetchCartItems();
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 12px;
}
</style>
