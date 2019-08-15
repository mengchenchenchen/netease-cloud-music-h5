<template>
  <div class="wrapper">
    <div @click="back">
      <v-icon>&#xe857;</v-icon>
    </div>
  </div>
</template>
<script>
import VIcon from "@comp/icon";
export default {
  components: { VIcon },
  data() {
    return {};
  },
  computed: {},
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
}
</style>