<template>
    <div>
      <q-drawer show-if-above v-model="left" side="left" elevated>
        <q-scroll-area class="fit">
          <q-list class="flex column">
            <template v-for="(menuItem, index) in menuList">
              <q-item
                :key="index"
                clickable
                :active="menuItem.label === 'Outbox'"
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
        </q-scroll-area>
      </q-drawer>
    </div>

</template>

<script src='./OptionsAsideComponent.js'></script>
<style scoped lang="scss" src="./OptionsAsideComponent.scss"></style>
