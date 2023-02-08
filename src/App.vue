<script setup>
import GameBoard from "./components/GameBoard.vue";
const FRAMES_PER_SECOND = 5;
</script>

<template>
  <div class="game-wrapper">
    <h2>Snake Game</h2>
    <GameBoard :speed="FRAMES_PER_SECOND"></GameBoard>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
