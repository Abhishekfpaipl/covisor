<template>
    <div class="container py-2">
        <div class="row align-items-center">
            <div v-if="imagePosition === 'left'" class="col-md-6">
                <img :src="imageSrc" class="img-fluid" style="height: 250px;" alt="Image">
            </div>
            <div class="col-md-6 mt-5 ">
                <h3 class="text-capitalize text-start ps-5 mb-4">{{ title }}</h3>
                <div v-for="(link, index) in description" :key="index" class="text-start my-2 ps-5">
                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                    <span class="mb-0">{{ link.title }}</span>
                </div>
                <!-- <p>{{ description }}</p> -->
            </div>
            <div v-if="imagePosition === 'right'" class="col-md-6">
                <img :src="imageSrc" class="img-fluid " style="height: 250px;" alt="Image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: Array,
            required: true
        },
        imagePosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                return ['left', 'right'].includes(value.toLowerCase());
            }
        }
    }
};
</script>

<style>
/* Add Bootstrap styles here if needed */
</style>