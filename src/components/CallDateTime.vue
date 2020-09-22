<template lang="html">
  <div component="call-date-time">
    <div class="date-time">
      <div class="icon-label">
        <span class="ic-calendar"></span>
        <span class="label">{{ dateTime | moment( 'M MMM, ddd' ) }}</span>
      </div>
      <div class="icon-label">
        <span class="ic-clock"></span>
        <span class="label">10:15AM - 10:30AM</span>
      </div>
    </div>
    <div class="timezone">
      Timezone: Europe/Amsterdam
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dateTime: {
      type: Date,
      default: () => new Date()
    },
  }
}
</script>

<style lang="scss" scoped>
  [component="call-date-time"] {
    margin-top: 12px;
  }

  .date-time {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border: 1px solid #B9C3D5;
    border-radius: $sp-radius;
  }

  .icon-label + .icon-label {
    margin-left: 26px;
  }

  [class^="ic-"] {
    font-size: 15px;
    color: $sp-primary-color;
  }

  .timezone {
    text-align: center;
    margin-top: 8px;
    color: #818B9D;
    font-size: 15px;
  }
</style>
