<template>
    <v-container class="bg-background d-flex justify-center flex-grow-1">
      <v-card width="360" elevation="2"  class="rounded-bs-0 rounded-be-0 mx-1" >
          <v-btn-toggle
            v-model="toggle"
            class="rounded-bs-0 rounded-be-0"
            divided
            elevation="2"  
            density="compact" 
            mandatory="force"      
            >
            <v-btn width="110">Common</v-btn>
            <v-btn width="110">Modes</v-btn>
            <v-btn width="110">Other</v-btn>
          </v-btn-toggle><br>
        <v-card-text no-gutters justify-center align-center style="padding: 10px 10px;">

            <!-- <v-responsive no-gutters justify-center :max-height="scaleCircles * 2 + 10"> -->
              <v-responsive no-gutters justify-center >
              <v-row  align="center" align-content="center" style="padding: 12px 0px 0px 12px;">
                <v-col no-gutters v-for="i in 15" :key="i" cols="2"  style="padding: 5px 0px 0px 0px;">
                  <svg 
                    :width="scaleCircles * 2" 
                    :height="scaleCircles * 2" 
                    :viewBox="
                      `${-scStroke / 2}, 
                      ${-scStroke / 2}, 
                      ${scaleCircles * 2 + scStroke}, 
                      ${scaleCircles * 2 + scStroke}`"
                  >
                    <circle 
                      :cx="scaleCircles" 
                      :cy="scaleCircles" 
                      :r="scaleCircles" 
                      class="scaleCircle"
                    />
                    
                    <text 
                      dominant-baseline="middle" 
                      fill="white" 
                      x="50%" y="50%" 
                      :transform="`translate(${-scStroke / 2}, ${-scStroke / 2})`" 
                      text-anchor="middle">

                      Dor
                    </text>
                  </svg>
                </v-col>
              </v-row>
            </v-responsive>


        </v-card-text>
      </v-card>
      <v-card width="330" elevation="2" class="rounded-bs-0 rounded-be-0  mx-0">
        <v-card-text>
          2nd Card
        </v-card-text>
      </v-card>
      </v-container>

</template>

<script>

export default {
  name: 'TopDashboard',
  data() {
    return {
      toggle: true,
      scaleCircles: 20,
      scStroke: 3,

    }

  },
  computed: {
    strokeColor() {
      return this.$vuetify.theme.currentTheme.surface; // Replace with the appropriate theme color variable
    }
  },
  
};
</script>
<style>
  .scaleCircle {
    fill: rgba(var(--v-theme-surface)); 
    stroke: rgba(var(--v-theme-surface-variant),.3); 
    stroke-width: 3;
  }
</style>