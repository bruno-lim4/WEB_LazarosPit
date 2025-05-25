<template>
  <div>
    <v-card
      class="mx-auto pa-12 pb-8 mt-10"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-row class="mb-4">
        <h1>Login</h1>
      </v-row>

      <v-form ref="form" v-model="valid" lazy-validation>

        <div class="text-subtitle-1 mb-2" style="opacity: 0.7;">Account</div>

        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          v-model="email"
          :rules="emailRules"
          required
        ></v-text-field>

        <div
          class="text-subtitle-1 mb-2 d-flex align-center justify-space-between"
          style="opacity: 0.7;"
        >
          Password
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          v-model="password"
          :rules="passwordRules"
          required
          @click:append-inner="visible = !visible"
        ></v-text-field>

        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        ></v-card>

        <v-btn
          class="mb-8"
          color="green"
          size="large"
          variant="tonal"
          block
          :disabled="!valid"
          @click="login"
        >
          Log In
        </v-btn>

      </v-form>

      <v-card-text class="text-center">
        Don't have an account?
        <a
          @click="goToRegisterPage"
          class="text-decoration-none"
          rel="noopener noreferrer"
          target="_blank"
          style="cursor:pointer; color:#4CAF50"
        >
          Sign up!
        </a>
      </v-card-text>
    </v-card>
  </div>
</template>
  
<script>
export default {
data() {
    return {
    visible: false,
    email: '',
    password: '',
    valid: false,
    emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Invalid email',
    ],
    passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Minimum 6 characters',
    ],
    };
},
methods: {
    login() {
    if (this.$refs.form.validate()) {
        alert(`Login válido!\nEmail: ${this.email}\nSenha: ${this.password}`);
        // Aqui você pode colocar a chamada à API para autenticar
    }
    },
    goToRegisterPage() {
        this.$router.push({name: 'RegisterPage'})
    }
},
};
</script>
  