<template>
   <div class="wrapper">
      <div class="title-wrapper">
         <h3>Mis productos favoritos</h3>
      </div>
      <q-list bordered padding class="rounded-borders">
         <p v-if="products == null">No dispones de productos favoritos actualmente, puedes crearlos <span @click="$router.push('/').catch(()=>{})">aquí</span></p>
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

<script src='./FavouriteProductComponent.js'></script>
<style scoped lang="scss" src="./FavouriteProductComponent.scss"></style>
