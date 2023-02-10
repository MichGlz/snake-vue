<template>
  <span>{{ timeStr }}</span>
</template>
<script>
export default {
  props: {
    gamePaused: Boolean,
    gameRuning: Boolean,
    gameOver: Boolean,
  },
  data() {
    return {
      counter: 0,
      minutes: 0,
      timeStr: "00:00",
    };
  },
  methods: {
    startTimer() {
      const timeId = setInterval(() => {
        if (this.gameRuning && !this.gamePaused) {
          this.counter += 1;
          this.counterToString();
        }
        if (this.gameOver) {
          clearInterval(timeId);
        }
      }, 1000);
    },
    counterToString() {
      if (this.counter > 59) {
        this.counter = 0;
        this.minutes += 1;
      }
      this.timeStr = `${
        this.minutes < 10 ? "0" + this.minutes : this.minutes
      }:${this.counter < 10 ? "0" + this.counter : this.counter}`;
    },
  },
  computed: {},
  mounted() {
    this.startTimer();
  },
};
</script>

<style scoped></style>
