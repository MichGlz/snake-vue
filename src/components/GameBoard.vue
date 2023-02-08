<template>
  <h1>{{ speed }} {{ keyDown }}</h1>
  <div id="game-board">
    <Snake />
  </div>
</template>

<script>
export default {
  props: {
    speed: Number,
  },
  data() {
    return {
      gameOver: false,
      gamePaused: false,
      keyDown: null,
      isGameRuning: false,
      count: 0,
    };
  },
  methods: {
    handleKeydown(key) {
      if (key === "Space") {
        if (!this.isGameRuning) {
          this.gameLoop();
          this.isGameRuning = true;
        } else {
          this.gamePaused = !this.gamePaused;
        }
      }
      console.log(key);
      console.log(this.gamePaused);
      this.keyDown = key;
    },
    gameLoop() {
      if (this.gameOver) {
        return alert("you lose");
      }
      setInterval(() => {
        if (!this.gamePaused) {
          console.log(this.count);
          this.count += 1;
          // updateGame();
          // renderGame();
        }
      }, 1000 / this.speed);
    },
  },
  computed: {},
  mounted() {
    window.addEventListener("keydown", (e) => {
      this.handleKeydown(e.code);
    });
  },
};
// import { ref } from "vue";

// defineProps({
//   msg: String,
// });

// const gameOver = ref(false);
// const gameBoard = document.getElementById("game-board");

// const updateGame = () => {
//   updateSnake();
//   updateFood();
//   checkCollision();
// };

// const renderGame = () => {
//   gameBoard.innerHTML = "";
//   renderSnake(gameBoard);
//   renderFood(gameBoard);
// };

// const checkCollision = () => {
//   gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
// };

// const gameLoop = () => {
//   if (gameOver) {
//     return alert("you lose");
//   }

//   setInterval(() => {
//     updateGame();
//     renderGame();
//   }, 1000 / 4);
// };

// gameLoop();

// const gameLoop = (currentTime) => {
//   if (gameOver) {
//     return alert("you lose");
//   }

//   window.requestAnimationFrame(gameLoop);

//   const secsSinceLastRender = (currentTime - lastRenderTime) / 1000;
//   if (secsSinceLastRender < 1 / speed) return;
//   console.log(secsSinceLastRender);
//   lastRenderTime = currentTime;

//   updateGame();
//   renderGame();
// };

// window.requestAnimationFrame(gameLoop);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
