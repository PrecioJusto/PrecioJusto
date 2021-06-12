<template>
  <div class="base-image-input">
    <div
      class="content"
      :class="{ 'has-image': imagePreviewData }"
      :style="{
        'width': `${width}px`,
        'height': `${height}px`,
        'background-image': `url(${imagePreviewData})`
      }"
      @click="chooseImage"
    >
      <input
        class="file-input"
        ref="fileInput"
        type="file"
        @change="onSelectFile"
      >
      <span class="placeholder">
        <i class="fas fa-image placeholder-icon"></i>
        <span class="placeholder-text">
          {{ imagePreviewData ? 'Change Your Picture' : 'Choose Picture' }}
        </span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProfileImage',
  props: {
    value: {
      type: String,
      default: '',
    },

    width: {
      type: Number,
      default: 200,
    },

    height: {
      type: Number,
      default: 200,
    },

    crop: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      imagePreviewData: this.value,
      imageToCropData: null,
      showCropperModal: false,
      showCropper: false,
    };
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click();
    },

    onSelectFile() {
      const input = this.$refs.fileInput;
      const { files } = input;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (this.crop) {
            this.imageToCropData = e.target.result;
            this.showCropperModal = true;
          } else {
            this.imagePreviewData = e.target.result;
            this.$emit('input', this.imagePreviewData);
          }
        };
        reader.readAsDataURL(files[0]);
      }
    },
  },
};
</script>
