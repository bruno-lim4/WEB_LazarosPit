<template>
<v-container class="pa-4" fluid>
<!-- Cabeçalho com título e filtro -->
    <v-container class='mt-5'>
        <v-row class="mb-3" align="center" justify="center" direction="column">
            <h1 class="text-h3 font-weight-bold mb-2">Amazing Offers</h1>
        </v-row>
        <v-row class="mb-8" align="center" justify="center" direction="column">
            <p class="text-subtitle-1 mb-6">Discover our premium supplement collection</p>
        </v-row>
    </v-container> 

    <v-row class="mb-8" align="center" justify="center" direction="column">
        <v-select
        :items="tags"
        label="Tags"
        variant="underlined"
        v-model="selectedCategory"
        class="ma-auto"
        style="max-width: 300px"
        />
    </v-row>

    <!-- Cards dos produtos -->
    <v-row dense>
        <v-col
        v-for="product in filteredProducts"
        :key="product.id"
        cols="12" sm="12" md="4" lg="3"
        >
        <ProductCard @click="goToProductPage(product)" :product="product"/>
        </v-col>
    </v-row>
</v-container>
</template>
  
<script>
    import ProductCard from '../components/ProductCard.vue'
    import { getProducts } from '@/services/productService';
    import { getTags } from '@/services/tagService';

    export default {
        name: 'HomePage',
        components: {
            ProductCard
        },
        props: {
            pesquisa: { type: String, default: '' }
        },
        data() {
            return {
            selectedCategory: null,
            tags: ['All tags'],
            products: [],
            }
        },
        computed: {
            filteredProducts() {
                console.log(this.pesquisa)
                let list = this.products

                // filtra por busca
                if (this.pesquisa.trim()) {
                    const term = this.pesquisa.toLowerCase()
                    list = list.filter(p => p.name.toLowerCase().includes(term))
                }

                // filtra pela tag escolhida
                if (this.selectedCategory && this.selectedCategory !== 'All tags') {
                    list = list.filter(p =>
                        p.tags.some(tag => tag.name === this.selectedCategory)
                    )
                }
                return list
            }
        },
        methods: {
            goToProductPage(product) {
                this.$router.push({ name: 'ProductPage', params: { id: product._id } })
            }
        },
        async mounted() {
            const res = await getProducts();
            const tags = await getTags();
            this.products = res;
                        
            tags.forEach(element => {
                this.tags.push(element.name)
            });
        },
    }
</script>
  