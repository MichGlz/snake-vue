<template>
  <div class="list-wrapper">
    <h3>High Scores</h3>
    <ol>
      <li
        v-for="(score, index) in scoreList"
        :key="index + 1"
        :class="{ blink: matchUser(score) }"
      >
        <span>{{ score.name }}</span> <span>{{ score.score }}</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      agree: true,
    };
  },
  methods: {
    onclick() {
      this.$emit("reset-game", this.agree);
    },
    matchUser(score) {
      return score.score == this.user.score && score.name == this.user.name;
    },
  },
  computed: {
    scoreList() {
      const list = JSON.parse(localStorage.getItem("scoreList"));
      return list;
    },
  },
};
</script>

<style scoped>
.list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: solid 2px #3d3d3d;
  border-radius: 1rem;
}
li {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.2rem;
  color: #3d3d3d;
}
li:nth-child(odd) {
  background-color: #907323;
}
.blink {
  animation: blink 0.5s ease-in-out infinite;
}
@keyframes blink {
  0%,
  100% {
    background-color: transparent;
  }
  60%,
  80% {
    background-color: #907323;
  }
}
</style>
