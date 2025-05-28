<template>
  <v-sheet border rounded class="ma-15">
    <v-data-table
      :headers="headers"
      :hide-default-footer="products.length < 11"
      :items="products"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon color="medium-emphasis" icon="mdi-book-multiple" size="x-small" start></v-icon>
              Products
          </v-toolbar-title>
          <v-btn
            prepend-icon="mdi-plus"
            text="Create Tag"
            class="mr-2"
            rounded="lg"
            border
            @click="tagDialog = true"
          />
          <v-btn
            class="me-2"
            prepend-icon="mdi-plus"
            rounded="lg"
            text="Add a Product"
            border
            @click="openProductDialog()"
          ></v-btn>
        </v-toolbar>
      </template>

      <template v-slot:[`item.title`]="{ value }">
        <v-chip :text="value" border="thin opacity-25" prepend-icon="mdi-book" label>
          <template v-slot:prepend>
            <v-icon color="medium-emphasis"></v-icon>
          </template>
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex ga-2 justify-end">
          <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="openProductDialog(item._id)"></v-icon>
          <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="deleteProduct(item._id)"></v-icon>
        </div>
      </template>
    </v-data-table>
  </v-sheet>
  <v-dialog v-model="tagDialog" max-width="400">
    <v-card title="Create a New Tag">
      <v-card-text>
        <v-text-field v-model="newTagName" :rules="[rules.required]" label="Tag Name" />
      </v-card-text>
      <v-card-actions>
        <v-btn text="Cancel" @click="tagDialog = false" />
        <v-spacer />
        <v-btn text="Save" @click="createNewTag"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="dialog" max-width="500">
    <v-card
      :subtitle="`${isEditing ? 'Update' : 'Create'}`"
      :title="`${isEditing ? 'Edit' : 'Add'} a Product`"
    >
      <template v-slot:text>
        <v-form ref="form" lazy-validation v-model="formValid">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="productToBeAdded.name" label="Name" :rules="[rules.required]" />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="productToBeAdded.description" label="Description" :rules="[rules.required]" />
            </v-col>

            <v-col cols="12" md="6">
              <v-select
                v-model="productToBeAdded.tags"
                :items="tags"
                item-title="name"
                item-value="_id"
                label="Tags"
                multiple
                chips
                clearable
              ></v-select>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="productToBeAdded.image"
                label="Image Path"
                :rules="[rules.required]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="productToBeAdded.price"
                type="number"
                :step="0.01"
                :min="0"
                label="Price"
                :rules="[rules.required, rules.price]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-number-input
                v-model="productToBeAdded.quantity"
                :min="0"
                label="Quantity"
                :rules="[rules.required, rules.quantity]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-number-input
                v-model="productToBeAdded.quantitySold"
                label="Quantity Sold"
                :rules="[rules.required, rules.quantitySold]"
                :min="0"
              />
            </v-col>
          </v-row>
        </v-form>
      </template>

      <v-divider></v-divider>

      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>
        <v-spacer></v-spacer>
        <v-btn text="Save" @click="saveProduct" :disabled="!formValid"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct } from '@/services/productService';
import { getTags, createTag } from '@/services/tagService';

export default {
  name: 'AdminProductPage',

  data() {
    return {
      products: [],
      tags: [],
      productToBeAdded: {
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        quantitySold: 0,
        tags: [],
        image: ''
      },
      dialog: false,
      isEditing: false,
      tagDialog: false,
      newTagName: '',
      formValid: false,
      headers: [
        { title: 'Name', value: 'name', align: 'start' },
        { title: 'Description', value: 'description' },
        { title: 'Price', value: 'price' },
        { title: 'Quantity', value: 'quantity' },
        { title: 'Quantity Sold', value: 'quantitySold' },
        { title: 'Image Path', value: 'image', align: 'end', sortable: false },
        { title: 'Tags', value: 'tags', align: 'end', sortable: false },
        { title: 'Actions', value: 'actions', align: 'end', sortable: false }
      ],
      rules: {
        required: v => !!v || 'This field is required',
        price: v => !!v && parseFloat(v) > 0 || 'Price must be greater than 0',
        quantity: v => v >= 0 || 'Quantity must be 0 or greater',
        quantitySold: v => v >= 0 || 'Quantity Sold must be 0 or greater'
      }
    }
  },

  async mounted() {
    await this.fetchProducts();
    await this.fetchTags();
  },

  methods: {
    async fetchProducts() {
      this.products = await getProducts();
    },
    async fetchTags() {
      this.tags = await getTags();
    },
    async openProductDialog(id = null) {
      this.isEditing = !!id;

      if (this.isEditing) {
        try {
          const response = await getProductById(id);
          this.productToBeAdded = {
            ...response,
            tags: (response.tags || []).map(tag => tag._id || tag)
          };
        } catch (err) {
          console.error("Erro ao buscar produto:", err);
          alert("Erro ao carregar produto para edição.");
          return;
        }
      } else {
        this.productToBeAdded = {
          name: '',
          description: '',
          price: 0,
          quantity: 0,
          quantitySold: 0,
          tags: [],
          image: ''
        };
      }
      this.dialog = true;
    },
    async createNewTag() {
      try {
        await createTag({ name: this.newTagName });
        this.fetchTags();
        this.newTagName = '';
        this.tagDialog = false;
      } catch (err) {
        console.error("Erro ao criar tag:", err);
        alert("Erro ao criar tag.");
      }
    },
    async deleteProduct(id) {
      await deleteProduct(id);
      await this.fetchProducts();
    },
    async saveProduct() {
      if (this.isEditing) {
        await updateProduct(this.productToBeAdded._id, this.productToBeAdded);
      } else {
        await createProduct(this.productToBeAdded);
      }
      this.dialog = false;
      await this.fetchProducts();
    }
  }
}
</script>
