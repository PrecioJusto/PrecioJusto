<template>
<div class="wrapper">
    <h3 class="list">{{ categoryName }}</h3>
    <div class="list">
        <ProductListComponent :key="products" v-if="products.length > 0" :products="products" />
    </div>
</div>
</template>

<script src='./ProductList.js'></script>
<style scoped lang="scss" src="./ProductList.scss"></style>
