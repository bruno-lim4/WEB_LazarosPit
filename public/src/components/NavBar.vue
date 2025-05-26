<template>
  <v-app-bar app color="black" dark :elevation="2">
    <v-row class="align-center pl-3 pr-1" no-gutters>
      
      <!-- Logo -->
      <v-col cols="3" class="d-flex align-center" >
          <v-img src="/favicon.ico" max-width="40" min-width="30" class="mr-4" style="cursor: pointer;" @click="goToHomePage"/>
          <v-app-bar-title class="login-title-col" style="white-space: nowrap;">
            Lazaro's Pit
          </v-app-bar-title>
      </v-col>


      <!-- Campo de busca -->
      <v-col cols="6" class="d-flex justify-center">
        <v-text-field
          v-model="pesquisa"
          append-inner-icon="mdi-magnify"
          density="compact"
          variant="solo"
          label="Search"
          hide-details
          style="max-width: 400px;"
          bg-color="white"
        />
      </v-col>

      <!-- Ações (login, admin, logout, carrinho, calculadora) -->
      <v-col cols="3" class="login-cart-col">
        <template v-if="!userIsLoggedIn">
          <v-btn variant="text" class="text-white" @click="goToLoginPage">
            <v-icon class="mr-1">mdi-account</v-icon>
            <div class="d-flex flex-column text-left" style="line-height: 1">
              <small>Register</small><strong>Login</strong>
            </div>
          </v-btn>
        </template>
        <template v-else>
          <v-btn variant="text" class="text-white mr-5" @click="logUserOut">
            <v-icon class="mr-1">mdi-exit-run</v-icon>
            <div class="d-flex flex-column text-left" style="line-height: 1">
              <small>Log Out</small>
            </div>
          </v-btn>
        </template>
        <v-btn variant="text" class="text-white" @click="goToAdminPage" v-if="userIsAdmin">
          <v-icon class="mr-1">mdi-account</v-icon>
          <small>Admin</small>
        </v-btn>
        <v-btn icon @click="goToCalculatorPage">
          <v-icon>mdi-calculator</v-icon>
        </v-btn>
        <v-btn icon class="text-white mr-2" @click="goToCart">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-col>

      <v-spacer />
      <!-- Ícone de menu (mobile) -->
      <v-app-bar-nav-icon class="menu-icon" @click="drawer = true" />
    </v-row>

    <!-- Drawer lateral para telas pequenas -->
    
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary right>
      <v-list>
        <v-list-item v-if="userIsAdmin" @click="goToAdminPage" link>
          <v-icon>mdi-account</v-icon>
          <v-list-item-title>Admin</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="!userIsLoggedIn" @click="goToLoginPage" link>
          <v-icon>mdi-account</v-icon>
          <v-list-item-title>Login / Register</v-list-item-title>
        </v-list-item>

        <v-list-item v-if="userIsLoggedIn" @click="logUserOut" link>
          <v-icon>mdi-exit-run</v-icon>
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goToCart" link>
          <v-icon>mdi-cart</v-icon>
          <v-list-item-title>Carrinho</v-list-item-title>
        </v-list-item>

        <v-list-item @click="goToCalculatorPage" link>
          <v-icon>mdi-calculator</v-icon>
          <v-list-item-title>Macro Calculator</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    userIsLoggedIn: Boolean,
    userIsAdmin: Boolean
  },
  data() {
    return {
      pesquisa: '',
      drawer: false
    }
  },
  watch: {
    pesquisa(newVal) {
      this.$emit('buscaFoiRealizada', newVal)
    }
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName })
    },
    goToHomePage() { this.goTo('HomePage') },
    goToLoginPage() { this.goTo('LoginPage') },
    goToCart() { this.goTo('CartPage') },
    goToCalculatorPage() { this.goTo('CalculatorPage') },
    goToAdminPage() { this.goTo('AdminDashboard') },
    logUserOut() { this.$emit('logUserOut') }
  }
}
</script>

<style scoped>
.login-cart-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

@media (max-width: 1100px) {
  .login-cart-col {
    display: none !important;
  }
  .menu-icon {
    display: inline-flex !important;
  }
}

@media (min-width: 1100px) {
  .menu-icon {
    display: none !important;
  }
}

@media (max-width: 735px) {
  .login-title-col {
    display: none !important;
  }
}

</style>
