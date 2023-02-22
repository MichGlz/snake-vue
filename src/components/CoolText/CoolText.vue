<template>
  <div class="cool-text-wrapper">
    <h1 class="cool-text">
      <CoolWord
        v-for="(word, index) in wordsArr"
        :index="index"
        :key="index + 1"
        :word="word"
        :length="word.length"
      />
    </h1>
  </div>
</template>
<script>
import CoolWord from "./CoolWord.vue";
export default {
  props: {
    coolText: String,
    setAnimationEnd: Function,
  },
  components: {
    CoolWord,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    wordsArr() {
      return this.coolText.split(" ");
    },
    // length() {
    //   return this.coolText.split(" ").length;
    // },
  },
  mounted() {
    //check if is an score list in the local storage, if not set one
    setTimeout(() => {
      this.$emit("set-animation-end");
    }, 2500);
  },
};
</script>

<style scoped>
.cool-text-wrapper {
  position: absolute;
  top: 0;
  padding: 3rem;
}
.cool-text {
  --font-size: clamp(1.5rem, 1.757rem + 1.036vw, 3rem);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: calc(var(--font-size) / 3);
  font-size: var(--font-size);
}
</style>
