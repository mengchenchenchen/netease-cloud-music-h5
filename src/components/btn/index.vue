<template>
  <span @click="$emit('click')">
    <slot></slot>
  </span>
</template>
<script>
export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {}
}
</script>
<style scoped>
</style>