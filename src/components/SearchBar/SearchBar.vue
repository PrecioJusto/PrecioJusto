<template>
 <q-input rounded dense standout="bg-primary text-white searcher-input" v-model="searchText" label="¿Qué producto estás buscando?" class="q-ml-md">
    <template v-slot:append>
      <q-icon v-if="searchText === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="searchText = ''" />
    </template>
  </q-input>
</template>

<script src='./SearchBar.js'></script>
<style scoped lang="scss" src="./SearchBar.scss"></style>
