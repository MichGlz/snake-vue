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
    return {
      isTime: false,
    };
  },
  methods: {},
  computed: {
    delay() {
      return (this.index + 1) / 20;
    },
    delayStr() {
      console.log(this.delay + "s");
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
  mounted() {
    document
      .getElementById(this.letterId)
      .addEventListener("animationend", (e) => {
        if (e.target.classList.contains("colored")) return;
        // e.target.style.animation = "unset";

        // e.target.setProperty("--new-time", this.newTimeStr);
        e.target.classList.add("colored");
      });
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

.colored {
  opacity: 1;
  animation: coloring v-bind("newTimeStr") ease-out 1 forwards;
}
@keyframes coloring {
  40%,
  60% {
    color: blueviolet;
  }

  80%,
  20% {
    color: rgb(231, 169, 88);
  }

  100%,
  0% {
    color: #3d3d3d;
  }
}
</style>
