<template>
  <div
    class="food"
    :style="{ animation: 'grow .5s ease-in-out 1 forwards' }"
  ></div>
</template>

<script>
export default {
  props: {
    position: Object,
  },
  data() {
    return {};
  },
  computed() {},
};
</script>

<style scoped>
.food {
  width: 100%;
  height: 100%;
  background-color: #3d3d3d;
  border-radius: 50%;
  grid-row-start: v-bind("position.y");
  grid-column-start: v-bind("position.x");
  transform: scale(1);
}

@keyframes grow {
  0% {
    transform: scale(0.1);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
