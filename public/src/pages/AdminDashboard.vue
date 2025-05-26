<template>
  <v-container fluid class="px-10">
    <v-row class="mt-4">
      <v-col cols="12">
        <h1 class="text-h4 font-weight-bold">Admin Dashboard</h1>
        <p class="text-subtitle-1">Manage your system and monitor key metrics</p>
      </v-col>
    </v-row>

    <!-- Cartões principais: 100% em telas pequenas, 6 colunas em telas médias, 4 colunas em grandes -->
    <v-row class="mb-6" align="stretch">
      <v-col cols="12" sm="6" md="4" class="d-flex" v-for="(card, i) in cards" :key="i">
        <v-card class="pa-8 d-flex flex-column flex-grow-1" color="#1e293b" elevation="4">
          <v-row align="center px-3" justify="space-between">
            <v-icon :color="card.iconColor">{{ card.icon }}</v-icon>
            <v-chip color="grey-darken-2" text-color="white">{{ card.count }}</v-chip>
          </v-row>
          <h3 class="mt-4 text-h6">{{ card.title }}</h3>
          <p class="text-caption">{{ card.description }}</p>
          <div class="flex-grow-1"></div>
          <v-btn color="green" class="mt-3" @click="navigate(card.route)">{{ card.button }}</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 mb-4">System Overview</h2>
      </v-col>

      <v-col cols="12" sm="6" md="3" v-for="(metric, i) in metrics" :key="i">
        <v-card class="pa-4" color="#1e293b" elevation="4">
          <v-icon :color="metric.iconColor">{{ metric.icon }}</v-icon>
          <h3 class="mt-4 text-h6">{{ metric.title }}</h3>
          <p class="text-subtitle-1 font-weight-bold" :class="metric.textColor">{{ metric.value }}</p>
          <p class="text-caption">{{ metric.caption }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      cards: [
        {
          icon: 'mdi-account-group',
          iconColor: 'blue',
          count: 1247,
          title: 'Customers',
          description: 'Manage customer accounts and data',
          button: 'Manage Customers',
          route: 'AdminCustomerPage'
        },
        {
          icon: 'mdi-cube',
          iconColor: 'green',
          count: 89,
          title: 'Products',
          description: 'Manage product inventory and details',
          button: 'Manage Products',
          route: 'AdminProductPage'
        },
        {
          icon: 'mdi-shield-account',
          iconColor: 'purple',
          count: 5,
          title: 'Admins',
          description: 'Manage administrator accounts',
          button: 'Manage Admins',
          route: 'AdminManagerPage'
        }
      ],
      metrics: [
        {
          icon: 'mdi-currency-usd',
          iconColor: 'green',
          title: 'Total Revenue',
          value: 'R$ 45.680,50',
          caption: 'Overall earnings',
          textColor: 'text-green'
        },
        {
          icon: 'mdi-package-variant',
          iconColor: 'blue',
          title: 'Products in Stock',
          value: '67',
          caption: '22 out of stock',
          textColor: ''
        },
        {
          icon: 'mdi-cart',
          iconColor: 'orange',
          title: 'Orders Today',
          value: '23',
          caption: 'New orders received',
          textColor: 'text-orange'
        },
        {
          icon: 'mdi-account-plus',
          iconColor: 'purple',
          title: 'New Customers',
          value: '34',
          caption: 'This week',
          textColor: ''
        }
      ]
    }
  },
  methods: {
    navigate(routeName) {
      this.$router.push({ name: routeName });
    }
  }
}
</script>
