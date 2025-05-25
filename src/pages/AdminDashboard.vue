<template>
    <v-container fluid class="px-15">
      <v-row class="mt-4">
        <v-col cols="12">
          <h1 class="text-h4 font-weight-bold">Admin Dashboard</h1>
          <p class="text-subtitle-1">Manage your system and monitor key metrics</p>
        </v-col>
      </v-row>
  
      <!-- Cards de Gerenciamento -->
      <v-row class="mb-6" align="stretch">
        <v-col :cols="cardCols" v-for="(card, index) in managementCards" :key="index" class="d-flex">
          <v-card class="pa-8 d-flex flex-column flex-grow-1" color="#1e293b" elevation="4">
            <v-row align="center px-3" justify="space-between">
              <v-icon :color="card.iconColor">{{ card.icon }}</v-icon>
              <v-chip color="grey-darken-2" text-color="white">{{ card.count }}</v-chip>
            </v-row>
            <h3 class="mt-4 text-h6">{{ card.title }}</h3>
            <p class="text-caption">{{ card.description }}</p>
            <div class="flex-grow-1"></div>
            <v-btn color="green" class="mt-3">{{ card.button }}</v-btn>
          </v-card>
        </v-col>
      </v-row>
    
      <!-- System Overview -->
      <v-row>
        <v-col cols="12">
          <h2 class="text-h5 mb-4">System Overview</h2>
        </v-col>
  
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-4" color="#1e293b" elevation="4">
            <v-icon color="green">mdi-currency-usd</v-icon>
            <h3 class="mt-4 text-h6">Total Revenue</h3>
            <p class="text-subtitle-1 text-green font-weight-bold">R$ 45.680,50</p>
            <p class="text-caption">Overall earnings</p>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-4" color="#1e293b" elevation="4">
            <v-icon color="blue">mdi-package-variant</v-icon>
            <h3 class="mt-4 text-h6">Products in Stock</h3>
            <p class="text-subtitle-1 font-weight-bold">67</p>
            <p class="text-caption">22 out of stock</p>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-4" color="#1e293b" elevation="4">
            <v-icon color="orange">mdi-cart</v-icon>
            <h3 class="mt-4 text-h6">Orders Today</h3>
            <p class="text-subtitle-1 font-weight-bold text-orange">23</p>
            <p class="text-caption">New orders received</p>
          </v-card>
        </v-col>
  
        <v-col cols="12" sm="6" md="3">
          <v-card class="pa-4" color="#1e293b" elevation="4">
            <v-icon color="purple">mdi-account-plus</v-icon>
            <h3 class="mt-4 text-h6">New Customers</h3>
            <p class="text-subtitle-1 font-weight-bold">34</p>
            <p class="text-caption">This week</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  
<script setup>
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { width } = useDisplay()

// Define número de colunas responsivo
const cardCols = computed(() => {
if (width.value < 720) return 12 // xs
if (width.value < 960) return 6  // "meio-termo"
return 4                         // md+
})

// Dados dos cards de gerenciamento
const managementCards = [
{
    icon: 'mdi-account-group',
    iconColor: 'blue',
    count: 1247,
    title: 'Customers',
    description: 'Manage customer accounts and data',
    button: 'Manage Customers'
},
{
    icon: 'mdi-cube',
    iconColor: 'green',
    count: 89,
    title: 'Products',
    description: 'Manage product inventory and details',
    button: 'Manage Products'
},
{
    icon: 'mdi-shield-account',
    iconColor: 'purple',
    count: 5,
    title: 'Admins',
    description: 'Manage administrator accounts',
    button: 'Manage Admins'
}
]
</script>
  