<template>
  <p>level:{{ speed }} key:{{ keyDown }} {{ gridSize }}</p>
  <div id="game-board">
    <Snake
      v-for="(segment, index) in snakeSegments"
      :key="index + 1"
      :index="index"
      :segment="segment"
    />
    <Food :position="foodPosition" />
  </div>
</template>

<script>
import { getInputDirection } from "../modules/input.js";
import {
  update as updateSnake,
  equalPositions,
  onSnake,
} from "../modules/updateSnake.js";
import Food from "./Food.vue";
import Snake from "./Snake.vue";
export default {
  props: {
    speed: Number,
  },
  components: {
    Snake,
    Food,
  },
  data() {
    return {
      gameOver: false,
      gamePaused: false,
      keyDown: null,
      isGameRuning: false,
      count: 0,
      gridSize: 21,
      foodPosition: {},
      onFood: false,
      snakeSegments: [{ x: 11, y: 11, dir: "90deg" }],
      snakeDirection: { x: 0, y: 0, dir: "" },
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
        return;
      }
      this.snakeDirection = getInputDirection(key, this.snakeDirection);
    },
    gameLoop() {
      if (this.gameOver) {
        return alert("you lose");
      }
      setInterval(() => {
        if (!this.gamePaused) {
          console.log(this.count);
          this.count += 1;
          this.updateGame();
          // renderGame();
        }
      }, 1000 / this.speed);
    },
    updateGame() {
      this.snakeSegments = updateSnake(
        [...this.snakeSegments],
        this.snakeDirection,
        this.foodPosition
      );

      //   if (equalPositions(this.snakeSegments[0], this.foodPosition)) {
      //     console.log("apple");
      //     this.foodPosition = this.getRandomPosition();
      //   }
    },
    getRandomPosition() {
      let newPosition;
      while (newPosition == null || onSnake(newPosition)) {
        newPosition = this.randomGridPosition();
      }
      return newPosition;
    },
    randomGridPosition() {
      return {
        x: Math.floor(Math.random() * this.gridSize) + 1,
        y: Math.floor(Math.random() * this.gridSize) + 1,
      };
    },
  },
  computed: {},
  mounted() {
    window.addEventListener("keydown", (e) => {
      this.handleKeydown(e.code);
    });
    this.foodPosition = this.getRandomPosition();
  },
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
