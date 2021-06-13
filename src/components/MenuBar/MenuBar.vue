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
    <q-tab name="Home" icon="las la-store-alt" label="Home" v-if="$q.platform.is.mobile" @click="$router.push('/').catch(()=>{})"/>
    <q-tab name="Explora" icon="las la-stream" label="Explora" @click="$router.push('/explore').catch(()=>{})"/>
    <q-tab name="Cesta" icon="las la-shopping-cart" label="Cesta" @click="$router.push('/cart').catch(()=>{})"/>
    <q-tab name="Favoritos" icon="lar la-heart" label="Favoritos" @click="$router.push('/user/favourite').catch(()=>{})"/>
    <q-tab name="Cuenta" icon="lar la-user-circle" label="Cuenta" @click="$router.push('/user').catch(()=>{})" />
  </q-tabs>
 </div>
</template>

<script src='./MenuBar.js'></script>
<style scoped lang="scss" src="./MenuBar.scss"></style>
