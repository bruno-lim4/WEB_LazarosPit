<template>
  <v-container fluid class="px-10">
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold">Admin Dashboard</h1>
        <p class="text-subtitle-1">Manage your system and monitor key metrics</p>
      </v-col>
    </v-row>

    <v-row class="mb-6" align="stretch">
      <v-col cols="12" sm="6" md="4" class="d-flex">
        <v-card class="pa-8 d-flex flex-column flex-grow-1" color="#1e293b" elevation="4">
          <v-row align="center px-3" justify="space-between">
            <v-icon color="blue">mdi-account-group</v-icon>
            <v-chip color="grey-darken-2" text-color="white">{{ cards.customers }}</v-chip>
          </v-row>
          <h3 class="mt-4 text-h6">Customers</h3>
          <p class="text-caption">Manage customer accounts and data</p>
          <div class="flex-grow-1"></div>
          <v-btn color="green" class="mt-3" @click="goToPage('AdminCustomerPage')">Manage Customers</v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="d-flex">
        <v-card class="pa-8 d-flex flex-column flex-grow-1" color="#1e293b" elevation="4">
          <v-row align="center px-3" justify="space-between">
            <v-icon color="green">mdi-cube</v-icon>
            <v-chip color="grey-darken-2" text-color="white">{{ cards.products }}</v-chip>
          </v-row>
          <h3 class="mt-4 text-h6">Products</h3>
          <p class="text-caption">Manage product inventory and details</p>
          <div class="flex-grow-1"></div>
          <v-btn color="green" class="mt-3" @click="goToPage('AdminProductPage')">Manage Products</v-btn>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4" class="d-flex">
        <v-card class="pa-8 d-flex flex-column flex-grow-1" color="#1e293b" elevation="4">
          <v-row align="center px-3" justify="space-between">
            <v-icon color="purple">mdi-shield-account</v-icon>
            <v-chip color="grey-darken-2" text-color="white">{{ cards.admins }}</v-chip>
          </v-row>
          <h3 class="mt-4 text-h6">Admins</h3>
          <p class="text-caption">Manage administrator accounts</p>
          <div class="flex-grow-1"></div>
          <v-btn color="green" class="mt-3" @click="goToPage('AdminManagerPage')">Manage Admins</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 mb-4">System Overview</h2>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-4" color="#1e293b" elevation="4">
          <v-icon color="green">mdi-currency-usd</v-icon>
          <h3 class="mt-4 text-h6">Total Revenue</h3>
          <p class="text-subtitle-1 font-weight-bold text-green">R$ {{ metrics.revenue }}</p>
          <p class="text-caption">Overall earnings</p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-4" color="#1e293b" elevation="4">
          <v-icon color="orange">mdi-cart</v-icon>
          <h3 class="mt-4 text-h6">Orders Today</h3>
          <p class="text-subtitle-1 font-weight-bold text-orange">{{ metrics.ordersToday }}</p>
          <p class="text-caption">New orders received</p>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="pa-4" color="#1e293b" elevation="4">
          <v-icon color="purple">mdi-account-plus</v-icon>
          <h3 class="mt-4 text-h6">New Customers</h3>
          <p class="text-subtitle-1 font-weight-bold">{{ metrics.newCustomers }}</p>
          <p class="text-caption">This week</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { getAdmins } from '@/services/adminService';
import { getClients } from '@/services/clientService';
import { getProducts } from '@/services/productService';
import { getCarts } from '@/services/cartService';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      cards: {
        customers: 0,
        products: 0,
        admins: 0
      },
      metrics: {
        revenue: 0,
        ordersToday: 0,
        newCustomers: 0
      }
    }
  },
  methods: {
    goToPage(routeName) {
      this.$router.push({ name: routeName });
    },
    async fetchOverviewAndCardData() {
      const products = await getProducts();
      this.cards.products = products.length;
      const clients = await getClients();
      this.cards.customers = clients.length;
      const admins = await getAdmins();
      this.cards.admins = admins.length;
      let totalRevenueSum = 0;
      for(let i = 0; i < products.length; i++) {
        totalRevenueSum += products[i].price * products[i].quantitySold
      }
      this.metrics.revenue = totalRevenueSum;
      const today = new Date();
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(today.getDate() - 7);

      let countThisWeek = 0;

      for (const client of clients) {
        const createdDate = new Date(client.createdAt);
        if (createdDate >= oneWeekAgo && createdDate <= today) {
          countThisWeek++;
        }
      }

      this.metrics.newCustomers = countThisWeek;

      // 🟠 Pedidos feitos HOJE
      const carts = await getCarts();
      let ordersToday = 0;
      const isSameDay = (date1, date2) =>
        date1.getDate() === date2.getDate() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getFullYear() === date2.getFullYear();

      for (const cart of carts) {
        if (cart.sold) {
          const orderDate = new Date(cart.createdAt);
          if (isSameDay(orderDate, today)) {
            ordersToday++;
          }
        }
      }
      this.metrics.ordersToday = ordersToday;
    },
  },
  async mounted() {
    this.fetchOverviewAndCardData();
  },
}
</script>
