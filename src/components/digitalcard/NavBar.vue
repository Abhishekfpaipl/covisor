<template>
    <div class="position-fixed top-0 w-100 d-flex justify-content-between align-items-center border-bottom"
        :style="{ zIndex: 999, backgroundColor: brandColorOne }">
        <div class="w-100 p-2 ps-4">
            <div class="d-flex align-items-center gap-3">
                <router-link to="/" class="text-decoration-none d-flex align-items-center">
                    <img :src="brandLogo" alt="Brand Logo" style="height: 50px; object-fit: contain;">
                </router-link>
                <span v-if="brandName" class="text-capitalize fs-4" :style="{ color: brandTextColor }">{{ brandName
                    }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    props: {
        brandColorOne: {
            type: String,
            required: true
        },
        brandLogo: {
            type: String,
            required: true
        },
        brandName: {
            type: String,
            required: true
        },
        brandTextColor: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>
