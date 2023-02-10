<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="form-modal">
        <p class="big-text">Paused!</p>
        <p>to continue playing press space bar</p>

        <ScoreList :user="user" />
      </div>
    </div>
  </div>
</template>
<script>
import ScoreList from "./ScoreList.vue";
export default {
  props: {
    user: Object,
  },
  components: {
    ScoreList,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.modal-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.form-modal {
  /* width: 80%; */
  display: flex;
  margin: auto;
  padding: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: #c0992f;
  border: solid 1px #3d3d3d;
  border-radius: 2vmin;
  box-shadow: 0 0 15px 2px#3d3d3d;
}

.big-text {
  font-size: 160%;
}

p {
  max-width: 20ch;
  line-height: 1.2rem;
}
</style>
