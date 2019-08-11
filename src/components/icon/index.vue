<template>
  <span @click="$emit('icon_click')" class="iconfont">
    <slot>&#xe77d;</slot>
  </span>
</template>
<script>
export default {
  props: {
    size: {
      type: String | Number,
      default: 16
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("iconfont.eot");
  src: url("iconfont.eot?#iefix") format("embedded-opentype"),
    url("iconfont.woff2") format("woff2"), url("iconfont.woff") format("woff"),
    url("iconfont.ttf") format("truetype"),
    url("iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>