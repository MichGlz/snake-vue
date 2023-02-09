<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="form-modal">
        <p class="big-text">GAME OVER</p>
        <p>try again!</p>
        <p>{{ user.name }} your score was {{ user.score }}</p>

        <button class="btn-modal" type="button" value="Submit" @click="onclick">
          OK
        </button>
      </div>
    </div>
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
  },
  computed() {},
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
  border: solid 2px hotpink;
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
.btn-modal {
  padding: 1vmin;
  background-color: #907323;
  color: #3d3d3d;
  border: solid 1px#3d3d3d;
  border-radius: 1vmin;
  font-family: "Press Start 2P", cursive;
  cursor: pointer;
  align-self: flex-end;
}

.btn-modal:hover,
.btn-modal:focus {
  box-shadow: inset 0 0 0 2px #3d3d3d;
  outline: none;
}
</style>
