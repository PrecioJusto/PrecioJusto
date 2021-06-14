<template>
<div class="wrapper">
  <div ref="scroll" class="list">
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

<script src='./ProductListComponent.js'></script>
<style scoped lang="scss" src="./ProductListComponent.scss"></style>
