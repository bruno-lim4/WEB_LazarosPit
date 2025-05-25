<template>
    <v-app>
      <v-app-bar color="black" dark :elevation="2">
        <v-container fluid>
          <v-row align="center" justify="space-between" no-gutters>
            <!-- Esquerda: Logo -->
            <v-col cols="3" class="d-flex align-center">
              <v-icon icon="$vuetify"></v-icon>
              <v-app-bar-title class="ml-2">Lazaro's Pit</v-app-bar-title>
            </v-col>
  
            <!-- Centro: Campo de busca -->
            <v-col cols="6" class="d-flex justify-center">
              <v-text-field
                append-inner-icon="mdi-magnify"
                density="compact"
                variant="solo"
                label="Busca"
                hide-details
                style="max-width: 400px"
              ></v-text-field>
            </v-col>
  
            <!-- Direita: Login e Carrinho -->
            <v-col cols="3" class="d-flex align-center justify-end">
              <!-- Botão Register/Login -->
              <v-btn variant="text" class="text-white mr-2">
                <v-icon class="mr-1">mdi-account</v-icon>
                <div class="d-flex flex-column text-left" style="line-height: 1">
                  <small>Register</small>
                  <strong>Login</strong>
                </div>
              </v-btn>
  
              <!-- Carrinho -->
              <v-btn icon class="text-white mr-2">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-app-bar>
    </v-app>
  </template>
  
<script>
export default {
    name: 'NavBar'
}
</script>
