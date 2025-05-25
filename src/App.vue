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

export default {
  name: 'App',
  components: { NavBar},
  methods: {
    buscaPorNomeDeProdutoNaAPI(pesquisa) {
      console.log('Busca realizada:', pesquisa)
    },
    logUserOut(){
      this.userIsLoggedIn = false;
      this.userIsAdmin = false;
    }
  },
  data () {
    return {
      userIsLoggedIn: true,
      userIsAdmin: true,
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
