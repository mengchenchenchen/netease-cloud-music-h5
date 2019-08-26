<template>
  <div :style="item_style" class="wx-wrapper">
    <div :style="banner_style" class="banners_wrapper">
      <div v-for=" item in banners" :key="item.bannerId">
        <img :src="item.pic" :style="item_style" alt />
      </div>
    </div>
  </div>
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
    curr_index: {
      type: Number,
      default: 0
    },
    item_width: {
      type: Number,
      default() {
        return Math.round(window.innerWidth * 0.8);
      }
    },
    item_height: {
      type: Number,
      default() {
        return 200;
      }
    }
  },
  components: {},
  data() {
    return {
      margin_left: 0
    };
  },
  created() {
    setInterval(() => {
      this.next();
    }, 2000);
    // setTimeout(() => {
    //   this.next()
    // }, 1000);
  },
  computed: {
    banner_style() {
      return {
        marginLeft: this.margin_left + "px",
        width: this.item_width * this.item_count + "px",
        height: this.item_height + "px"
      };
    },
    item_count() {
      return this.banners.length;
    },
    item_style() {
      return {
        width: this.item_width + "px",
        height: this.item_height + "px"
      };
    },
    min_margin_left() {
      return 0 - (this.item_count - 1) * this.item_width;
    }
  },
  methods: {
    next() {
      const next_left = this.margin_left - this.item_width;
      if (next_left <= this.min_margin_left) {
        this.margin_left = 0;
      } else {
        this.margin_left = next_left;
      }
      console.log(
        "item_width-" + this.item_width + "-margin_left-" + this.margin_left
      );
    }
  }
};
</script>
<style scoped>
.wx-wrapper {
  overflow: hidden;
  border-radius: 8px;
}
.banners_wrapper {
  display: flex;
  align-items: center;
}
</style>