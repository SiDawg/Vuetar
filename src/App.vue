<template>
  <v-app>
    <v-container>

        <v-row>
            <TopDashboard @scale-clicked="startDragging" @mousedown.prevent/>
        </v-row>
        <v-row>
          <div>
            <FretBoard  style="pointer-events:none" />
          </div>
        </v-row>
        <svg style="pointer-events: none; position: absolute; top: 0; left: 0; z-index: 10; height: 100%; width: 100%;">
          <circle :cx="ndX" :cy="ndY" :r="noteCircles" :fill="ndFill"/>
          <text 
            :x="ndX" 
            :y="ndY" 
            pointer-events="none"
          >
                        {{ this.ndScaleID }}
          </text>
        </svg>

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
        ndFill: '#8789C0',  
        isDragging: false,
        ndScaleID: 0, 

      }
    },

    components: {
      TopDashboard,
      FretBoard,
    },
  
    methods: {
      startDragging(event) {
        this.isDragging = true;
        this.ndX = this.clientX(event);
        this.ndY = this.clientY(event);
        this.ndScaleID = event.id
      },

      dragging(event) {
        if (this.isDragging) {
          this.ndX = this.clientX(event);
          this.ndY = this.clientY(event);
        }
      },

      stopDragging() {
        this.isDragging = false;
      },

      clientX(event) {
        if (event.type.startsWith("touch")) {
          return event.touches[0].clientX;
        } else {
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
      window.addEventListener('mousemove', this.dragging);
      window.addEventListener('touchmove', this.dragging);
      window.addEventListener('mouseup', this.stopDragging);
    },
    beforeUnmount() {
      window.removeEventListener('mousemove', this.dragging);
      window.removeEventListener('touchmove', this.dragging);
      window.removeEventListener('mouseup', this.stopDragging);

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
  background-color: #37474F !important;
/*  margin: 8px !important;*/
}

</style>
