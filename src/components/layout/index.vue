<template>
  <div class="wrapper" :style="flex_style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String | Number,
      default: "auto"
    },
    row: {
      type: Boolean,
      default: false
    },
    rowReverse: {
      type: Boolean,
      default: false
    },
    column: {
      type: Boolean,
      default: false
    },
    columnReverse: {
      type: Boolean,
      default: false
    },
    wrap: {
      type: Boolean,
      default: false
    },
    justifyStart: {
      type: Boolean,
      default: false
    },
    justifyEnd: {
      type: Boolean,
      default: false
    },
    justifyCenter: {
      type: Boolean,
      default: false
    },
    justifySpaceBetween: {
      type: Boolean,
      default: false
    },
    justifySpaceAround: {
      type: Boolean,
      default: false
    },
    alignStart: {
      type: Boolean,
      default: false
    },
    alignEnd: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    },
    alignSpaceBetween: {
      type: Boolean,
      default: false
    },
    alignSpaceAround: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {
    flex_style() {
      return {
        width: this.width,
        flexDirection: this.flex_direction,
        flexWrap: this.flex_wrap,
        justifyContent: this.justify_content,
        alignItems: this.align_items
      };
    },
    flex_direction() {
      if (this.column) {
        return "column";
      }
      if (this.rowReverse) {
        return "row-reverse";
      }
      if (this.columnReverse) {
        return "column-reverse";
      }
      return "row";
    },
    flex_wrap() {
      if (this.wrap) {
        return "wrap";
      }
      return "nowrap";
    },
    justify_content() {
      // if (this.justifyStart) {
      //   return "flex-start";
      // }
      if (this.justifyEnd) {
        return "flex-end";
      }
      if (this.justifyCenter) {
        return "center";
      }
      if (this.justifySpaceBetween) {
        return "space-between";
      }
      if (this.justifySpaceAround) {
        return "space-around";
      }
      return "flex-start";
    },
    align_items() {
      if (this.alignEnd) {
        return "flex-end";
      }
      if (this.alignCenter) {
        return "center";
      }
      if (this.alignSpaceBetween) {
        return "space-between";
      }
      if (this.alignSpaceAround) {
        return "space-around";
      }
      return "flex-start";
    }
  },
  methods: {}
};
</script>
<style scoped>
.wrapper {
  display: flex;
}
</style>