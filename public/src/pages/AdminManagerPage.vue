<template>
  <v-sheet border rounded class="ma-15">
    <v-data-table
      :headers="headers"
      :hide-default-footer="admins.length < 11"
      :items="admins"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>
            <v-icon color="medium-emphasis" icon="mdi-book-multiple" size="x-small" start></v-icon>
            Admins
          </v-toolbar-title>

          <v-btn
            class="me-2"
            prepend-icon="mdi-plus"
            rounded="lg"
            text="Add an Admin"
            border
            @click="openDialog()"
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

      <template v-slot:[`item.createdAt`]="{ value }">
        {{ new Date(value).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) }}
      </template>

      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex ga-2 justify-end">
          <v-icon color="medium-emphasis" icon="mdi-pencil" size="small" @click="openDialog(item._id)"></v-icon>
          <v-icon color="medium-emphasis" icon="mdi-delete" size="small" @click="deleteAdmin(item._id)"></v-icon>
        </div>
      </template>
    </v-data-table>
  </v-sheet>

  <v-dialog v-model="dialog" max-width="500">
    <v-card
      :subtitle="`${isEditing ? 'Update' : 'Create'}`"
      :title="`${isEditing ? 'Edit' : 'Add'} an Admin`"
    >
      <template v-slot:text>
        <v-form ref="form" lazy-validation v-model="formValid">
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="adminToBeAdded.name"
                label="Name"
                :rules="[rules.required]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="adminToBeAdded.email"
                label="Email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>
            </v-col>

            <v-col v-if='!isEditing' cols="12" md="6">
              <v-text-field
                v-model="adminToBeAdded.password"
                label="Password"
                type="password"
                :rules="[rules.required, rules.password]"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="adminToBeAdded.phoneNumber"
                label="Phone Number"
                :rules="[rules.required, rules.phoneNumber]"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-form>
      </template>

      <v-divider></v-divider>

      <v-card-actions class="bg-surface-light">
        <v-btn text="Cancel" variant="plain" @click="dialog = false"></v-btn>
        <v-spacer></v-spacer>
        <v-btn text="Save" @click="saveAdmin" :disabled="!formValid"></v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-dialog v-model="confirmDialog" max-width="400">
    <v-card>
      <v-card-title class="text-h6">Confirmar Exclusão</v-card-title>
      <v-card-text>Tem certeza que deseja deletar este administrador?</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="confirmDialog = false">Cancelar</v-btn>
        <v-btn color="red" text @click="confirmDeleteAdmin">Deletar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-snackbar v-model="snackbar.show" :timeout="3000" color="success">
    {{ snackbar.message }}
  </v-snackbar>
</template>

<script>
import { getAdmins, getAdminById, createAdmin, updateAdmin, deleteAdmin } from '@/services/adminService';

export default {
  name: 'AdminManagerPage',

  data() {
    return {
      admins: [],
      snackbar: {
        show: false,
        message: ''
      },
      adminToBeAdded: {
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
      },
      dialog: false,
      isEditing: false,
      confirmDialog: false,
      adminIdToDelete: null,
      formValid: false,
      headers: [
        { title: 'Name', value: 'name', align: 'start' },
        { title: 'Email', value: 'email' },
        { title: 'Phone Number', value: 'phoneNumber' },
        { title: 'Account Created At', value: 'createdAt' },
        { title: 'Actions', value: 'actions', align: 'end', sortable: false },
      ],
      rules: {
        required: v => !!v || 'This field is required',
        email: v => !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Invalid email format',
        password: v => !!v && v.length >= 6 || 'Password must be at least 6 characters long',
        phoneNumber: v => !!v && /^\d+$/.test(v) || 'Phone number must contain digits only'
      }
    }
  },

  async mounted() {
    await this.fetchAdmins();
  },

  methods: {
    async fetchAdmins() {
      this.admins = await getAdmins();
    },
    async openDialog(id = null) {
      this.isEditing = !!id;

      if (this.isEditing) {
        try {
          const response = await getAdminById(id);
          this.adminToBeAdded = response;
        } catch (err) {
          console.error("Erro ao buscar admin:", err);
          alert("Erro ao carregar admin para edição.");
          return;
        }
      } else {
        this.adminToBeAdded = {
          name: '',
          email: '',
          phoneNumber: '',
          password: ''
        };
      }

      this.dialog = true;
    },
    deleteAdmin(id) {
      this.adminIdToDelete = id;
      this.confirmDialog = true;
    },
    showSuccess(message) {
      this.snackbar.message = message;
      this.snackbar.show = true;
    },
    async saveAdmin() {
      const isValid = await this.$refs.form.validate();
      if (!isValid) return;

      if (this.isEditing) {
        await updateAdmin(this.adminToBeAdded._id, this.adminToBeAdded);
        this.showSuccess('Administrador atualizado com sucesso.');
      } else {
        delete this.adminToBeAdded.createdAt;
        await createAdmin(this.adminToBeAdded);
        this.showSuccess('Administrador criado com sucesso.');
      }
      this.dialog = false;
      await this.fetchAdmins();
    },
    async confirmDeleteAdmin() {
      try {
        await deleteAdmin(this.adminIdToDelete);
        this.confirmDialog = false;
        this.adminIdToDelete = null;
        await this.fetchAdmins();
        this.showSuccess('Administrador deletado com sucesso.');
      } catch (err) {
        console.error("Erro ao deletar admin:", err);
        alert("Erro ao deletar administrador.");
      }
    },
  }
}
</script>
