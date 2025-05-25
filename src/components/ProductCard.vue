<template>
    <v-card
    class="mx-auto mb-3"
    max-width="344"
  >
    <v-img
      height="200px"
      :src="product.image"
      cover
    ></v-img>

    <v-card-title>
      {{ product.title }}
    </v-card-title>

    <v-card-subtitle class="text-success" style="font-size: 1.25rem; font-weight: 600;">
        $ {{ product.price }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        block
        rounded="lg"
      >
      <v-icon>
        mdi-cart
      </v-icon>
      <p class="ml-3">Add to cart</p>
    </v-btn>
    </v-card-actions>
    

  </v-card>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
}
</script>
  