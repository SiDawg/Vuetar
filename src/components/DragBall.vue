<template>
    <div class="dragArea">
      <svg @mousemove.prevent="dragging" 
        @touchmove.prevent="dragging"
        @mouseup.prevent="stopDragging" 
        @touchend.prevent="stopDragging"
        width="100%" height="100%" 
        >
        <circle @mousedown.prevent="startDragging" 
        @touchstart.prevent="startDragging"
       
        :style="{ cursor: isDragging ? 'grabbing' : 'grab' }" :cx="circleX" :cy="circleY" :r="radius" fill="#7777AA" />
      </svg>
    </div>
</template>

<script>
  export default {
    name: 'DragBall',

    components: {
      // HelloWorld,
    },

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
      this.mouseX = this.clientX(event);
      this.mouseY = this.clientY(event);
    },
    dragging(event) {
      if (this.isDragging) {
        const deltaX = this.clientX(event) - this.mouseX;
        const deltaY = this.clientY(event) - this.mouseY;
        this.circleX += deltaX;
        this.circleY += deltaY;
        this.mouseX = this.clientX(event);
        this.mouseY = this.clientY(event);
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
};
</script>

<style>
.dragArea {
  display: flex;
  justify-content: center;
  position: absolute;
  height: calc(100% - 130px);
  width: calc(100% - 20px);
/*  height: 100%;*/
  align-items: center;
  border: 1px solid #888888;
  border-radius:10px;
  background-color: rgba(var(--v-theme-surface));
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
