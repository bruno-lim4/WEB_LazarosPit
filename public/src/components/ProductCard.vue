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
      {{ product.name }}
    </v-card-title>

    <v-card-subtitle class="text-success" style="font-size: 1.25rem; font-weight: 600;">
        $ {{ product.price }}
    </v-card-subtitle>

    <v-card-text class="d-flex flex-wrap" style="gap: 0.5rem;">
      <v-chip
        v-for="tag in product.tags"
        :key="tag._id || tag.name"
        color="blue darken-2"
        text-color="white"
        label
        small
      >
        {{ tag.name }}
      </v-chip>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="green"
        block
        rounded="lg"
        @click.stop="addToCart"
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
import { addToCart } from '@/services/cartService';

export default {
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
      async addToCart() {
        try {
          await addToCart({
            productId: this.product._id,
            quantity: 1,
          });
        } catch (e) {
          console.error(e);
        }
      }
    }
}
</script>
  