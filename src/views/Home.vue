<template>
  <div view="home">
    <div class="app-card">
      <div class="call-details">
        <div class="call-title">
          <span class="call-with-label">Call with</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .app-card {
    position: relative;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 32px 24px;
    max-width: 384px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  }

  .call-title {
    .call-with-label {
      font-size: 13px;
      color: $primary-color;
    }
  }
</style>
