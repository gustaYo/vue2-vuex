<template>
  <div class="counter">
    {{ $store.state.times[keyId] }}

    <button @click="addTime(5)">addTime</button>

    <button @click="restart()">restart</button>
  </div>
</template>

<style scoped>
.counter {
  width: 30px;
}
</style>

<script>
const mixin = {
  methods: {
    restart() {
      this.$store.commit("changeTime", { time: this.time, id: this.keyId });
    },
  },
};

export default {
  name: "CountDown",
  props: {
    time: {
      type: Number,
      default: 1 * 60 * 1000,
    },
    keyId: {
      default: Date.now(),
    },
  },
  created() {
    this.$store.dispatch("initTime", { time: this.time, id: this.keyId });
  },
  mixins: [mixin],
  methods: {
    addTime(diff) {
      this.$store.commit("discount", { id: this.keyId, diff });
    },
  },
};
</script>
