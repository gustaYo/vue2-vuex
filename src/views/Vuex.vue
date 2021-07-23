<template>
  <div class="vuex">
    <CountDown :time="999" :keyId="'some'" />

    <CountDown />

    <p>{{ $t("times", { msg: "times" }) }}</p>
    {{ $store.state.times }}

    <p>{{ $t("changeLocale", { msg: "Change" }) }}</p>
    <div class="locale-changer">
      <select v-model="$i18n.locale" @change="onChangeLocale($event)">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountDown from "@/components/CountDown.vue";

export default {
  name: "Vuex",
  components: {
    CountDown,
  },
  data() {
    return { langs: ["es", "en"] };
  },
  methods: {
    onChangeLocale(event) {
      localStorage.setItem("locale", event.target.value);
    },
  },
};
</script>
