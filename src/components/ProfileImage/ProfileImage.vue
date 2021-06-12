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
          {{ imagePreviewData ? 'Actualiza la imagen' : 'Sube una foto de perfil' }}
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
      default: 220,
    },

    height: {
      type: Number,
      default: 220,
    },
  },
  data() {
    return {
      imagePreviewData: this.value,
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
          console.log('emit');
          this.imagePreviewData = e.target.result;
          this.$emit('input', this.imagePreviewData);
        };
        reader.readAsDataURL(files[0]);
      }
    },
  },
};
</script>
<style scoped>
.base-image-input {
  border-radius: 50%;
}

.base-image-input div{
  margin: auto;
    border-radius: 50%;
}

.content {
    border-radius: 50%;
  background-color: #F0F0F0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  background-size: cover;
  background-position: center;
  transition: 0.2s #53B175 ease-out;
}
.content:hover {
  background-color: #E9E9E9
}
.file-input {
  display: none;
}

.placeholder {
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.content.has-image {
  position: relative;
}

.content.has-image:after {
    border-radius: 50%;
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  transition: 0.2s #53B175 ease-out;
}

.content.has-image:hover:after {
  background: rgba(0, 0, 0, 0.2);
}

.content.has-image .placeholder {
  color: rgba(255, 255, 255, 0.5);
  z-index: 2;
}

.placeholder-text {
  font-size: 20px;
  margin-top: 10px;
}

.placeholder-icon {
  font-size: 40px;
}

.base-image-cropper {
  width: 100%;
  height: 100%;
}
</style>
