
<template>
  <div>
    <v-header></v-header>
    <div>{{banners}}</div>
  </div>
</template>

<script>
import VHeader from "@comp/header";
import api from "@src/api";
export default {
  components: { VHeader },
  props: {},
  data() {
    return {};
  },
  created() {
    api.get("/banner", { type: 1 }).then(res => {
      console.log(res);
      this.$store.commit('header_find/get_banners',res.data)
    });
  },
  methods: {},
  computed: {
    banners(){
      return this.$store.state.header_find.banners
    }
  }
};
</script>
<style  scoped>
</style>