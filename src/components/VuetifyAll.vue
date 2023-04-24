<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card width="330" elevation="2" >
            <v-btn-toggle
              v-model="toggle"
              class="rounded-bs-0 rounded-be-0"
              divided
              elevation="2"               
              >
              <v-btn width="110">Common</v-btn>
              <v-btn width="110">Modes</v-btn>
              <v-btn width="110">Other</v-btn>
            </v-btn-toggle>
          <v-card-text>
            Lorem ipsum dolor sit amet sdsd
          </v-card-text>
        </v-card>
        <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 60" style="background-color: rgba(var(--v-theme-background))"> -->
          <!-- <rect x="0" style="opacity: calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier)); background: rgb(var(--v-theme-surface)); color: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));" width="50" height="50">hmm2</rect> -->
<!--           <rect x="0" style="fill: rgba(var(--v-theme-on-surface), var(--v-high-emphasis-opacity));" width="50" height="50">hmm2</rect>
          <rect x="50" style="fill: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));" width="50" height="50">hmm2</rect>
          <rect x="100" style="fill: rgba(var(--v-theme-on-surface), var(--v-focus-opacity));" width="50" height="50">hmm2</rect>
          <rect x="150" style="fill: rgba(var(--v-theme-on-surface), var(--v-activated-opacity));" width="50" height="50">hmm2</rect>

          <rect x="200" style="fill: rgba(var(--v-theme-on-surface),1) opacity: rgba(var(--v-high-emphasis-opacity)* var(--v-theme-overlay-multiplier));" width="50" height="50">hmm2</rect>
          <rect x="250" style="fill: rgba(var(--v-theme-on-surface),1) opacity: rgba(var(--v-hover-opacity)* var(--v-theme-overlay-multiplier));" width="50" height="50">hmm2</rect>
          <rect x="300" style="fill: rgba(var(--v-theme-on-surface),1) opacity: rgba(var(--v-focus-opacity)* var(--v-theme-overlay-multiplier));" width="50" height="50">hmm2</rect>
          <rect x="350" style="fill: rgba(var(--v-theme-on-surface),1) opacity: rgba(var(--v-activated-opacity)* var(--v-theme-overlay-multiplier));" width="50" height="50">hmm2</rect> -->
<!--           <g v-for="(name,value) in opacs"
            :key="name">
            <rect :x="(keyIndex(value) * 50) + 5"
            width="50"
            height="50"
            :fill="`rgba(var(--v-theme-on-surface), var(--v-${value}))`"/>
            <text :x="(keyIndex(value) * 50) + 7" y="20">{{value}}</text>
          </g>
        </svg> -->

          <div v-for="(name,value) in opacs"
            :key="name"
            :y="(keyIndex(value) * 50) + 5"
            height="50"
            :style="{backgroundColor: `rgba(var(--v-theme-on-surface), var(--v-${value}))`}">
            {{value}}
          </div><br><br>

          <div v-for="(name,value) in opacs"
            :key="name"
            :y="(keyIndex(value) * 50) + 5"
            height="50"
            :style="{backgroundColor: `rgba(var(--v-theme-on-surface), calc((var(--v-${value}) * 0.2)))`}">
            {{value}}
          </div>


<!--           <div v-for="(name,value) in opacs"
            :key="name"
            :x="0"
            width="50"
            height="50"
            >Name {{name}}, Value "{{value}}", Key {{keyIndex(value)}}</div> -->
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

export default {
  name: 'VuetifyAll',
  data() {
    return {
      toggle: true,
      foggle: true,
      opacs: {
        'border-opacity': 0.12,
        'high-emphasis-opacity': 0.87,
        'medium-emphasis-opacity': 0.60,
        'disabled-opacity': 0.38,
        'idle-opacity': 0.10,
        'hover-opacity': 0.04,
        'focus-opacity': 0.12,
        'selected-opacity': 0.08,
        'activated-opacity': 0.12,
        'pressed-opacity': 0.16,
        'dragged-opacity': 0.08,
      },
      cols: {
        'border-color': '#FFFFFF',
        'theme-kbd': '#212529',
        'theme-on-kbd': '#FFFFFF',
        'theme-code': '#343434',
        'theme-on-code': '#CCCCCC',
      },
    }
  },
  methods: {
    keyIndex(key) {
      return Object.keys(this.opacs).indexOf(key)
    }
  },
};
</script>
<style>
  .hmm {
    background-color: rgb(var(--v-theme-surface));
  }
</style>