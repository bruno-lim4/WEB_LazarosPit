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
          typeof value === 'string' && value.includes('T')
            ? value.split('T')[0].split('-').reverse().join('/')
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
        <v-form ref="form" lazy-validation v-model="formValid">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.name"
                label="Name"
                :rules="[rules.required]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.email"
                label="Email"
                type="email"
                :rules="[rules.required, rules.email]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.password"
                label="Password"
                type="password"
                v-if="!isEditing"
                :rules="[rules.required, rules.password]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.phoneNumber"
                label="Phone Number"
                :rules="[rules.required, rules.phoneNumber]"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-number-input
                v-model="customerToBeAdded.weight"
                label="Weight (kg)"
                :min="20"
                :max="500"
                :rules="[rules.required, rules.weight]"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.birthDate"
                label="Birth Date"
                type="date"
                :rules="[rules.required, rules.birthDate]"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.zipCode"
                label="Zip Code"
                :rules="[rules.required, rules.zipCode]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.street"
                label="Street"
                :rules="[rules.required]"
              />
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="customerToBeAdded.addressNumber"
                label="Address Number"
                :rules="[rules.required, rules.addressNumber]"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.neighborhood"
                label="Neighborhood"
                :rules="[rules.required]"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.city"
                label="City"
                :rules="[rules.required]"
              />
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="customerToBeAdded.state"
                label="State"
                :rules="[rules.required]"
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
        <v-btn color="primary" text="Save" @click="saveCustomer" :disabled="!formValid"/>
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
      formValid: false,

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
      ],
      rules: {
        required: v => !!v || 'This field is required',

        email: v =>
          !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format',

        password: v =>
          !!v && v.length >= 6 || 'Password must be at least 6 characters long',

        phoneNumber: v =>
          !!v && /^\d+$/.test(v) || 'Phone number must contain digits only',

        weight: v =>
          v >= 20 && v <= 500 || 'Weight must be between 20 and 500 kg',

        birthDate: v => {
          if (!v) return 'Birth date is required';
          const date = new Date(v);
          const now = new Date();
          return date < now && date.getFullYear() >= 1900
            || 'Birth date must not be in the future and year must be ≥ 1900';
        },

        addressNumber: v=>
          /^\d+$/.test(v) || 'Number must contain digits only',

        zipCode: v =>
          !!v && /^\d{8}$/.test(v) || 'ZIP code must be exactly 8 digits'
      }

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
          if (client.birthDate) {
            const date = new Date(client.birthDate);
            client.birthDate = date.toISOString().split('T')[0]; // "1995-08-17"
          }
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
        await createClient(this.customerToBeAdded);
      }
      this.dialog = false;
      await this.fetchClients();
    },
  }
}
</script>
