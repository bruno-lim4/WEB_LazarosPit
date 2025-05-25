<template>
  <v-app>
    <NavBar @buscaFoiRealizada="buscaPorNomeDeProdutoNaAPI" />
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
  },
}
</script>
