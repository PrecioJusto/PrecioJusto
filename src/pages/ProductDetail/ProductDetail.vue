<template>
<div class="wrapper">
    <div class="product-info-wrapper q-mt-xl q-mb-sm">
        <div class="image-wrapper">
            <q-btn v-if="$q.platform.is.mobile" flat class="go-back-btn" round icon="las la-angle-left" @click="$router.go(-1)" />
            <img class="product-image" :src="productImg" :alt="product.name">
            <q-btn v-if="isFavourite" @click="favourite" class="favourite" push color="red" round icon="las la-heart" />
            <q-btn v-else @click="favourite" class="favourite" push color="red" round icon="lar la-heart" />
        </div>
        <div class="product-info">
            <div class="q-mb-md">
                <div class="product-name-wrapper">
                    <div class="product-name">{{ product.prodname }}</div>
                </div>
                <div v-if="product.brand " class="product-brand">{{ formatBrand(product.brand.branname) }}</div>
            </div>
            <div class="q-mt-md" v-if="product.container">{{ capitalize(product.container.conttype) }} de {{ product.container.contcapacity }}{{ product.container.contunit }}</div>
            <div class="q-my-md q-mr-md price-wrapper space-betweeen">
                <div class="price-wrapper"><div class="price customBold q-ml-sm">{{ formatPrice(productLowerPrice) }}</div></div>
                <div class="add-to-cart-wrapper q-ml-xl">
                    <q-btn outline  v-if="cartCounter < 1" disable unelevated color="primary" icon="las la-minus" class="add-product"/>
                    <q-btn outline  v-else @click="cartRemove" unelevated color="primary" icon="las la-minus" class="add-product"/>
                    <div class="counter">{{ cartCounter }}</div>
                    <q-btn outline @click="cartAdd" unelevated color="primary" icon="las la-plus" class="add-product"/>
                </div>
            </div>
        </div>
    </div>
    <div class="supermarkets-info-wrapper">
        <div class="q-pa-md">
            <q-table
                title="¿A cuánto sale en cada supermercado?"
                :data="tableData"
                :columns="tableColumns"
                row-key="name"
                :separator="separator"
                virtual-scroll
                :loading="tableLoading"
                :rows-per-page-options="[0]"
                :grid="$q.screen.xs"
                hide-bottom
            >
                <template v-slot:body-cell-supermarket="props">
                    <q-td class="middle" :props="props">
                        <img class="q-mr-md supermarket-img" :src="supermarketImages.find(s => s.name === props.row.supename).src">
                        {{capitalize(props.row.supename)}}
                    </q-td>
                </template>
            </q-table>
        </div>
    </div>
</div>
</template>

<script src='./ProductDetail.js'></script>
<style scoped lang="scss" src="./ProductDetail.scss"></style>
