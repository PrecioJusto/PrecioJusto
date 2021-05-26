<template>
 <div class="q-gutter-y-md page">
   <q-tabs
    v-model="tab"
    indicator-color="primary"
    text-white="primary"
    class="wrapper"
    dense
    no-caps
    shrink
    align="justify"
  >
    <q-tab name="Home" icon="las la-store-alt" label="Home" v-if="$q.platform.is.mobile" />
    <q-tab name="Explora" icon="las la-stream" label="Explora" />
    <q-tab name="Cesta" icon="las la-shopping-cart" label="Cesta" />
    <q-tab name="Favoritos" icon="lar la-heart" label="Favoritos" />
    <q-tab name="Cuenta" icon="lar la-user-circle" label="Cuenta" />
  </q-tabs>
 </div>
</template>

<script src='./MenuBar.js'></script>
<style scoped lang="scss" src="./MenuBar.scss"></style>
