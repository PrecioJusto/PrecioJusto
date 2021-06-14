<template>
 <q-input @keydown.enter.prevent="submit" dense rounded outlined v-model="value" label="¿Qué producto estás buscando?" class="q-ml-md">
    <template v-slot:append>
      <q-icon v-if="value === ''" name="search" />
      <q-icon v-else name="clear" class="cursor-pointer" @click="value = ''" />
    </template>
  </q-input>
</template>

<script src='./SearchBar.js'></script>
<style scoped lang="scss" src="./SearchBar.scss"></style>
