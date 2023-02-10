<template>
  <span>{{ counter }}</span>
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
    };
  },
  methods: {
    startTimer() {
      const timeId = setInterval(() => {
        if (this.gameRuning && !this.gamePaused) {
          this.counter += 1;
        }
        if (this.gameOver) {
          clearInterval(timeId);
        }
      }, 1000);
    },
  },
  computed: {},
  mounted() {
    this.startTimer();
  },
};
</script>

<style scoped></style>
