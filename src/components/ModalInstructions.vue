<template>
  <div class="modal-wrapper">
    <div class="modal">
      <form class="form-modal" @submit.prevent="onsubmit">
        <p>Hi {{ name }} welcome to the SnakeGame!</p>
        <p>
          To start the game and puased use the the spacebar, to move around use
          the arrow keys or "W", "A", "S", and "D"
        </p>

        <button class="btn-modal" type="submit" value="Submit">OK</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      agree: true,
    };
  },
  methods: {
    onsubmit() {
      this.$emit("agree-submited", this.agree);
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
}

.form-modal {
  width: 80%;
  display: flex;
  margin: auto;
  padding: 2rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  background-color: #c0992f;
  border: solid 1px #3d3d3d;
  border-radius: 2vmin;
  box-shadow: 0 0 15px 2px#3d3d3d;
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

.btn-modal:hover {
  box-shadow: inset 0 0 0 2px #3d3d3d;
}
</style>
