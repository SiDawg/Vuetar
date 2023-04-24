 <template>
  <div class="app">
    <svg width="100%" height="100%" 
      @mousedown.prevent="startDragging" 
      @touchstart.prevent="startDragging"
      @mousemove="dragging" 
      @touchmove.prevent="dragging"
      @mouseup.prevent="stopDragging" 
      @touchend.prevent="stopDragging"
      :style="{ cursor: isDragging ? 'grabbing' : 'grab' }">
      <circle :cx="circleX" :cy="circleY" :r="radius" fill="#7777AA" />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDragging: false,
      mouseX: 0,
      mouseY: 0,
      circleX: 100,
      circleY: 100,
      radius: 25,
    }
  },
  methods: {
    startDragging(event) {
      this.isDragging = true;
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    },
    dragging(event) {
      if (this.isDragging) {
        const deltaX = event.clientX - this.mouseX;
        const deltaY = event.clientY - this.mouseY;
        this.circleX += deltaX;
        this.circleY += deltaY;
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      }
    },
    stopDragging() {
      this.isDragging = false;
    },
  },
};
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
}

body {
  background-color: black;
  margin: 8;
}
</style>
