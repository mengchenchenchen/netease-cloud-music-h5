<template>
  <div>
    <v-layout justify-space-between align-center>
      <v-icon @icon_click="menu_click">&#xe871;</v-icon>
      <v-layout>
        <span
          v-for="header in header_list"
          :key="header"
          class="title-content"
          @click="header_click(header)"
        >{{header}}</span>
      </v-layout>
      <v-icon>&#xebbb;</v-icon>
    </v-layout>
    <v-popup :show="show_menu" @mask_click="show_menu=false"></v-popup>
  </div>
</template>

<script>
import VLayout from "@comp/layout";
import VIcon from "@comp/icon";
import VPopup from "@comp/popup";
export default {
  props: {},
  components: { VLayout, VIcon, VPopup },
  data() {
    return {
      header_list: ["我的", "发现", "云村", "视频"],
      show_menu:false,
    };
  },
  methods: {
    header_click(header) {
      console.log(header);
    },
    menu_click() {
      this.show_menu = true
    }
  }
};
</script>

<style scoped>
.title-content {
  margin: 10px 20px;
}
</style>
