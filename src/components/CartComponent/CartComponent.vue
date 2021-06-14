<template>
   <div class="wrapper">
      <div class="title-wrapper">
         <q-icon class="cart-icon" name="las la-shopping-cart" />
         <h3 class="customBold">Mi carrito</h3>
      </div>
      <q-list bordered padding class="rounded-borders">
         <div v-for="(product, idx) in products" :key="product.id" >
            <q-item>
            <q-item-section avatar>
               <q-img
                  :src="product.img"
                  style="width: 100px"
                  :ratio="1"
                  basic
                  class="rounded-borders"
               />
            </q-item-section>
            <q-item-section class="clickable" @click="redirect(product.id)" cursor-pointer clickable v-ripple>
               <q-item-label>{{ product.name }}</q-item-label>
               <q-item-label caption>{{ product.brand }}</q-item-label>
               <!--q-item-label>
                  <div class="add-to-cart-wrapper q-ml-xl">
                    <q-btn outline  v-if="cartCounter < 1" disable unelevated color="primary" icon="las la-minus" class="add-product"/>
                    <q-btn outline  v-else @click="cartCounter--" unelevated color="primary" icon="las la-minus" class="add-product"/>
                    <div class="counter">{{ cartCounter }}</div>
                    <q-btn outline @click="cartCounter++" unelevated color="primary" icon="las la-plus" class="add-product"/>
                  </div>
               </q-item-label-->
            </q-item-section>

            <q-item-section side >
               <q-icon class="clickable deleteIcon" @click="deleteProduct(product.id)" name="las la-times" />
               <p class="product-price">{{product.price}}</p>
            </q-item-section>
         </q-item>
         <q-separator v-if="idx != (products.length -1)" spaced inset="item" />
         </div>
      </q-list>
      <div class="compare-wrapper">

      </div>
   </div>
</template>

<script src='./CartComponent.js'></script>
<style scoped lang="scss" src="./CartComponent.scss"></style>
