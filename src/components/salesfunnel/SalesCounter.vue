<template>
    <div>
        <div class="p-5 d-md-flex justify-content-between align-items-center"
            style="background-color: var(--bg-forth);">
            <div class="d-flex justify-content-center align-items-center">
                <img src="/img/smile.svg" style="width: 450px; max-width: 80%" alt=""> 
            </div>
            <div class="row mt-4">
                <div class="d-flex flex-column justify-content-center mb-4"> 
                    <h1 class=" text-center text-uppercase">our happy customers</h1>
                </div>
                <!-- <div class="col" v-for="counter in counters" :key="counter.id">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="counter.number"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{ counter.text }}</p>
                    </div>
                </div> -->
                <div class="col">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="5000"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{service}}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="1500"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{category}}</p>
                    </div>
                </div>
                <div class="col">
                    <div class="text-center">
                        <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center">
                            <AutoCounter :data="3000"> </AutoCounter>&nbsp;+
                        </p>
                        <p class="mt-0 text-capitalize">{{place}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'SalesCounter',
    props:['service', 'category', 'place'],
    components: {
        AutoCounter
    },
    data() {
        return {
            counters: [
                {
                    id: 1,
                    number: 5000,
                    text: 'services'
                },
                {
                    id: 2,
                    number: 1500,
                    text: 'categories'
                },
                {
                    id: 3,
                    number: 3000,
                    text: 'places'
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>