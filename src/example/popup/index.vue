<template>
  <div>
    <v-btn @click="make_show('left')">右侧弹出</v-btn>
    <v-popup :show="show_left" @mask_click="show_left=false"></v-popup>
  </div>
</template>
<script>
import VPopup from "@comp/popup";
import VBtn from "@comp/btn";
export default {
  components: { VPopup, VBtn },
  data() {
    return {
      show_left: false
    };
  },
  computed: {},
  methods: {
    make_show(pos) {
      this[`show_${pos}`] = true;
    }
  }
};
</script>
<style scoped>
</style>