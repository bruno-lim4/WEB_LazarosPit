<template>
    <div>
      <v-card
        class="mx-auto pa-12 pb-8 mt-10 mb-10"
        elevation="8"
        max-width="600"
        rounded="lg"
      >
        <v-row class="mb-4">
          <h1>Register</h1>
        </v-row>
  
        <v-form ref="form" v-model="valid" lazy-validation>
          <!-- Name -->
          <v-text-field
            class="mb-3"
            density="compact"
            label="Name"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            v-model="client.name"
            :rules="nameRules"
            required
          ></v-text-field>

          <!-- Email -->
          <v-text-field
            class="mb-3"
            density="compact"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            v-model="client.email"
            :rules="emailRules"
            required
          ></v-text-field>
  
          <!-- Password -->
          <v-text-field
            class="mb-3"
            :append-inner-icon="visiblePassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visiblePassword ? 'text' : 'password'"
            density="compact"
            label="Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            v-model="client.password"
            :rules="passwordRules"
            required
            @click:append-inner="visiblePassword = !visiblePassword"
          ></v-text-field>
  
          <!-- Confirm Password -->
          <v-text-field
            class="mb-3"
            :append-inner-icon="visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visibleConfirm ? 'text' : 'password'"
            density="compact"
            label="Confirm Password"
            prepend-inner-icon="mdi-lock-check-outline"
            variant="outlined"
            v-model="confirmPassword"
            :rules="confirmPasswordRules"
            required
            @click:append-inner="visibleConfirm = !visibleConfirm"
          ></v-text-field>
  
          <!-- Phone Number -->
          <v-text-field
            class="mb-3"
            density="compact"
            label="Phone Number"
            prepend-inner-icon="mdi-phone"
            variant="outlined"
            v-model="client.phoneNumber"
            :rules="phoneRules"
            required
          ></v-text-field>
  
          <!-- Weight -->
          <v-text-field
            class="mb-3"
            density="compact"
            label="Weight (kg)"
            type="number"
            prepend-inner-icon="mdi-scale-bathroom"
            variant="outlined"
            v-model="client.weight"
            :rules="weightRules"
            required
          ></v-text-field>
  
          <!-- Birth Date -->
          <v-text-field
            class="mb-3"
            density="compact"
            label="Birth Date"
            type="date"
            prepend-inner-icon="mdi-calendar"
            variant="outlined"
            v-model="client.birthDate"
            :rules="birthDateRules"
            required
          ></v-text-field>
  
          <v-divider class="my-6"></v-divider>
  
          <div class="text-subtitle-1 mb-4" style="opacity: 0.7;">Address</div>
  
          <v-row dense>
            <v-col cols="12" sm="4">
              <v-text-field
                label="ZIP Code"
                density="compact"
                v-model="client.zipCode"
                :rules="zipCodeRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="8">
              <v-text-field
                label="Street"
                density="compact"
                v-model="client.street"
                :rules="streetRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="4">
              <v-text-field
                label="Number"
                density="compact"
                v-model="client.addressNumber"
                :rules="numberRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="8">
              <v-text-field
                label="Neighborhood"
                density="compact"
                v-model="client.neighborhood"
                :rules="neighborhoodRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="6">
              <v-text-field
                label="City"
                density="compact"
                v-model="client.city"
                :rules="cityRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="6">
              <v-text-field
                label="State"
                density="compact"
                v-model="client.state"
                :rules="stateRules"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          
          <v-row dense>
            <v-col cols="12" sm="12">
              <v-text-field
                label="Complement"
                density="compact"
                v-model="client.complement"
              ></v-text-field>
            </v-col>
          </v-row>
  
          <v-btn
            class="mt-6 mb-8"
            color="green"
            size="large"
            variant="tonal"
            block
            :disabled="!valid"
            @click="register"
          >
            Register
          </v-btn>
        </v-form>
  
        <v-card-text class="text-center">
          Already have an account?
          <a
            @click="goToLoginPage"
            class="text-decoration-none"
            rel="noopener noreferrer"
            target="_blank"
            style="cursor:pointer; color:#4CAF50"
          >
            Log in!
          </a>
        </v-card-text>
      </v-card>
    </div>
</template>
  
<script>
import { createClient } from '@/services/clientService';

export default {
    data() {
        return {
        visiblePassword: false,
        visibleConfirm: false,
        valid: false,
        client: {},
        confirmPassword: '',
        nameRules: [
            v => !!v || 'Name is required',
        ],
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Invalid email',
        ],
        passwordRules: [
            v => !!v || 'Password is required',
            v => v.length >= 6 || 'Minimum 6 characters',
        ],
        confirmPasswordRules: [
            v => !!v || 'Please confirm your password',
            v => v === this.client.password || 'Passwords do not match',
        ],
        phoneRules: [
            v => !!v || 'Phone number is required',
            v => /^\d+$/.test(v) || 'Phone number must contain only digits',
            v => v.length >= 10 || 'Phone number must be at least 10 digits',
            v => v.length <= 15 || 'Phone number must be no more than 15 digits'
        ],
        weightRules: [
            v => !!v || 'Weight is required',
            v => (v >= 20 && v <= 500) || 'Weight must be between 20 and 500 kg.',
        ],
        birthDateRules: [
            v => !!v || 'Birth date is required',
            v => {
              const date = new Date(v);
              const now = new Date();
              return date < now || 'Birth date cannot be in the future';
            },
            v => {
              const year = new Date(v).getFullYear();
              return year >= 1900 || 'Birth year must be 1900 or later';
            }
        ],
        zipCodeRules: [
            v => !!v || 'ZIP code is required',
            v => /^\d{8}$/.test(v) || 'ZIP code must contain exactly 8 digits'
        ],
        streetRules: [v => !!v || 'Street is required'],
        numberRules: [v => !!v || 'Number is required'],
        neighborhoodRules: [v => !!v || 'Neighborhood is required'],
        cityRules: [v => !!v || 'City is required'],
        stateRules: [v => !!v || 'State is required'],
        };
    },
    watch: {
        password() {
        this.$refs.form?.validate();
        },
    },
    methods: {
        async register() {
        if (this.$refs.form.validate()) {
            try {
              await createClient(this.client)
              this.$router.push({name: 'LoginPage'})
            } catch (error) {
              alert(error.response.data.error)
            }
        }
        },
        goToLoginPage() {
            this.$router.push({name: 'LoginPage'})
        }
    },
};
</script>
  