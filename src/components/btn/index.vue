<template>
  <span @click="$emit('click')">
    <slot></slot>
  </span>
</template>
<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
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
</style>