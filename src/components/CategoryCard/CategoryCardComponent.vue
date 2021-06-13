<template>
   <div :class="cardMode">
     <q-card id="cardItem" class="q-pa-sm q-ma-sm cursor-pointer non-selectable" flat bordered @click="categoryDetail" :class="color">
      <div class="category-info-wrapper">
        <img class="category-img" :src="categoryImg">

        <q-card-section class="product-info q-mt-sm">
          <div v-if="cardMode === 'explore-page'" class="customBold">{{ categoryName }}</div>
          <div v-if="cardMode === 'home-page'">{{ categoryName }}</div>
        </q-card-section>
      </div>
    </q-card>
   </div>
</template>

<script src='./CategoryCardComponent.js'></script>
<style scoped lang="scss" src="./CategoryCardComponent.scss"></style>
