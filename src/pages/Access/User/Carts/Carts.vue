<template>
  <div>
    <q-page>
        <div class="wrapper">
          <h1>Tus carritos guardados</h1>

          <q-list  bordered padding class="rounded-borders">
            <p v-if="cart == null">No dispones de carritos guardados actualmente, puedes crearlos <span @click="$router.push('/carrito').catch(()=>{})">aquí</span></p>
            <div v-else v-for="(cart, idx) in carts" :key="cart.shopid" >
              <q-item>
                <q-item-section @click="redirect(cart.shopid)">
                  <q-item-label><b>{{ cart.shopname }}</b></q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-icon class="clickable deleteIcon" @click="deleteCart(cart.shopid, cart.shopname)" name="las la-times" />
                </q-item-section>
              </q-item>
              <q-separator v-if="idx != (carts.length -1)" spaced />
            </div>
          </q-list>

        </div>
    </q-page>
  </div>
</template>

<script src='./Carts.js'></script>
<style scoped lang="scss" src="./Carts.scss"></style>
