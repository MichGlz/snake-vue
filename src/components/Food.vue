<template>
  <div class="food"></div>
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
  grid-row-start: 1;
  grid-column-start: 1;

  /* transform: scale(1 );*/
  animation: grow 1s ease-in-out 2 forwards;
}

@keyframes grow {
  100% {
    grid-row-start: v-bind("position.y");
    grid-column-start: v-bind("position.x");
  }
}
</style>
