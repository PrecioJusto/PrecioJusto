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
    <q-tab name="Inicio" icon="las la-store-alt" label="Inicio" v-if="$q.platform.is.mobile" @click="$router.push('/').catch(()=>{})"/>
    <q-tab name="Explora" icon="las la-stream" label="Explora" @click="$router.push('/explore').catch(()=>{})"/>
    <q-tab name="Cesta" icon="las la-shopping-cart" label="Cesta" @click="$router.push('/carrito').catch(()=>{})"/>
    <q-tab v-if="token != null" name="Cuenta" icon="lar la-user-circle" label="Cuenta" @click="user" />
    <q-tab v-else name="Entra" icon="lar la-user-circle" label="Entra"  @click="$router.push('/login').catch(()=>{})" />
  </q-tabs>
 </div>
</template>

<script src='./MenuBar.js'></script>
<style scoped lang="scss" src="./MenuBar.scss"></style>
