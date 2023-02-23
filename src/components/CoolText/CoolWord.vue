<template>
  <span class="cool-word">
    <CoolLeter
      v-for="(char, index) in textArr"
      :index="index + indexSuplement"
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
    wordsArr: Array,
    wordIndex: Number,
    textMaxIndex: Number,
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
    indexSuplement() {
      if (this.wordIndex === 0) {
        return 0;
      } else {
        let suplement = 0;
        this.wordsArr.forEach((word, index) => {
          if (index <= this.wordIndex - 1) {
            suplement += word.length;
          }
        });
        // this.wordsArr[this.wordIndex - 1].length;
        return suplement;
      }
    },
  },
};
</script>
