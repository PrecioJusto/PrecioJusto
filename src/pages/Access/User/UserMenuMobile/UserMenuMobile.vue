<template>
  <div>
    <q-page>
        <div id="center">
          <h1>Opciones de usuario</h1>
           <q-list class="flex column">
            <template v-for="(menuItem, index) in menuList">
              <q-item
                :key="index"
                clickable
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon  v-if="menuItem.route == ''"  class="signOut" :name="menuItem.icon" />
                   <q-icon v-else :name="menuItem.icon" />
                </q-item-section>
                <q-item-section class="signOut" v-if="menuItem.route == ''" @click="signOut">
                  {{ menuItem.label }}
                </q-item-section>
                <q-item-section v-else @click="$router.push(menuItem.route).catch(()=>{})">
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </div>
    </q-page>
  </div>
</template>

<script src='./UserMenuMobile.js'></script>
<style scoped lang="scss" src="./UserMenuMobile.scss"></style>
