<template>
  <v-app>
    <NavBar @buscaFoiRealizada="buscaPorNomeDeProduto" @logUserOut="logUserOut" :userIsLoggedIn="userIsLoggedIn" :userIsAdmin="userIsAdmin"/>
    <v-main>
      <router-view :pesquisa="pesquisa" />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { getUserFromToken } from './utils/auth'

export default {
  name: 'App',
  components: { NavBar },
  methods: {
    buscaPorNomeDeProduto(pesquisa) {
      this.pesquisa = pesquisa;
    },
    logUserOut() {
      localStorage.removeItem('token');
      this.userIsLoggedIn = false;
      this.userIsAdmin = false;
      this.$router.push('/login');
    }
  },
  data() {
    return {
      userIsLoggedIn: false,
      userIsAdmin: false,
      pesquisa: '',
    }
  },
  created() {
    const user = getUserFromToken();
    if (user) {
      this.userIsLoggedIn = user.isLoggedIn;
      this.userIsAdmin = user.isAdmin;
    }
  }
}
</script>

<style scoped>
  .bg-dark {
    background-color: black;
    min-height: 100vh;
  }
</style>
