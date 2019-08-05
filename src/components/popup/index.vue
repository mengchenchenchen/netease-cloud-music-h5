<template>
  <div v-if="anim_show" class="wrapper" @click="$emit('mask_click')">
    <div :style="content_style" class="content" :class="content_class"></div>
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
    return {
      content_style: {
        backgroundColor: this.bgColor
      },
      content_class: [],
      anim_show: false
    };
  },
  created() {},
  computed: {},
  methods: {
    start_anim() {
      this.content_class = ["init"];
      this.anim_show = true;
      setTimeout(() => {
        this.content_class = ["final"];
      }, 100);
    },
    fade_anim() {
      this.content_class = ["init"];
      setTimeout(() => {
        this.anim_show = false;
      }, 800);
    }
  },
  watch: {
    show(value) {
      if (value) {
        this.start_anim();
      } else {
        this.fade_anim();
      }
    }
  }
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
.init {
  width: 0;
}
.final {
  width: 200px;
}
.content {
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  transition: all 800ms ease;
}
</style>