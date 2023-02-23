<template>
  <div class="app-wrapper">
    <div class="game-wrapper" :class="{ dark: !isNameInput }">
      <h2 v-if="isNameInput">Snake Game</h2>
      <CoolText v-else :coolText="title" @set-animation-end="setAnimationEnd" />
      <ModalName
        v-if="!isNameInput"
        :updateUser="updateUser"
        @name-submited="updateUser"
      />
      <GameBoard
        v-else-if="animationEnd"
        :speed="FRAMES_PER_SECOND"
        :user="user"
        :updateScoreList="updateScoreList"
      />
    </div>
    <div class="dial-keyboard">
      <div class="button-group">
        <button class="extra">back</button><button class="extra">ok</button>
      </div>
      <div class="number-pad">
        <button class="number-key">
          <span class="num">1</span><span class="letters"></span>
        </button>
        <button class="number-key">
          <span class="num">2</span><span class="letters">a b c</span>
        </button>
        <button class="number-key">
          <span class="num">3</span><span class="letters">d e f</span>
        </button>
        <button class="number-key">
          <span class="num">4</span><span class="letters">g h i</span>
        </button>
        <button class="number-key">
          <span class="num">5</span><span class="letters">j k l</span>
        </button>
        <button class="number-key">
          <span class="num">6</span><span class="letters">m n o</span>
        </button>
        <button class="number-key">
          <span class="num">7</span><span class="letters four">p q r s</span>
        </button>
        <button class="number-key">
          <span class="num">8</span><span class="letters">t u v</span>
        </button>
        <button class="number-key">
          <span class="num">9</span><span class="letters four">w x y z</span>
        </button>
        <button class="number-key">
          <span class="num">*</span><span class="letters"></span>
        </button>
        <button class="number-key">
          <span class="num">0</span><span class="letters space-bar">⎵</span>
        </button>
        <button class="number-key">
          <span class="num">#</span><span class="letters"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";
import ModalName from "./components/ModalName.vue";
import CoolText from "./components/CoolText/CoolText.vue";
export default {
  components: {
    GameBoard,
    ModalName,
    CoolText,
  },
  data() {
    return {
      FRAMES_PER_SECOND: 5,
      isNameInput: false,
      user: {},
      scoreList: [],
      title: "Snake Game",
      animationEnd: false,
    };
  },
  methods: {
    updateUser(val) {
      this.user = val;
      this.isNameInput = true;
    },
    updateScoreList(user) {
      const list = JSON.parse(localStorage.getItem("scoreList"));
      list.push(user);
      list.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        }
        if (a.score > b.score) {
          return -1;
        }
        return 0;
      });
      let newList = list.slice(0, 10);
      localStorage.setItem("scoreList", `${JSON.stringify(newList)}`);
      this.scoreList = [...list];
    },
    setAnimationEnd() {
      this.animationEnd = true;
    },
  },
  mounted() {
    //check if is an score list in the local storage, if not set one
    if (localStorage.getItem("scoreList")) {
      this.scoreList = JSON.parse(localStorage.getItem("scoreList"));
    } else {
      let list = [];
      localStorage.setItem("scoreList", `${JSON.stringify(list)}`);
    }
  },
};
</script>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  align-items: center;
  background-color: antiquewhite;
}

.dial-keyboard {
  display: grid;
  width: 90%;
  padding: 1rem;
  gap: 1rem;
}
.button-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
.number-pad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}
.number-key {
  display: grid;
}
</style>
