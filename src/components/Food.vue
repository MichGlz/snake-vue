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
  background-color: #3d3d3d;
  border-radius: 50%;
  grid-row-start: v-bind("position.y");
  grid-column-start: v-bind("position.x");
}
</style>
