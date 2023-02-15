<template>
  <div class="cool-text-wrapper">
    <h1>
      <CoolLeter
        v-for="(char, index) in textArr"
        :index="index"
        :key="index + 1"
        :char="char"
        :length="length"
      />
    </h1>
  </div>
</template>
<script>
import CoolLeter from "./CoolLeter.vue";
export default {
  props: {
    coolText: String,
  },
  components: {
    CoolLeter,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    textArr() {
      return this.coolText.split("");
    },
    length() {
      return this.coolText.split("").length;
    },
  },
};
</script>

<style scoped>
.cool-text-wrapper {
  position: absolute;
  top: 0;
  padding: 3rem;
}
h1 {
  font-size: 250%;
}
</style>
