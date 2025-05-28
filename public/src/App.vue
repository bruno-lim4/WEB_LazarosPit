<template>
  <v-app>
    <NavBar @buscaFoiRealizada="buscaPorNomeDeProdutoNaAPI" @logUserOut="logUserOut" :userIsLoggedIn="userIsLoggedIn" :userIsAdmin="userIsAdmin"/>
    <v-main>
      <router-view/>
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
    buscaPorNomeDeProdutoNaAPI(pesquisa) {
      console.log('Busca realizada:', pesquisa);
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
      userIsAdmin: false
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
