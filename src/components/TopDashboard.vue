<template>
    <v-container class="bg-background d-flex justify-center flex-shrink-0">
      <v-card :width="scaleBoxWidth" :min-width="scaleBoxWidth" :height="dashboardHeight" elevation="2"  class="rounded-lg mx-1">
          <v-btn-toggle
            v-model="toggle"
            class="rounded-t-lg rounded-b-0"
            divided
            elevation="2"  
            density="compact" 
            mandatory="force"      
            >
            <v-btn :width="scaleBoxWidth / 3" @click="activeGroup = 'Common'">Common</v-btn>
            <v-btn :width="scaleBoxWidth / 3" @click="activeGroup = 'Modes'">Modes</v-btn>
            <v-btn :width="scaleBoxWidth / 3" @click="activeGroup = 'Other'">Other</v-btn>
          </v-btn-toggle><br>
        <v-card-text no-gutters justify-center align-center style="padding: 0px 0px;">



<!--                <div class="title">{{ item.title }}</div>
                <div class="description">{{ item.description }}</div> -->


                  <svg 
                    :width="scaleBoxWidth" 
                    :height="dashboardHeight" 
                    :viewBox="
                      `${-scStroke / 2}, 
                      ${-scStroke / 2}, 
                      ${scaleBoxWidth}, 
                      ${dashboardHeight}`"

                  >

                    <g v-for="(scales, rowIndex) in scaleButtons.find(group => group.group === activeGroup).rows" :key="rowIndex">
                      <g v-for="(scale, itemIndex) in scales" :key="itemIndex">

                        <circle 
                          :cx="`${itemIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (itemIndex + 1))}`" 
                          :cy="`${rowIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (rowIndex + 1))}`" 
                          :r="scaleCircles" 
                          class="scaleCircle"
                          :id="scale.sid"
                          @mousedown.prevent="startDragging($event, scale.sid)" 
                          @touchstart.prevent="startDragging($event, scale.sid)" >
                        
                          <title>{{ scale.name }}</title>
                        </circle>
                        
                        <text 
                          :x="`${itemIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (itemIndex + 1))}`" 
                          :y="`${rowIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (rowIndex + 1))}`" 
                          class="scaleText"
                          pointer-events="none"
                        >
                        {{ scale.shortname }}
                        </text>
                        
                      </g>
                    </g>
                  </svg>

        </v-card-text>
      </v-card>
      <v-card width="330" elevation="2" class="rounded-lg mx-1">
        <v-card-text>
        </v-card-text>
      </v-card>
      </v-container>

</template>

<script>
import scaleButtons from './scaleButtons.json'
export default {
  name: 'TopDashboard',

  data() {
    return {

      dashboardHeight: 200,    
      activeGroup: 'Common',  
      toggle: true,

      scaleButtons: scaleButtons,
      scaleCircles: 20,
      itemsPerGroup: 7,
      scalePadding: 15, 
      scStroke: 3,     
      
    }
  },
  methods: {
    startDragging(event, sid) {
      const { type, touches, clientX, clientY } = event
      const scaleX = event.target.getBoundingClientRect().left 
      const scaleY = event.target.getBoundingClientRect().top
      this.$emit('scale-clicked', {sid, scaleCircles: this.scaleCircles, scaleX, scaleY, clientX, clientY, type, touches });
    }
  },

  computed: {
    scaleBoxWidth() {
      return (this.scaleCircles * 2) * this.itemsPerGroup + (this.scalePadding * (this.itemsPerGroup + 1) + (this.scStroke / 2));
    },

    groupScales() {
      const scaleGroups = [];

      for (let i = 0; i < scaleButtons.length; i++) {
        if (i % this.itemsPerGroup === 0) {
          scaleGroups.push([]);
        }
        const groupIndex = Math.floor(i / this.itemsPerGroup);
        scaleGroups[groupIndex].push(this.scaleButtons[i]);
      }

      return scaleGroups;
    }
  },

};
</script>
<style>
  .scaleCircle {
    fill: rgba(var(--v-theme-surface)); 
    stroke: rgba(var(--v-theme-surface-variant),.3); 
    /*stroke: white; */
    stroke-width: 3;
  }

  .scaleText {
    dominant-baseline: middle;
    fill: rgba(var(--v-theme-on-surface));
    text-anchor: middle;
    text-shadow: 1px 1px 1px #000000;
    pointer-events: none;
  }
</style>