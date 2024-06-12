<template>
    <div>
        <div class="p-5" style="background-color: var(--bg-forth);">
            <div class="d-flex flex-column justify-content-center">
                <h1 class=" text-center text-uppercase">why us</h1>
                <small class="text-uppercase">Committed to help clients maximize their growth and profitability through their online
                    presence.</small>
            </div>
            <div class="d-md-flex justify-content-between mt-4 ">
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="10"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="fs-5 mt-0 text-capitalize">Years in industry</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="1000"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="fs-5 mt-0 text-capitalize">complete projects</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="900"> </AutoCounter>&nbsp;+
                    </p>
                    <p class="fs-5 mt-0 text-capitalize">happy clients</p>
                </div>
                <div class="text-center fw-bold">
                    <p class="m-0 d-flex justify-content-center align-items-center" style="font-size: 50px;">
                        <AutoCounter :data="10"> </AutoCounter>&nbsp;
                    </p>
                    <p class="fs-5 mt-0 text-capitalize">unhappy clients.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'CounterSection',
    components: {
        AutoCounter
    }
}
</script>
<style lang="">

</style>