<template>
  <v-app>
    <NavBar @buscaFoiRealizada="buscaPorNomeDeProdutoNaAPI" />
    <v-main>
      <HomePage></HomePage>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HomePage from './pages/HomePage.vue';

export default {
  name: 'App',
  components: { NavBar, HomePage},
  methods: {
    buscaPorNomeDeProdutoNaAPI(pesquisa) {
      console.log('Busca realizada:', pesquisa)
    },
  },
}
</script>
