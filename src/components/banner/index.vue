<template>
  <!-- <div class="wrapper" :style="size_style">
    <div :style="wrapper_style">
      <div v-for="banner in banners" :key="banner.bannerId">
        <img :src="banner.pic" :style="size_style" alt />
      </div>
    </div>
  </div>-->
  <el-carousel :height="height">
    <el-carousel-item v-for="item in banners" :key="item.bannerId">
      <img :src="item.pic" class="small" alt />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    },
    width: {
      type: [String, Number],
      default() {
        return 200;
      }
    },
    height: {
      type: [String, Number],
      default() {
        return "200px";
      }
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    wrapper_style() {
      return {
        width: this.width * this.banners.length + "px",
        display: "flex"
      };
    },
    size_style() {
      return {
        width: this.width + "px",
        height: this.height
      };
    }
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  overflow: hidden;
}
</style>