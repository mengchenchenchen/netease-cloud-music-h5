<template>
  <div>
    <v-header></v-header>
    <div>this is example page</div>
    <v-btn @click="go_to_exp">popup</v-btn>
  </div>
</template>
<script>
import VBtn from "@comp/btn";
import VHeader from '@comp/header'
export default {
  components: { VBtn ,VHeader},
  data() {
    return {};
  },
  computed: {},
  methods: {
    go_to_exp(){
      this.$router.push('/exp/popup')
    }
  }
};
</script>
<style scoped>
</style>