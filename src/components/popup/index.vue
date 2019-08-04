<template>
  <div v-if="show" class="wrapper" @click="$emit('mask_click')">
    <transition name="slide-fade">
      <div :style="content_style" class="content"></div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: "top"
    },
    width: {
      type: String | Number,
      default: "200px"
    },
    bgColor: {
      type: String,
      default: "#fff"
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    content_style() {
      return {
        width: this.width,
        top: 0,
        bottom: 0,
        left: 0,
        backgroundColor: this.bgColor
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  background-color: rgba(0, 0, 0, 0.12);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.content {
  position: absolute;
}
</style>