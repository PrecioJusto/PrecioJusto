<template>
  <div>
    <q-page>
        <div id="center">
          <h1>Ajustes de notificaciones</h1>
          <p>Aquí puedes configurar cuando y por qué recibirás notificaciones,
             tanto en tu dispositivo móvil como en tu ordenador personal. Estas opciones se pueden cambiar en cualquier momento.</p>
          <div>
           <p>Producto favorito <span>baje</span> de precio.</p>
            <q-toggle
              v-model="fauvoriteProductNotifications"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
            />
          </div>
          <div>
          <p>Producto de un carrito <span>baje</span> de precio.</p>
            <q-toggle
              v-model="cartNotifications"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
            />
          </div>
          <div>
            <p>Producto deje de estar <span>disponible</span> en un supermercado.</p>
            <q-toggle
                v-model="fauvoriteProductInNotAvailableNotifications"
                checked-icon="check"
                color="green"
                unchecked-icon="clear"
              />
          </div>
        </div>
    </q-page>
  </div>
</template>

<script src='./UserNotifications.js'></script>
<style scoped lang="scss" src="./UserNotifications.scss"></style>
