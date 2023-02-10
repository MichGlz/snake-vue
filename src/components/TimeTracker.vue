<template>
  <span>{{ counter }}</span>
</template>
<script>
export default {
  props: {
    gamePaused: Boolean,
    gameRuning: Boolean,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    startTimer() {
      console.log("startTimer", this.gameRuning);
      // Checking if game is paused
      if (!this.gamePaused) {
        setTimeout(this.showTime, 1000);
      }
    },
    showTime() {
      this.counter += 1;
      this.startTimer();
    },
  },
  computed: {},
  mounted() {
    this.startTimer();
  },
};
</script>

<style scoped></style>
