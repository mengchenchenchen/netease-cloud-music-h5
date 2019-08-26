<template>
  <div :style="item_style" class="wrapper">
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
        return 200;
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
    }
  },
  methods: {
    next() {
      console.log("next: " + this.margin_left);
      const index = (0 - this.margin_left) / this.item_width;
      if (index === this.item_count - 1) {
        this.margin_left = 0;
      } else {
        const next_left = this.margin_left - this.item_width;
        this.margin_left = next_left;
      }
    }
  }
};
</script>
<style scoped>
.wrapper {
  overflow: hidden;
}
.banners_wrapper {
  display: flex;
  flex-direction: row;
}
</style>