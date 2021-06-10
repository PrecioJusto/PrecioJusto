<template>
  <div>
    <q-page>
        <div id="center">
          <h1>Ajustes de notificaciones</h1>
          <p>Aquí puedes configurar cuando y por qué recibirás notificaciones,
             tanto en tu dispositivo móvil como en tu ordenador personal. Estas opciones se pueden cambiar en cualquier momento.</p>
          <div>
           - Cuando un producto favorito <span>baje</span> de precio.
            <q-toggle
              v-model="fauvoriteProductNotifications"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
            />
          </div>
          <div>
           - Cuando un producto de un carrito <span>baje</span> de precio.
            <q-toggle
              v-model="cartNotifications"
              checked-icon="check"
              color="green"
              unchecked-icon="clear"
            />
          </div>
          <div>
            - Cuando un producto deje de estar <span>disponible</span> en un supermercado.
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
