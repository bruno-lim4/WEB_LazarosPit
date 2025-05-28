<template>
  <v-sheet border rounded class="ma-15">
    <v-data-table
      :headers="headers"
      :hide-default-footer="clients.length < 11"
      :items="clients"
    >
      <!-- Toolbar superior -->
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon icon="mdi-account-multiple" size="x-small" class="me-2"></v-icon>
            Customers
          </v-toolbar-title>
          <v-btn
            class="ms-auto"
            prepend-icon="mdi-plus"
            rounded="lg"
            text="Add a Customer"
            border
            @click="openDialog()"
          />
        </v-toolbar>
      </template>

      <template v-slot:[`item.birthDate`]="{ value }">
        {{
          value && !isNaN(Date.parse(value))
            ? new Date(value).toLocaleDateString('pt-BR')
            : '–'
        }}
      </template>

      <template v-slot:[`item.createdAt`]="{ value }">
        {{
          value && !isNaN(Date.parse(value))
            ? new Date(value).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
            : '–'
        }}
      </template>

      <!-- Ações de editar/deletar -->
      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex gap-2 justify-end">
          <v-icon small icon="mdi-pencil" @click="openDialog(item._id)" />
          <v-icon small icon="mdi-delete" @click="deleteCustomer(item._id)" />
        </div>
      </template>
    </v-data-table>
  </v-sheet>

  <!-- Dialog de criação/edição -->
  <v-dialog v-model="dialog" max-width="600">
    <v-card
      :title="`${isEditing ? 'Edit' : 'Add'} a Customer`"
      :subtitle="`${isEditing ? 'Update' : 'Create'}`"
    >
      <template v-slot:text>
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.name"
                label="Name"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.email"
                label="Email"
                required
                type="email"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.password"
                label="Password"
                type="password"
                :rules="[v => !!v || 'Password is required']"
                v-if="!isEditing"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.phoneNumber"
                label="Phone Number"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-number-input
                v-model="customerToBeAdded.weight"
                label="Weight (kg)"
                :min="20"
                :max="500"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.birthDate"
                label="Birth Date"
                type="date"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.zipCode"
                label="Zip Code"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.street"
                label="Street"
                required
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.addressNumber"
                label="Address Number"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.neighborhood"
                label="Neighborhood"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.city"
                label="City"
                required
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.state"
                label="State"
                required
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="customerToBeAdded.complement"
                label="Complement"
              />
            </v-col>
          </v-row>
        </v-form>
      </template>

      <v-divider/>

      <v-card-actions class="bg-surface-light">
        <v-btn variant="plain" text="Cancel" @click="dialog = false"/>
        <v-spacer/>
        <v-btn color="primary" text="Save" @click="saveCustomer"/>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient
} from '@/services/clientService';

export default {
  name: 'AdminCustomerPage',

  data() {
    return {
      clients: [],
      customerToBeAdded: {
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        weight: null,
        birthDate: '',
        zipCode: '',
        street: '',
        addressNumber: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: ''
      },
      dialog: false,
      isEditing: false,
      headers: [
        { title: 'Name', value: 'name', align: 'start' },
        { title: 'Email', value: 'email' },
        { title: 'Phone', value: 'phoneNumber' },
        { title: 'Weight', value: 'weight' },
        { title: 'Birth Date', value: 'birthDate' },
        { title: 'Account Created At', value: 'createdAt' },
        { title: 'Actions', value: 'actions', align: 'end', sortable: false }
      ]
    }
  },

  async mounted() {
    await this.fetchClients();
  },

  methods: {
    async fetchClients() {
      this.clients = await getClients();
    },

    async openDialog(id = null) {
      this.isEditing = Boolean(id);

      if (this.isEditing) {
        try {
          const client = await getClientById(id);
          this.customerToBeAdded = client;
        } catch (err) {
          console.error('Erro ao buscar cliente:', err);
          return alert('Falha ao carregar dados do cliente.');
        }
      } else {
        this.customerToBeAdded = {
          name: '',
          email: '',
          password: '',
          phoneNumber: '',
          weight: null,
          birthDate: '',
          zipCode: '',
          street: '',
          addressNumber: '',
          neighborhood: '',
          city: '',
          state: '',
          complement: ''
        };
      }

      this.dialog = true;
    },

    async deleteCustomer(id) {
      await deleteClient(id);
      await this.fetchClients();
    },

    async saveCustomer() {
      if (this.isEditing) {
        await updateClient(this.customerToBeAdded._id, this.customerToBeAdded);
      } else {
        delete this.customerToBeAdded.createdAt;
        console.log('Payload:', this.customerToBeAdded);
        await createClient(this.customerToBeAdded);
      }
      this.dialog = false;
      await this.fetchClients();
    },
  }
}
</script>
