<template>
    <div class="py-2 position-fixed top-0 w-100 d-flex justify-content-between align-items-center "
        style="background-color: var(--bg-primary); z-index: 999;">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/"
                class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="`${publicPath}${img}`" style="width: 60px;object-fit: contain;filter: invert(1)">
                <div class="d-flex flex-column">
                    <span class="ms-2 fw-bold fs-3 text-white text-uppercase">Sovisor</span>
                    <small class="ms-2 smaller text-center text-white text-capitalize"
                        style="margin-top: -4px;">Solutions for business</small>
                </div>
            </router-link>
        </div>
        <div class="d-none d-md-flex align-items-center gap-3">
            <router-link to="/contact-us" class="p-2 text-white text-decoration-none">
                <i class="bi bi-whatsapp fs-5"></i>
                <span class="ms-2 fw-bold">Contact Sales</span>
            </router-link>
        </div>
        <div class="d-flex d-md-none align-items-center gap-3">
            <router-link to="/contact-us" class="p-2 text-white">
                <i class="bi bi-whatsapp fs-5"></i>
            </router-link>
            <router-link to="/login-page" class="text-decoration-none text-white">
                <i class="bi bi-person fs-5 text-white"></i>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo.svg",
        };
    },
};
</script>
