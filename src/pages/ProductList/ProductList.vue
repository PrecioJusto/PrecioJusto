<template>
<div class="wrapper">
    <h3>{{ categoryName }}</h3>
    <!-- <ProductListComponent v-if="products.length > 0" :products="products" /> -->
    <div class="wrapper-list">
        <ProductCard class="product" v-for="product in currentProds" :key="product.name" :product="product" />
    </div>
    <div class="q-pa-lg flex flex-center">
        <div class="q-pa-lg flex flex-center">
            <q-pagination
                v-model="current"
                :max="max"
                :max-pages="6"
                direction-links
            />
        </div>
   </div>
</div>
</template>

<script src='./ProductList.js'></script>
<style scoped lang="scss" src="./ProductList.scss"></style>
