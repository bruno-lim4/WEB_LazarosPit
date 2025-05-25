<template>
  <NavBar @buscaFoiRealizada="buscaPorNomeDeProdutoNaAPI"/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    
  }),
  methods: {
    buscaPorNomeDeProdutoNaAPI(pesquisa) {
      console.log(pesquisa);
    }
  }
}
</script>
