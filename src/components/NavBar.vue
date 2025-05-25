<template>
  <v-app-bar app color="black" dark :elevation="2">
    <v-container fluid>
      <v-row align="center" justify="space-between" no-gutters>
        <!-- Logo -->
        <v-col cols="3" class="d-flex align-center">
          <v-btn @click="goToHomePage">
            <v-icon icon="$vuetify"></v-icon>
            <v-app-bar-title class="ml-2 login-title-col">Lazaro's Pit</v-app-bar-title>
          </v-btn>
        </v-col>

        <!-- Busca -->
        <v-col cols="6" class="d-flex justify-center" >
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

        <!-- Login e Carrinho (escondido em telas <= 735px) -->
        <v-col cols="3" class="login-cart-col">
          <v-btn variant="text" class="text-white" @click="goToLoginPage" v-if="!userIsLoggedIn">
            <v-icon class="mr-1">mdi-account</v-icon>
            <div class="d-flex flex-column text-left" style="line-height: 1">
              <small>Register</small>
              <strong>Login</strong>
            </div>
          </v-btn>
          <v-btn icon variant="text" class="text-white mr-5" @click="logUserOut" v-if="userIsLoggedIn">
            <v-icon class="mr-1">mdi-exit-run</v-icon>
            <div class="d-flex flex-column text-left" style="line-height: 1">
              <small>Log Out</small>
            </div>
          </v-btn>
          <v-btn icon @click="goToCalculatorPage">
            <v-icon>mdi-calculator</v-icon>
          </v-btn>
          <v-btn @click="goToCart" icon class="text-white mr-2">
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </v-col>

        <!-- Menu Sanduíche (somente em telas <= 735px) -->
        <v-app-bar-nav-icon class="menu-icon" @click="drawer = true" />
      </v-row>
    </v-container>

    
  </v-app-bar>
  <!-- Drawer lateral -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    right
  >
    <v-list>
      <v-list-item v-if="!userIsLoggedIn" @click="goToLoginPage" link>
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Login / Register</v-list-item-title>
      </v-list-item>
      <v-list-item v-if="userIsLoggedIn" @click="logUserOut" link>
        <v-list-item-icon>
          <v-icon>mdi-exit-run</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Log Out</v-list-item-title>
      </v-list-item>
      <v-list-item @click="goToCart" link>
        <v-list-item-icon>
          <v-icon>mdi-cart</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Carrinho</v-list-item-title>
      </v-list-item>
      <v-list-item @click="goToCalculatorPage" link>
        <v-list-item-icon>
          <v-icon>mdi-calculator</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Macro Calculator</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      pesquisa: '',
      drawer: false,
    }
  },
  props:{
    userIsLoggedIn:{
      type: Boolean,
      default: false,
    },
    userIsAdmin:{
      type: Boolean,
      default: false,
    }
  },
  watch: {
    pesquisa(newValue) {
      this.$emit('buscaFoiRealizada', newValue)
    },
  },
  methods: {
    goToLoginPage() {
      this.$router.push({name: 'LoginPage'})
    },
    goToHomePage() {
      this.$router.push({ name: 'HomePage' })
    },
    goToCart() {
      this.$router.push({ name: 'CartPage' })
    },
    goToCalculatorPage() {
      this.$router.push({ name: 'CalculatorPage' })
    },
    logUserOut() {
      this.$emit("logUserOut");
    }
  }
}
</script>

<style scoped>
.login-cart-col {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.login-title-col {
  display: flex;
  align-items: center;
}

@media (max-width: 500px) {
  .login-title-col {
    display: none !important;
  }
}

/* Esconde login/carrinho em telas pequenas */
@media (max-width: 880px) {
  .login-cart-col {
    display: none !important;
  }
  .menu-icon {
    display: inline-flex !important;
  }
}

/* Esconde ícone do menu em telas grandes */
@media (min-width: 881px) {
  .menu-icon {
    display: none !important;
  }
}
</style>
