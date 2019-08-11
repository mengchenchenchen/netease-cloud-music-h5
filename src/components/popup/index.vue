<template>
  <div>
    <div :class="wrapper_class" class="wrapper" @click="$emit('mask_click')">
      <div :style="content_style" class="content" :class="content_class"></div>
    </div>
  </div>
</template>
<script>
const transitionEvents = [
  "msTransitionEnd",
  "mozTransitionEnd",
  "oTransitionEnd",
  "webkitTransitionEnd",
  "transitionend"
];
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: "left"
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
      wrapper_class: [],
      anim_show: false,
      handleTransition: null
    };
  },
  created() {
    this.wrapper_class = ["wrapper-init"];
    this.content_class = ["init"];
  },
  mounted() {
    this.bindTransition();
  },
  beforeDestroy() {
    this.unBindTransition();
  },
  computed: {},
  methods: {
    start_anim() {
      setTimeout(() => {
        this.content_class = ["final"];
        this.wrapper_class = ["wrapper-final"];
      }, 100);
    },
    fade_anim() {
      this.content_class = ["init"];
    },
    bindTransition() {
      this.handleTransition = e => {
        if (e.propertyName !== "width") {
          return;
        }
        // 关闭时
        if (this.anim_show) {
          this.wrapper_class = ["wrapper-init"];
          this.anim_show = false;
        } else {
          // 打开时
          this.anim_show = true;
        }
      };
      transitionEvents.forEach(eventName => {
        this.$el.addEventListener(eventName, this.handleTransition);
      });
    },
    unBindTransition() {
      if (!this.handleTransition) return;
      transitionEvents.forEach(eventName => {
        this.$el.removeEventListener(eventName, this.handleTransition);
      });
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
    // anim_show(val) {
    //   console.log("+++", val);
    // }
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
.wrapper-init {
  visibility: hidden;
}
.final {
  width: 200px;
}
.wrapper-final {
  visibility: visible;
}
.content {
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  transition: all 800ms ease;
}
</style>