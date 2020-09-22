<template lang="html">
  <div component="call-header">
    <div class="call-title">
      <span class="call-with-label">Call with</span>
      <h1 class="call-name">{{name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null
    },
  }
}
</script>

<style lang="scss" scoped>
  [component="call-header"] {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .call-with-label {
    font-size: 13px;
    color: $sp-primary-color;
  }

  .call-name {
    font-weight: 700;
    color: #000000;
    font-size: 24px;
    padding: 8px 0;
  }
</style>
