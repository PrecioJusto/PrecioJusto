<template>
   <div>
     <q-card class="my-card q-py-sm non-selectable" flat bordered>
      <div class="product-info-wrapper cursor-pointer" @click="productDetail">
        <img class="q-card-img non-selectable" :src="productImg">
        <q-skeleton height="100px" square v-if="skeleton" />

        <q-card-section class="product-info">
          <div class="text-h6 customBold">{{ productName }}</div>
          <div class="text-subtitle2 q-pt-md">{{ productBrand }}</div>
          <q-skeleton type="text" class="text-subtitle1" v-if="skeleton"/>
          <q-skeleton type="text" width="50%" class="text-subtitle1" v-if="skeleton"/>
        </q-card-section>
      </div>

      <q-card-actions class="card-footer q-px-md">
        <div>
          <q-skeleton type="text" width="20%" class="text-subtitle1" v-if="skeleton"/>
          <div class="product-price">{{ productPrice }}</div>
        </div>

        <div class="add-to-cart-wrapper">
          <q-btn @click="cartCounter--" v-if="cartCounter > 0" unelevated color="primary" icon="las la-minus" class="add-product"/>
          <div class="counter" v-if="cartCounter > 0">{{ cartCounter }}</div>
          <q-btn @click="cartCounter++" unelevated color="primary" icon="las la-plus" class="add-product"/>
        </div>
      </q-card-actions>
    </q-card>
   </div>
</template>

<script src='./ProductCardComponent.js'></script>
<style scoped lang="scss" src="./ProductCardComponent.scss"></style>
