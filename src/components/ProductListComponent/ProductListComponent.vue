<template>
<div class="wrapper">
  <ProductCard v-for="product in cleanedProducts" :key="product.name" :product="product" />
</div>
</template>

<script src='./ProductListComponent.js'></script>
<style scoped lang="scss" src="./ProductListComponent.scss"></style>
