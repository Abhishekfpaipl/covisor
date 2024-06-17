<template>
    <div class="container py-3">
        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Collections ~</span></p>
        <div class="row row-cols-3 row-cols-md-6 g-1">
            <div class="col" v-for="(collection, key) in collections" :key="key">
                <div class="position-relative">
                    <img :src="collection.img" alt="" data-bs-toggle="offcanvas" data-bs-target="#collectionModal"
                        :data-bs-collectionId="collection.id" aria-controls="collectionModal"
                        style="object-position: top; object-fit: cover; width: 100%; height: 150px;">
                    <div class="position-absolute top-0 start-0 m-2 ms-0" style="font-size: 12px;">
                        <span class='text-white bg-danger px-1 rounded-end-3'>₹{{ collection.price }}</span>
                    </div>
                </div>
            </div>
            <CollectionOffcanvas :collection="collections" />
        </div>
    </div>
</template>
<script>
import CollectionOffcanvas from '@/components/CollectionOffcanvas.vue'
export default {
    name: 'CollectionSection',
    components: {
        CollectionOffcanvas
    },
    data() {
        return {
            isOffCanvasOpen: false,
            selectedItem: {},
            collections: [
                {
                    id: 1,
                    name: 'Collection One',
                    img: 'https://img101.urbanic.com/v1/goods-pic/27e6d1538adc45cfaac2f7f79997dd65UR_w540_h720_q85.webp',
                    price: '1200',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                    dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, deleniti!'
                },
                {
                    id: 2,
                    img: 'https://img101.urbanic.com/v1/goods-pic/69e05a4dfe784169afd0179b6172d47cUR_w540_h720_q85.webp',
                    price: '990',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 3,
                    img: 'https://img101.urbanic.com/v1/goods-pic/f5a8f7e7cfcc42238f8c4619e829c7a9UR_w540_h720_q85.webp',
                    price: '1890',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 4,
                    img: 'https://img101.urbanic.com/v1/goods-pic/bfd49b51ec644c28bc316949e650f8d0UR_w540_h720_q85.webp',
                    price: '1790',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 5,
                    img: 'https://img101.urbanic.com/v1/goods-pic/63f5574a5b5f440fb29f4b441141c113UR_w540_h720_q85.webp',
                    price: '3490',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                },
                {
                    id: 6,
                    img: 'https://img101.urbanic.com/v1/goods-pic/a9d445352ac84bef80e6d957684e9802UR_w540_h720_q85.webp',
                    price: '1590',
                    moq: '12',
                    colors: ['red', 'blue', 'green'],
                    sizes: ['small', 'medium', 'large'],
                }
            ],
        }
    },
    computed: {
        // collections() {
        //     return this.$store.getters.getCollection
        // }
    },
    methods: {
        openOffCanvas(collection) {
            this.selectedItem = collection;
            this.isOffCanvasOpen = true;
            // this.disableBodyScroll();
        },
        closeOffCanvas() {
            this.isOffCanvasOpen = false;
        },
    }
}
</script>