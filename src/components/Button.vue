<template lang="html">
  <button type="button" :class="{
      'circle': circle,
      'light': light,
      'medium': medium
    }">
    <span
      v-if="icon"
      :class="'ic-' + icon"
    />
  </button>
</template>

<script>
export default {
  props: {
    circle: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
