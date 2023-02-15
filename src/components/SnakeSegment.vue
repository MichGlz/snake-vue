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
  width: 100%;
  height: 100%;
  grid-row-start: v-bind("segment.y");
  grid-column-start: v-bind("segment.x");
}
.head {
  border-radius: 20% 20% 0 0;
  transform: rotate(v-bind("segment.dir")) scale(1.2);
  position: relative;
}

.head::before,
.head::after {
  content: "";
  position: absolute;
  width: 30%;
  aspect-ratio: 1;
  border-radius: 50%;
  bottom: 0;
  left: 10%;
  background-color: #907323;
}

.head::after {
  left: unset;
  right: 10%;
}

.tail {
  border-radius: 0 0 120% 120%;
  transform: rotate(v-bind("segment.dir"));
}
</style>
