<template>
  <div>
    <q-page class="flex flex-center wrapper">
      <!-- MOBILE HEADER -->
      <q-header id="mainLayoutHeader" reveal v-if="$q.platform.is.mobile" class="bg-white text-secondary q-pa-sm">
        <q-toolbar class="q-toolbar">
          <q-toolbar-title class="q-toolbar-title">
            <q-avatar class="q-avatar q-mr-sm">
                <img class="category-img" src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
            </q-avatar>
          </q-toolbar-title>
        </q-toolbar>
        <SearchBar class="search-bar" />
      </q-header>
      <div class="content-wrapper">
        <div class="banner-wrapper">
          <div class="banner-header q-py-sm">
            <h4 class="q-my-none">Categorias</h4>
            <small class="cursor-pointer">Ver todas</small>
          </div>
          <q-carousel
            v-model="catSlider"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            arrows
            class="bg-none rounded-borders q-py-none q-my-md carousel-categories"
          >
            <q-carousel-slide v-for="(slide, idx) in categories" :key="slide.name" :name="idx" class="column no-wrap q-py-none carousel-slide">
              <div class="row fit justify-start q-gutter-xs q-col-gutter no-wrap offer-slider q-py-none">
                <CategoryCard v-for="cat in slide" :key="cat.name" :category="cat" :forHomePage="true" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="banner-wrapper">
          <div class="banner-header q-py-sm">
            <h4 class="q-my-none">Ofertas exclusivas</h4>
            <small class="cursor-pointer">Ver todas</small>
          </div>
          <q-carousel
            v-model="prodSlider"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            arrows
            class="bg-none rounded-borders q-py-none q-my-md carousel-products"
          >
            <q-carousel-slide v-for="(slide, idx) in offerProducts" :key="slide.name" :name="idx" class="column no-wrap q-py-none carousel-slide">
              <div class="row fit justify-start q-gutter-xs q-col-gutter no-wrap offer-slider q-py-none">
                <ProductCard v-for="prod in slide" :key="prod.name" :product="prod" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <div class="banner-wrapper">
          <div class="banner-header q-py-sm">
            <h4 class="q-my-none">Productos más destacados</h4>
            <small class="cursor-pointer">Ver todos</small>
          </div>
          <q-carousel
            v-model="featuredProds"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="primary"
            arrows
            class="bg-none rounded-borders q-py-none q-my-md carousel-products"
          >
            <q-carousel-slide v-for="(slide, idx) in offerProducts" :key="slide.name" :name="idx" class="column no-wrap q-py-none carousel-slide">
              <div class="row fit justify-start q-gutter-xs q-col-gutter no-wrap offer-slider q-py-none">
                <ProductCard v-for="prod in slide" :key="prod.name" :product="prod" />
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script src='./Home.js'></script>
<style scoped lang="scss" src="./Home.scss"></style>
