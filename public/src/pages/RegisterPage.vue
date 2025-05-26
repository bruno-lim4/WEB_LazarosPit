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
  
          <!-- Email -->
          <v-text-field
            class="mb-3"
            density="compact"
            label="Email"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
            v-model="email"
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
            v-model="password"
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
            v-model="phone"
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
            v-model="weight"
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
            v-model="birthDate"
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
                placeholder="00000-000"
                v-model="zipCode"
                :rules="zipCodeRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="8">
              <v-text-field
                label="Street"
                density="compact"
                v-model="street"
                :rules="streetRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="4">
              <v-text-field
                label="Number"
                density="compact"
                v-model="number"
                :rules="numberRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="8">
              <v-text-field
                label="Neighborhood"
                density="compact"
                v-model="neighborhood"
                :rules="neighborhoodRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="6">
              <v-text-field
                label="City"
                density="compact"
                v-model="city"
                :rules="cityRules"
                required
              ></v-text-field>
            </v-col>
  
            <v-col cols="12" sm="6">
              <v-text-field
                label="State"
                density="compact"
                v-model="state"
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
                v-model="complement"
                :rules="stateRules"
                required
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
export default {
    data() {
        return {
        visiblePassword: false,
        visibleConfirm: false,
        valid: false,
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        weight: '',
        birthDate: '',
        zipCode: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: '',
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
            v => v === this.password || 'Passwords do not match',
        ],
        phoneRules: [
            v => !!v || 'Phone number is required',
            v => /^\d{10,}$/.test(v) || 'Enter a valid number',
        ],
        weightRules: [
            v => !!v || 'Weight is required',
            v => v > 0 || 'Weight must be positive',
        ],
        birthDateRules: [
            v => !!v || 'Birth date is required',
        ],
        zipCodeRules: [
            v => !!v || 'ZIP code is required',
            v => /^\d{5}-\d{3}$/.test(v) || 'Format must be 00000-000',
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
        register() {
        if (this.$refs.form.validate()) {
            alert(`Registered successfully!\nEmail: ${this.email}\nPhone: ${this.phone}\nWeight: ${this.weight} kg\nBirth Date: ${this.birthDate}`);
            // Integrate with your backend here
        }
        },
        goToLoginPage() {
            this.$router.push({name: 'LoginPage'})
        }
    },
};
</script>
  