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
              <!-- Controle de quantidade -->
              <div class="d-flex align-center mb-2 mb-sm-0">
                <v-btn variant='text' color="white" @click="decrementQuantity(index)" :disabled="item.quantity <= 1">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <div class="mx-3">{{ item.quantity }}</div>
                <v-btn variant='text' color="white" @click="incrementQuantity(index)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>

              <!-- Subtotal -->
              <div class="font-weight-bold ml-sm-6 text-center text-sm-right" style="color: #22c55e; min-width: 90px;">
                R$ {{ (item.price * item.quantity).toFixed(2) }}
              </div>

              <!-- Lixeira -->
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
              <div>R$ {{ productsTotal.toFixed(2) }}</div>
            </v-row>
  
            <v-row justify="space-between" class="mb-2">
              <div>Delivery fee</div>
              <div>R$ {{ deliveryFee.toFixed(2) }}</div>
            </v-row>
  
            <v-divider class="my-3"></v-divider>
  
            <v-row justify="space-between" class="text-h6 font-weight-bold" style="color:#22c55e;">
              <div>Total</div>
              <div>R$ {{ totalSum.toFixed(2) }}</div>
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
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'CartPage',
    data() {
      return {
        cartItems: [],
      }
    },
    computed: {
      productsTotal() {
        return this.cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )
      },
      totalSum() {
        return this.productsTotal;
      },
    },
    methods: {
      incrementQuantity(index) {
        this.cartItems[index].quantity++
      },
      decrementQuantity(index) {
        if (this.cartItems[index].quantity > 1) {
          this.cartItems[index].quantity--
        }
      },
      removeItem(index) {
        this.cartItems.splice(index, 1)
      },
      checkout() {
        alert(`Checkout - Total: R$ ${this.totalSum.toFixed(2)}`)
        // Aqui você pode implementar a lógica real do checkout
      },
    },
  }
  </script>
  
  <style scoped>
  .v-card {
    border-radius: 12px;
  }
  </style>
  