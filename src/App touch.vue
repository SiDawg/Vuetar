<template>
  <div class="container">
    <svg
      class="circle"
      :viewBox="`0 0 ${radius * 2} ${radius * 2}`"
      @mousedown.prevent="startDrag"
      @touchstart.prevent="startDrag"
      @mousemove.prevent="drag"
      @touchmove.prevent="drag"
      @mouseup.prevent="stopDrag"
      @touchend.prevent="stopDrag"
    >
      <circle
        :cx="radius"
        :cy="radius"
        :r="radius - 5"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      radius: 50,
      dragging: false,
      lastX: null,
      lastY: null,
    };
  },
  methods: {
    startDrag(event) {
      this.dragging = true;
      this.lastX = this.clientX(event);
      this.lastY = this.clientY(event);
    },
    drag(event) {
      if (!this.dragging) {
        return;
      }
      const x = this.clientX(event);
      const y = this.clientY(event);
      const deltaX = x - this.lastX;
      const deltaY = y - this.lastY;
      this.lastX = x;
      this.lastY = y;
      this.radius += deltaX;
      this.radius = Math.max(10, this.radius);
    },
    stopDrag() {
      this.dragging = false;
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
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.circle {
  border: 1px solid black;
  border-radius: 50%;
}
</style>
