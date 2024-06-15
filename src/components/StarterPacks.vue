<template>
    <div class="container">
        <h1 class="fw-bold">Services</h1>
        <small>No extra or hidden charges, only pay what you see</small>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-lg-3">
            <div class="col card border-0 bg-none" v-for="(pack, index) in packs" :key="index">
                <div class="card-body bg-white p-0 pb-4 shadow mx-2">
                    <div class="brand-primary bg-light rounded">
                        <p class="border-bottom fs-4 fw-bold p-2 mb-0 text-capitalize">
                            {{ pack.title }}
                        </p>
                        <p class="mb-0 py-2 align-middle bg-light text-dark">
                            <span class="fw-light ls-1">starting from </span>
                            <span class="fs-2 fw-bolder">₹ {{ pack.price }}</span>
                            <span class="fw-light">/year</span>
                        </p>
                    </div>
                    <p class="fw-light bg-dark brand-secondary d-inline-block px-4 rounded-3">
                        <span class="text-decoration-line-through text-white">{{ pack.mrp }}</span>
                        <span class="text-white"> ({{ getDiscount(pack) }}% discount)</span>
                    </p>

                    <div class="d-flex justify-content-center">
                        <ul class="list-unstyled text-start">
                            <li class="fw-light" v-for="(feature, featureIndex) in pack.features" :key="featureIndex">
                                <i class="bi bi-check2 pe-2"></i>
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <div class="btn-group">
                        <router-link :to="pack.link" class="btn border btn-light text-capitalize px-4">
                            Know More
                        </router-link>
                        <router-link :to="pack.link" class="btn text-capitalize px-4 text-white"
                            style="background-color: var(--bg-primary);">
                            {{ pack.buttonText }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "StarterPacks",
    data() {
        return {
            packs: [
                {
                    slug: "website-development",
                    title: "Website development",
                    link: "/website-development",
                    price: "999",
                    mrp: "₹ 5,000",
                    features: [
                        "One Page Website",
                        "Single Email Account",
                        "Shared Domain",
                        "Shared Storage",
                    ],
                    buttonText: "Get Online"
                },
                {
                    slug: "ecommerce-development",
                    title: "Ecommerce B2B Wholesale",
                    link: "/b2b-ecommerce-development",
                    price: "14,999",
                    mrp: "₹ 25,000",
                    features: [
                        "Ecommerce Website",
                        "Advance Admin Panel",
                        "Unlimited Page Website",
                        "Google Analytics",
                        "Domain & Hosting"
                    ],
                    buttonText: "Let's Scale"
                },
                {
                    slug: "ecommerce-development",
                    title: "Ecommerce B2C Retail",
                    link: "/b2c-ecommerce-development",
                    price: "14,999",
                    mrp: "₹ 25,000",
                    features: [
                        "Ecommerce Website",
                        "Advance Admin Panel",
                        "Unlimited Page Website",
                        "Google Analytics",
                        "Domain & Hosting"
                    ],
                    buttonText: "Let's Scale"
                },
                {
                    slug: "ecommerce-development",
                    title: "Software development",
                    link: "/software-development",
                    price: "14,999",
                    mrp: "₹ 25,000",
                    features: [
                        "Ecommerce Website",
                        "Advance Admin Panel",
                        "Unlimited Page Website",
                        "Google Analytics",
                        "Domain & Hosting"
                    ],
                    buttonText: "Let's Scale"
                },
                {
                    slug: "ecommerce-development",
                    title: "Graphic Designing",
                    link: "/graphic-designing",
                    price: "14,999",
                    mrp: "₹ 25,000",
                    features: [
                        "Ecommerce Website",
                        "Advance Admin Panel",
                        "Unlimited Page Website",
                        "Google Analytics",
                        "Domain & Hosting"
                    ],
                    buttonText: "Let's Scale"
                },
                {
                    slug: "digital-marketing",
                    title: "Digital marketing",
                    link: "/digital-marketing",
                    price: "24,999",
                    mrp: "₹ 10,000",
                    features: [
                        "Business Catalog",
                        "Basic Admin Panel",
                        "Multi Page Website",
                        "Multiple Email Account",
                        "Domain & Hosting",
                    ],
                    buttonText: "Give Boost"
                },
            ]
        }
    },
    methods: {
        getDiscount(pack) {
            const mrp = parseFloat(pack.mrp.replace(/[^\d.-]/g, ''));
            const price = parseFloat(pack.price.replace(/[^\d.-]/g, ''));
            return ((mrp - price) / mrp * 100).toFixed(0);
        }
    }
}
</script>

<style scoped>
/* Add your styles here */
</style>
