<template>
  <div view="home">
    <div class="app-card">

      <!-- Details -->
      <div class="call-details">

        <!--
          Component: CallHeader
          Props:
            {String} name -
        -->
        <CallHeader name="Niloya Kayıkçı" />

        <!--
          Component: CallDateTime
          Props:
            {Date} date-time -
        -->
        <CallDateTime :date-time="new Date()" />
      </div>

      <!-- Video Preview -->
      <div class="call-video-preview" :style="{ backgroundImage: 'url(' + require('../assets/img/video-preview.jpg') + ')'}">
        <div class="video-controls">

          <!-- Component: SPButton
            Props:
              {Boolean} circle - option for circle appearance
              {Boolean} light - option for light background color
              {Boolean} medium - option for medium size
              {String} icon - icon name without 'ic' prefix
          -->
          <Button
            circle
            light
            medium
            icon="microphone"
          />
          <Button
            circle
            light
            medium
            icon="camera"
          />
          <Button
            circle
            light
            medium
            icon="options"
          />
        </div>
      </div>

      <!-- Caller name -->
      <div class="input icon">
        <span class="ic-user" />
        <input
          type="text"
          placeholder="Your name"
          v-model="callerName"
        />
      </div>

      <!-- Options -->
      <div class="call-options">
        <div class="input label">
          <label for="">Camera</label>
          <select class="select">
            <option value="1">Facetime HD Camera</option>
            <option value="1">Facetime HD Camera 2</option>
          </select>
        </div>
        <div class="input label">
          <label for="">Speaker</label>
          <select class="select">
            <option value="1">Built-in Output</option>
            <option value="1">Built-in Output 2</option>
          </select>
        </div>
        <div class="input label">
          <label for="">Microphone</label>
          <select class="select">
            <option value="1">Built-in Microphone</option>
            <option value="1">Built-in Microphone 2</option>
          </select>
        </div>
        <div class="input label">
          <label for="">Microphone</label>
          <button type="button" class="button outline medium">Play Sound</button>
        </div>
      </div>

      <!-- Join Call -->
      <button type="button" class="button medium full-width"> Join Call </button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button';
  import CallHeader from '@/components/CallHeader';
  import CallDateTime from '@/components/CallDateTime';

  export default {
    name: 'Home',
    components: { CallHeader, CallDateTime, Button },
    data() {
      return {
        callerName: 'Adem İlter'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .app-card {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 16px;
    padding: 32px 24px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    max-width: 384px;
  }

  .call-video-preview {
    position: relative;
    height: 200px;
    margin: 24px 0;
    background: transparent none no-repeat center center / cover;
    border-radius: $sp-radius;
    width: 100%;
  }

  .call-video-preview .video-controls {
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX( -50% );
    white-space: nowrap;
    button + button {
      margin-left: 12px;
    }
  }

  .call-options {
    width: 100%;
    margin: 24px 0;
    .input + .input {
      margin-top: 8px;
    }
  }
</style>
