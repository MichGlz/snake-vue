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
  <ModalGameover v-if="gameOver" :user="user" @reset-game="resetGame" />
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
import ModalGameover from "./ModalGameover.vue";
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
    ModalGameover,
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
      snakeSegments: [
        { x: 11, y: 10, dir: "0deg", isHead: true },
        { x: 11, y: 11, dir: "0deg", isHead: false },
        { x: 11, y: 12, dir: "0deg", isTail: true },
      ],
      snakeDirection: { x: 0, y: -1, dir: "0deg" },
      score: 0,
    };
  },
  methods: {
    handleKeydown(key) {
      if (key === "Space" && this.isAgree) {
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
          // alert("you lose");
        }
      }, 1000 / this.speed);
    },
    updateGame() {
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
    resetGame() {
      this.gameOver = false;
      this.gamePaused = false;
      this.keyDown = null;
      this.isGameRuning = false;
      this.isAgree = false;
      this.count = 0;
      this.foodPosition = this.randomGridPosition();
      this.onFood = false;
      this.snakeSegments = [
        { x: 11, y: 10, dir: "0deg", isHead: true },
        { x: 11, y: 11, dir: "0deg", isHead: false },
        { x: 11, y: 12, dir: "0deg", isTail: true },
      ];
      this.snakeDirection = { x: 0, y: -1, dir: "0deg" };
      this.score = 0;
      this.user.score = 0;
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
