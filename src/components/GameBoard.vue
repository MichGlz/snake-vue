<template>
  <p>level:{{ speed }} score:{{ score }} {{ user.name }}</p>
  <div id="game-board">
    <SnakeSegment
      v-for="(segment, index) in snakeSegments"
      :key="index + 1"
      :index="index"
      :segment="segment"
    />
    <Food :position="foodPosition" />
  </div>
  <ModalInstructions
    v-if="!isAgree"
    :name="user.name"
    @agree-submited="updateAgree"
  />
</template>

<script>
import { getInputDirection } from "../modules/input.js";
import {
  update as updateSnake,
  equalPositions,
  onSnake,
} from "../modules/updateSnake.js";
import Food from "./Food.vue";
import SnakeSegment from "./SnakeSegment.vue";
import ModalInstructions from "./ModalInstructions.vue";
export default {
  props: {
    speed: Number,
    user: Object,
    updateScoreList: Function,
  },
  components: {
    SnakeSegment,
    Food,
    ModalInstructions,
  },
  data() {
    return {
      gameOver: false,
      gamePaused: false,
      keyDown: null,
      isGameRuning: false,
      isAgree: false,
      count: 0,
      gridSize: 21,
      foodPosition: {},
      onFood: false,
      snakeSegments: [{ x: 11, y: 11, dir: "0deg", isHead: true }],
      snakeDirection: { x: 0, y: -1, dir: "0deg" },
      score: 0,
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
      const timeId = setInterval(() => {
        if (!this.gamePaused) {
          this.updateGame();
        }
        if (this.gameOver) {
          clearInterval(timeId);
          alert("you lose");
        }
      }, 1000 / this.speed);
    },
    updateGame() {
      this.count += 1;
      this.renderSnake();
      this.renderFood();
      this.checkColision();
    },
    renderSnake() {
      this.snakeSegments = updateSnake(
        [...this.snakeSegments],
        this.snakeDirection,
        this.foodPosition
      );
    },
    renderFood() {
      if (equalPositions(this.snakeSegments[0], this.foodPosition)) {
        this.score += 1;
        this.foodPosition = this.getRandomPosition();
      }
    },
    checkColision() {
      if (this.headIsOut(this.snakeSegments[0]) || this.headOnSnake()) {
        this.gameOver = true;
        this.user.score = this.score;
        this.updateScoreList(this.user);
      }
    },
    headIsOut(position) {
      return (
        position.x < 1 ||
        position.x > this.gridSize ||
        position.y < 1 ||
        position.y > this.gridSize
      );
    },
    headOnSnake() {
      const body = [...this.snakeSegments];
      body.shift();
      return body.some((segment) => {
        return equalPositions(segment, this.snakeSegments[0]);
      });
    },
    updateAgree(val) {
      this.isAgree = val;
    },
    getRandomPosition() {
      let newPosition;
      while (newPosition == null || onSnake(newPosition, this.snakeSegments)) {
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

<style scoped></style>
