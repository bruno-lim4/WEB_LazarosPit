<template>
    <v-container fluid>
    <v-card class="pa-6 mx-auto" elevation="2" max-width="600" outlined>
      <v-card-title class="text-h5 font-weight-bold">
        Macro & Calorie Calculator
      </v-card-title>
      <v-card-subtitle class="mb-6">
        Estimate your daily needs based on your body and activity level.
      </v-card-subtitle>
      <v-divider class="my-4" />
      <!-- Gender -->
      <v-row class="mb-4 ml-1 mt-3" align="center">
        <v-col cols="12">
            <v-icon left>mdi-account</v-icon>
            <span class="ml-2">Gender</span>
        </v-col>
        <v-radio-group v-model="gender" class="d-flex ml-1" inline>
        <v-radio label="Male" value="male" class="me-6"></v-radio>
        <v-radio label="Female" value="female"></v-radio>
        </v-radio-group>
      </v-row>
  
      <!-- Inputs: Age, Height, Weight -->
      <v-row align="center" justify="space-between">
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="age"
            type="number"
            label="Age (years)"
            prepend-inner-icon="mdi-cake-variant"
            @blur="validateField('age')"
            :error-messages="errors.age"
            dense
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="height"
            type="number"
            label="Height (cm)"
            prepend-inner-icon="mdi-ruler"
            @blur="validateField('height')"
            :error-messages="errors.height"
            dense
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="weight"
            type="number"
            label="Weight (kg)"
            prepend-inner-icon="mdi-scale-bathroom"
            @blur="validateField('weight')"
            :error-messages="errors.weight"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
  
      <!-- Activity Level -->
      <v-row class="mb-6">
        <v-col cols="12">
            <v-select
            v-model="activityLevel"
            :items="activityOptions"
            label="Activity Level"
            prepend-inner-icon="mdi-flash"
            dense
            outlined
            item-title="label"
            item-value="value"
            return-object
            ></v-select>
        </v-col>
       </v-row>
  
      <!-- Calculate Button -->
      <v-row justify="center" class="mb-8">
        <v-btn color="green" large @click="calculate">
          Calculate
        </v-btn>
      </v-row>
  
      <!-- Results -->
      <v-divider v-if="calculado"></v-divider>
  
      <div class="mt-6" v-if="calculado">
        <div class="text-h6 font-weight-bold mb-4">
          Your Estimated Daily Needs:
        </div>
  
        <v-sheet
            class="d-flex align-center mb-4 justify-center"
            style="background-color: transparent; gap:8px"
            rounded
            height="48"
            elevation="0"
            px="4"
            >
            <v-icon color="red">mdi-fire</v-icon>
            <span>Total Calories:</span>
            <span class="font-weight-bold">{{ totalCalories }} kcal</span>
        </v-sheet>
  
        <v-row justify="space-between" align="center">
          <v-sheet
            class="pa-4 text-center"
            style="background-color: transparent; "
            rounded
            width="30%"
            elevation="0"
          >
            <v-icon color="green" size="28">mdi-fish</v-icon>
            <div class="mt-2">Protein</div>
            <div class="font-weight-bold">{{ protein }}g</div>
          </v-sheet>
  
          <v-sheet
            class="pa-4 text-center"
            style="background-color: transparent; "
            rounded
            width="30%"
            elevation="0"
          >
            <v-icon color="orange" size="28">mdi-baguette</v-icon>
            <div class="mt-2">Carbs</div>
            <div class="font-weight-bold">{{ carbs }}g</div>
          </v-sheet>
  
          <v-sheet
            class="pa-4 text-center"
            style="background-color: transparent;"
            rounded
            width="30%"
            elevation="0"
          >
            <v-icon color="blue" size="28">mdi-food</v-icon>
            <div class="mt-2">Fats</div>
            <div class="font-weight-bold">{{ fats }}g</div>
          </v-sheet>
        </v-row>
      </div>
    </v-card>
    </v-container>
</template>
  
<script>
export default {
    name: "CalculatorPage",
    data() {
        return {
        calculado: false,
        gender: 'male',
        age: 30,
        height: 180,
        weight: 80,
        activityLevel: { 
            label: 'Moderately active (exercise 3-5 days/week)', 
            value: 'moderately_active' 
        },
        activityOptions: [
            { label: 'Sedentary (little or no exercise)', value: 'sedentary' },
            { label: 'Lightly active (exercise 1-3 days/week)', value: 'lightly_active' },
            { label: 'Moderately active (exercise 3-5 days/week)', value: 'moderately_active' },
            { label: 'Active (exercise 6-7 days/week)', value: 'active' },
            { label: 'Very active (hard exercise & physical job)', value: 'very_active' },
        ],

        totalCalories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
        errors: {
          age: [],
          height: [],
          weight: []
        }
        };
    },
    methods: {
        calculate() {
            this.validateField('age');
            this.validateField('height');
            this.validateField('weight');

            if (this.errors.age.length || this.errors.height.length || this.errors.weight.length) {
              this.calculado = false;
              return;
            }

            this.calculado = true

            let tmb = 0;

            if (this.gender==='male') {
                tmb = 66 + (13.7*this.weight) + (5*this.height) - (6.8*this.age);
            } else if (this.gender==='female') {
                tmb = 655 + (9.6*this.weight) + (1.8*this.height) - (4.7*this.age);
            }

            switch (this.activityLevel.value) {
                case 'sedentary':
                    tmb *= 1.2;
                    break;
                case 'lightly_active':
                    tmb *= 1.375;
                    break;
                case 'moderately_active':
                    tmb *= 1.55;
                    break;
                case 'active':
                    tmb *= 1.725;
                    break;
                case 'very_active':
                    tmb *= 1.9;
                    break;
                default:
                    tmb*=0;
                    break;
            }

            // Exemplo: apenas mantém valores fixos por enquanto
            this.totalCalories = parseInt(tmb);
            this.protein = parseInt(1.6*this.weight);
            this.fats = parseInt((0.25*this.totalCalories)/9);
            this.carbs = parseInt((this.totalCalories-(this.protein*4+this.fats*9))/4);
        },
        validateField(field) {
          const value = this[field];
          const messages = [];

          if (field === 'age') {
            if (value < 10 || value > 120) messages.push('Age must be between 10 and 120.');
          }

          if (field === 'height') {
            if (value < 100 || value > 250) messages.push('Height must be between 100 and 250 cm.');
          }

          if (field === 'weight') {
            if (value < 20 || value > 500) messages.push('Weight must be between 20 and 500 kg.');
          }

          this.errors[field] = messages;
        }
    },
};
</script>

<style scoped>
.font-weight-bold {
font-weight: 700;
font-size: 1.6rem !important;
}
</style>
  