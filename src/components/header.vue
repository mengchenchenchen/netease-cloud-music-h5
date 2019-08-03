<template>
  <v-layout justify-space-between>
    <v-icon @icon_click="menu_click"></v-icon>
    <v-layout>
      <span v-for="header in header_list" :key="header" @click="header_click(header)">{{header}}</span>
    </v-layout>
    <v-icon></v-icon>
  </v-layout>
</template>

<script>
import VLayout from "@comp/layout";
import VIcon from "@comp/icon";
export default {
  props: {},
  components: { VLayout, VIcon },
  data() {
    return {
      header_list: ["我的", "发现", "云村", "视频"]
    };
  },
  methods: {
    header_click(header) {
      console.log(header);
    },
    menu_click() {
      console.log("弹出右侧菜单");
    }
  }
};
</script>

<style scoped>
</style>
