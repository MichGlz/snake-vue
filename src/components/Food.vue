<template>
  <div class="food"></div>
</template>

<script>
export default {
  props: {
    position: Object,
  },
  data() {
    return {};
  },
  watch: {
    position(newInput, oldInput) {
      this.addAppear();
    },
  },
  methods: {
    addAppear() {
      this.appleComponent.addEventListener("animationend", this.removeAppear);
      this.appleComponent.classList.add("appear");
    },
    removeAppear() {
      this.appleComponent.removeEventListener(
        "animationend",
        this.removeAppear
      );
      this.appleComponent.classList.remove("appear");
    },
  },
  computed: {
    appleComponent() {
      const apple = document.querySelector(".food");
      return apple;
    },
  },
};
</script>

<style scoped>
.food {
  background-color: #3d3d3d;
  border-radius: 50%;
  grid-row-start: v-bind("position.y");
  grid-column-start: v-bind("position.x");
}
.appear {
  animation-name: appering;
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  opacity: 0;
  transform: scale(0.1);
}

@keyframes appering {
  0% {
    transform: scale(0.1);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
