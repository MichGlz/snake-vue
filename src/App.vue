<template>
  <div class="game-wrapper" :class="{ dark: !isNameInput }">
    <h2 v-if="isNameInput">Snake Game</h2>
    <ModalName
      v-if="!isNameInput"
      :updateUser="updateUser"
      @name-submited="updateUser"
    />
    <GameBoard
      v-else
      :speed="FRAMES_PER_SECOND"
      :user="user"
      :updateScoreList="updateScoreList"
    />
  </div>
</template>

<script>
import GameBoard from "./components/GameBoard.vue";
import ModalName from "./components/ModalName.vue";
export default {
  components: {
    GameBoard,
    ModalName,
  },
  data() {
    return {
      FRAMES_PER_SECOND: 5,
      isNameInput: false,
      user: {},
      scoreList: [],
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
      list.slice(0, 9);
      localStorage.setItem("scoreList", `${JSON.stringify(list)}`);
      this.scoreList = [...list];
    },
  },
  mounted() {
    if (localStorage.getItem("scoreList")) {
      this.scoreList = JSON.parse(localStorage.getItem("scoreList"));
    } else {
      let list = [];
      localStorage.setItem("scoreList", `${JSON.stringify(list)}`);
    }
  },
};
</script>

<style scoped></style>
