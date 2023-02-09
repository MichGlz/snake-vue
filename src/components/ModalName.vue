<template>
  <div class="modal-wrapper">
    <div class="modal">
      <form class="form-modal" @submit.prevent="onsubmit">
        <p>Before starting the game, enter your name please.</p>
        <label class="label-modal">
          name:
          <input
            type="text"
            class="input-modal"
            id="userName"
            placeholder="_"
            required
            autofocus
            v-model="userName"
          />
        </label>
        <button
          class="btn-modal"
          type="submit"
          value="Submit"
          @click="hadleClick"
        >
          submit
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gameStar: Function,
    updateUser: Function,
  },
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    onsubmit() {
      let user = {
        name: this.userName,
        score: 0,
      };
      setTimeout(() => {
        this.$emit("name-submited", user);
      }, 250);
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
.label-modal {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.form-modal > .btn-modal {
  opacity: 0.5;
  pointer-events: none;
}

.form-modal:valid > .btn-modal {
  opacity: 1;
  pointer-events: all;
}

.input-modal {
  background-color: transparent;
  padding: 1vmin 0;
  border: none;
  border-radius: 1vmin;
  font-family: "Press Start 2P", cursive;
  color: #3d3d3d;
  font-size: 102%;
}

.input-modal:focus,
.input-modal:active {
  outline: none;
}

.input-modal::placeholder {
  color: #3d3d3d;
  opacity: 1;
  font-size: 110%;
}

.input-modal:placeholder-shown {
  opacity: 1;
  animation: blink 0.9s ease-in-out infinite;
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

@keyframes blink {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
}
</style>
