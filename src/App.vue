<template>
  <v-app>
    <v-container fluid >
        <v-row>
            <TopDashboard @scale-clicked="startDragging" @mousedown.prevent/>
        </v-row>
        <v-row >
            <FretBoard             
              :ndX="ndX"
              :ndY="ndY"
              :ndScaleID="ndScaleID"
              :isDragging="isDragging"
              :isMobile="isMobile"
              :scColor="scColors[colIndex]"
               />
        </v-row>
        <svg v-if="isDragging" style="pointer-events: none; position: absolute; top: 0; left: 0; z-index: 10; height: 100%; width: 100%;">
          <circle :cx="ndX" :cy="ndY" :r="noteCircles" :fill="scColors[colIndex]"/>
        </svg>
        <div style="pointer-events: none; position: absolute; top: 0; left: 0; z-index: 10; height: 100%; width: 100%;">

<!--           {{ this.ndX + ' ' + this.ndY }}<br>
          {{ this.ndOffX + ' ' + this.ndOffY }}<br> -->

        </div>
    </v-container>
  </v-app>
</template>

<script>
  /* eslint-disable */
  import TopDashboard from './components/TopDashboard.vue'
  import FretBoard from './components/FretBoard.vue'

  export default {
    data() {
      return {
        noteCircles: 15,
        ndX: 40,
        ndY: 40,
        isDragging: false,
        ndScaleID: 0, 
        ndOffX: 10,
        ndOffY: 10,
        isMobile: false,
        scColors: ['#8789C0', '#E71D36', '#8AC926', '#FF9F1C', '#E72AB2'],
        colIndex: 0,

      }
    },

    components: {
      TopDashboard,
      FretBoard,
    },
  
    methods: {
      startDragging(event) {        
        this.isDragging = true;

        this.ndOffX = this.clientX(event) - event.scaleCircles - event.scaleX 
        this.ndOffY = this.clientY(event) - event.scaleCircles - event.scaleY 

        this.ndX = this.clientX(event) - this.ndOffX;
        this.ndY = this.clientY(event) - this.ndOffY;
        this.ndScaleID = event.sid

      },

      dragging(event) {
        if (this.isDragging) {
          this.ndX = this.clientX(event) - this.ndOffX;
          this.ndY = this.clientY(event) - this.ndOffY;
        }
      },

      stopDragging() {
        if (this.isDragging === true) {
          this.colIndex++;
          if (this.colIndex >= this.scColors.length) this.colIndex = 0;
          this.isDragging = false;
        }
        
      },

      clientX(event) {
        if (event.type.startsWith("touch")) {
          this.isMobile = true;
          return event.touches[0].clientX;
        } else {
          this.isMobile = false;
          return event.clientX;
        }
      },

      clientY(event) {
        if (event.type.startsWith("touch")) {
          return event.touches[0].clientY;
        } else {
          return event.clientY;
        }
      },
    },
    mounted() {
      window.addEventListener('mousemove', this.dragging, {passive: true});
      window.addEventListener('touchmove', this.dragging, {passive: true});
      window.addEventListener('mouseup', this.stopDragging, {passive: true});
      window.addEventListener('touchend', this.stopDragging, {passive: true});
    },
    beforeUnmount() {
      window.removeEventListener('mousemove', this.dragging, {passive: true});
      window.removeEventListener('touchmove', this.dragging, {passive: true});
      window.removeEventListener('mouseup', this.stopDragging, {passive: true});
      window.removeEventListener('touchend', this.stopDragging, {passive: true});

    }
  }
</script>

<style>
.app {
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  border: 1px solid #888888;
  border-radius:10px;
  background-color: #43485E;
  margin: 10px;

}

.menuArea {
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
  margin: 10px;
/*  border: 1px solid #888888;*/
/*  border-radius:10px;*/
/*  background-color: #505560;  */
}

body {
  background-color: #27474F !important;
/*  margin: 8px !important;*/
  overflow: hidden;
}

</style>
