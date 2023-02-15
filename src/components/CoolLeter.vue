<template>
  <span :id="letterId" :style="{ 'animation-delay': delayStr }">{{
    char
  }}</span>
</template>
<script>
export default {
  props: {
    length: Number,
    index: Number,
    char: String,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    delay() {
      return (this.index + 1) / 20;
    },
    delayStr() {
      return this.delay + "s";
    },
    newTime() {
      return (this.length - this.index) * 0.2;
    },
    newTimeStr() {
      return `${this.newTime}s`;
    },
    timeoutTotal() {
      return (this.delay + 1) * 1000;
    },
    letterId() {
      return "char-" + (this.index + 1);
    },
  },
};
</script>

<style scoped>
span {
  --delay: v-bind("delayStr");
  display: inline-block;
  opacity: 0;
  white-space: pre;
  transform-origin: bottom;
  animation: appear 1s cubic-bezier(0.07, 0.67, 0.23, 1.59) 1 forwards;
}

@keyframes appear {
  0% {
    transform: scale(0.1) translateX(-10vw) rotate(-120deg);
    opacity: 0;
  }

  100% {
    transform: scaleY(1) rotate(0);
    opacity: 1;
  }
}
</style>
