<template>
  <div class="snake" :class="{ head: this.isHead }">
    <p>{{ index }}</p>
  </div>
</template>

<script>
export default {
  props: {
    segment: Object,
    index: Number,
  },
  data() {
    return {
      isHead: this.index === 0,
    };
  },
  computed() {},
};
</script>

<style scoped>
.snake {
  grid-row-start: v-bind("segment.y");
  grid-column-start: v-bind("segment.x");
}
.head {
  border-radius: 20% 20% 0 0;
  transform: rotate(v-bind("segment.dir"));
}
</style>
