<template>
   <div class="wrapper">
      <div class="title-wrapper">
         <q-icon class="cart-icon" name="las la-shopping-cart" />
         <h3 class="customBold">Mi carrito</h3>
      </div>
      <q-list bordered padding class="rounded-borders">
         <div v-for="product in products" :key="product.id" >
            <q-item>
            <q-item-section avatar>
               <!--q-img
                  :src="url"
                  style="width: 100px"
                  :ratio="1"
                  basic
                  class="rounded-borders"
               /-->
            </q-item-section>
            <q-item-section class="clickable" cursor-pointer clickable v-ripple :to="`/producto/:`+ product.prodid" exact>
               <q-item-label>{{ product.prodname }}</q-item-label>
               <q-item-label caption>{{ product.brand.branname }}</q-item-label>
               <q-item-label>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section side >
               <q-icon @click="deleteProduct" name="las la-times" />
               <p></p>
            </q-item-section>
         </q-item>
         <q-separator spaced inset="item" />
         </div>
      </q-list>
      <div class="compare-wrapper">

      </div>
   </div>
</template>

<script src='./CartComponent.js'></script>
<style scoped lang="scss" src="./CartComponent.scss"></style>
