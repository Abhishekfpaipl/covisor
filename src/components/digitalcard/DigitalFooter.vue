<template>
    <div>
        <div class="d-md-flex justify-content-evenly p-3 bg-light border-top px-5">

            <div class="mb-3">
                <router-link to="/">
                    <img :src="brandLogo" style="height: 100px; object-fit: contain;">
                </router-link>
                <p class="my-2 fw-bold">{{ brandName }}</p>
                <small class="">{{ tagLine }}</small>
            </div>

            <div class="mb-3 text-center text-md-start py-4 py-md-0">
                <p class="mb-2 fw-bold">Contact Us</p>
                <div class="">
                    <small class="fw-bold">Email.</small>
                    <p class="mb-0">{{ brandEmail }}</p>
                </div>
                <div class="">
                    <small class="fw-bold">Mob no.</small>
                    <p class="mb-0">{{ brandMobile }}</p>
                </div>
                <div class="">
                    <small class="fw-bold">Address.</small>
                    <p class="mb-0" v-html="brandAddress"></p>
                </div>
            </div>
            <div class="d-flex justify-content-between gap-5">
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Reach Us</p>
                    <router-link class="text-decoration-none d-flex flex-column text-dark my-1" :to="link.url"
                        v-for="(link, index) in socialLinks" :key="index">{{ link.name }}</router-link>
                </div>
                <div class="mb-3 text-start">
                    <p class="mb-2 fw-bold">Resources</p>
                    <router-link to="/legal-warning" class="text-dark" style="text-decoration: none;">
                        <p class="mb-2">Legal Warning</p>
                    </router-link>
                    <router-link to="/privacy-policy" class="text-dark" style="text-decoration: none;">
                        <p class="mb-2">Privacy Policy</p>
                    </router-link>
                    <router-link to="/term-of-use" class="text-dark" style="text-decoration: none;">
                        <p class="mb-2">Terms Of Use</p>
                    </router-link>
                    <router-link to="/career" class="text-dark" style="text-decoration: none;">
                        <p class="mb-2">Career</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="bg-dark text-center py-3 d-flex align-items-center justify-content-center">
            <p class="text-white mb-0"> Copyright © 2024 SOVISOR All rights reserved</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DigitalFooter',
    props: {
        // brandColorOne: {
        //     type: String,
        //     required: true
        // },
        brandName: {
            type: String,
            required: true,
        },
        tagLine: {
            type: String,
            required: true,
        },
        brandLogo: {
            type: String,
            required: true,
        },
        socialLinks: {
            type: Array,
            required: true,
        },
        brandAddress: {
            type: String,
            required: true,
        },
        brandEmail: {
            type: String,
            required: true,
        },
        brandMobile: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/wb.png",
        }
    }
}
</script>

<style scoped>
/* You can add scoped styles here */
</style>
