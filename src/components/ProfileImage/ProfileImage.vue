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

<script src='./ProfileImage.js'></script>
<style scoped lang="scss" src="./ProfileImage.scss"></style>
