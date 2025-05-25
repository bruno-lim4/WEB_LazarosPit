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
            <v-row class="pa-4" align="center" no-gutters>
              <v-col cols="3" class="d-flex justify-center">
                <v-img :src="item.image" max-width="80" max-height="80" />
              </v-col>
  
              <v-col cols="5">
                <div class="text-h6">{{ item.name }}</div>
                <div class="text-subtitle2" style="color: #22c55e;">
                  R$ {{ item.price.toFixed(2) }}
                </div>
              </v-col>
  
              <v-col cols="4" class="d-flex align-center justify-end">
                <!-- Controle de quantidade -->
                <v-btn  
                  variant='text'
                  color="white"
                  @click="decrementQuantity(index)"
                  :disabled="item.quantity <= 1"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <div class="mx-3">{{ item.quantity }}</div>
                <v-btn variant='text' color="white" @click="incrementQuantity(index)">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
  
                <!-- Subtotal -->
                <div
                  class="ml-6 font-weight-bold"
                  style="color: #22c55e; min-width: 90px; text-align: right;"
                >
                  R$ {{ (item.price * item.quantity).toFixed(2) }}
                </div>
  
                <!-- Lixeira -->
                <v-btn variant='text' color="red" @click="removeItem(index)">
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
        deliveryFee: 100,
        cartItems: [
          {
            id: 1,
            name: 'Whey Protein Isolate',
            price: 299.99,
            quantity: 2,
            image: 'https://images.unsplash.com/photo-1606813909286-c05e4bd13433?auto=format&fit=crop&w=80&q=80',
          },
          {
            id: 2,
            name: 'Pre-Workout Extreme',
            price: 159.99,
            quantity: 4,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=80&q=80',
          },
          {
            id: 3,
            name: 'BCAA Recovery',
            price: 129.99,
            quantity: 3,
            image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=80&q=80',
          },
        ],
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
        return this.productsTotal + this.deliveryFee
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
  