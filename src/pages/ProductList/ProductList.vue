<template>
<div class="wrapper">
    <h3>{{ categoryName }}</h3>
    <ProductListComponent v-if="products.length > 0" :products="products" />
</div>
</template>

<script src='./ProductList.js'></script>
<style scoped lang="scss" src="./ProductList.scss"></style>
