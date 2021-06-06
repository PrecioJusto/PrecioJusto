<template>
 <q-input dense rounded outlined v-model="searchText" label="¿Qué producto estás buscando?" class="q-ml-md">
    <template v-slot:append>
      <q-icon v-if="searchText === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
    </template>
  </q-input>
</template>

<script src='./SearchBar.js'></script>
<style scoped lang="scss" src="./SearchBar.scss"></style>
