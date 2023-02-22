<template>
  <span class="cool-word">
    <CoolLeter
      v-for="(char, index) in textArr"
      :index="index"
      :key="index + 1"
      :char="char"
      :length="length"
    />
  </span>
</template>
<script>
import CoolLeter from "../CoolText/CoolLeter.vue";
export default {
  props: {
    word: String,
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
      return this.word.split("");
    },
    length() {
      return this.word.split("").length;
    },
  },
};
</script>
