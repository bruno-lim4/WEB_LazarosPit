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
        :items="categories"
        label="Categories"
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
        <ProductCard @click="handleClick(product)" :product="product"/>
        </v-col>
    </v-row>
</v-container>
</template>
  
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
name: 'HomePage',
components: {
    ProductCard
},
data() {
    return {
    selectedCategory: null,
    categories: ['All Categories', 'Protein', 'Vitamins', 'Supplements'],
    products: [
        {
        id: 1,
        title: 'Whey Protein Isolate',
        price: 299.99,
        category: 'Protein',
        image: 'https://images.unsplash.com/photo-1590080877777-cb038a55259a?auto=format&fit=crop&w=600&q=80',
        },
        {
        id: 2,
        title: 'Vitamin D3 + K2',
        price: 299.99,
        category: 'Vitamins',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80',
        },
        {
        id: 3,
        title: 'Vitamin D3 + K2',
        price: 299.99,
        category: 'Vitamins',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80',
        },
        {
        id: 4,
        title: 'Vitamin D3 + K2',
        price: 299.99,
        category: 'Vitamins',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80',
        },
        {
        id: 5,
        title: 'Vitamin D3 + K2',
        price: 299.99,
        category: 'Vitamins',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80',
        },
        {
        id: 6,
        title: 'Vitamin D3 + K2',
        price: 299.99,
        category: 'Vitamins',
        image: 'https://images.unsplash.com/photo-1509475826633-fed577a2c71b?auto=format&fit=crop&w=600&q=80',
        },
    ],
    }
},
computed: {
    filteredProducts() {
    if (!this.selectedCategory || this.selectedCategory === 'All Categories') {
        return this.products
    }
    return this.products.filter(
        p => p.category === this.selectedCategory
    )
    },
},
methods: {
  handleClick(product) {
    this.$router.push({ name: 'ProductPage', params: { id: product.id } })
  }
}
}
</script>
  