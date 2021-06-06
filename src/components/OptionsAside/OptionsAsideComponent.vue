<template>
    <div>
      <q-drawer show-if-above v-model="left" side="left" elevated>
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList">
              <q-item
                :key="index"
                clickable
                :active="menuItem.label === 'Outbox'"
                v-ripple
              >
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section v-if="menuItem.route == ''">
                  {{ menuItem.label }}
                </q-item-section>
                <q-item-section v-if="menuItem.route != ''" @click="$router.push(menuItem.route).catch(()=>{})" exact: true>
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
