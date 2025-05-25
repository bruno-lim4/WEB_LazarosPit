<template>
  <v-container fluid class="px-15 mt-8">
    <v-row>
      <v-btn flat variant='text' @click="goToHomePage" color="green">
        <v-icon>
          mdi-arrow-left
        </v-icon>
        Back to Products
      </v-btn>
    </v-row>
      
    <v-row>
      <!-- Coluna da imagem -->

      <v-col cols="12" md="6">
        <v-img src="image" />
      </v-col>

      <!-- Coluna dos detalhes -->
      <v-col cols="12" md="6" class="d-flex flex-column">
        <v-sheet class="bg-background"> <!-- Container para título, avaliações, preço -->
          <v-row>
            <v-col>
              <h1>Nome do Produto</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>$ 299.99</p>
            </v-col>
          </v-row>
        </v-sheet>
        
        <v-divider class="my-4" />

        <!-- Descrição -->
        <v-row>
          <v-col>
            <v-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, temporibus. Porro est molestiae accusantium corrupti totam impedit, nihil sed voluptas iste omnis, tempora ab optio pariatur deleniti, non placeat dolorum.</v-text>
          </v-col>
        </v-row>
        <div class="flex-grow-1"></div>
        <v-divider class="my-4" />
        <!-- Quantidade -->
        <v-container class="pa-0 ma-0 mb-6">
          <v-row>
            <v-col>
              <h2>Quantity:</h2>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col cols="auto" class="d-flex align-center">
              <v-btn
                @click="quantity = Math.max(quantity - 1, 1)"
                aria-label="Decrease quantity"
                flat
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <div class="quantity-display mx-3">{{ quantity }}</div>
              <v-btn
                flat
                @click="quantity++"
                aria-label="Increase quantity"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row cols="auto">
            <v-col cols="12">Total: R$ {{ (quantity * price).toFixed(2) }}</v-col>
            
          </v-row>
        </v-container>

        <!-- Botão adicionar ao carrinho -->
        <v-btn color="green" block rounded="lg" @click="addToCart">
          <v-icon left>mdi-cart</v-icon>
          Add to Cart
        </v-btn>

        <v-row class="mt-2" justify="space-between">
          <v-col cols="auto">60 servings per container</v-col>
          <v-col cols="auto" class="green--text">In Stock</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<script>
    export default {
      name: 'ProductPage',
      computed: {
          productId() {
              return this.$route.params.id
          }
      },
      data() {
        return {
          quantity: 1,
        }
      },
      mounted() {
          // Aqui pode fazer fetch da API ou buscar no store/local baseado no productId
      },
      methods: {
        goToHomePage() {
          this.$router.push({ name: 'HomePage' })
        }
      },
    }
</script>
  
<style scoped>
</style>
  