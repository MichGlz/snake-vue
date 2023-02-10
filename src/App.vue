<template>
  <div class="game-wrapper" :class="{ dark: !isNameInput }">
    <h2 v-if="isNameInput">Snake Game</h2>
    <CoolText v-else :coolText="title" />
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
import CoolText from "./components/CoolText.vue";
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

<style scoped></style>
