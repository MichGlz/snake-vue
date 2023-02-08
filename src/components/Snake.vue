<template>
  <div
    class="snake"
    :class="{ head: this.segment.isHead, tail: this.segment.isTail }"
  ></div>
</template>

<script>
export default {
  props: {
    segment: Object,
    index: Number,
  },
  data() {
    return {};
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

.tail {
  border-radius: 0 0 120% 120%;
  transform: rotate(v-bind("segment.dir"));
}
</style>
