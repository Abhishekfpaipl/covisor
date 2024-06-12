<template>
    <div class="containerr d-flex justify-content-between align-items-center " ref="topnav"
        :style="`background:rgb(255,0,0, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-3">
            <router-link to="/" :class="{ 'hide-on-scroll': hideOnScroll }"
                class="text-decoration-none text-dark d-flex align-items-center">
                <img :src="`${publicPath}${img}`" style="width: 60px;object-fit: contain;filter: invert(1)">
                <div class="d-flex flex-column">
                    <span class="ms-2 fw-bold fs-4 text-white">Covisor </span>
                    <small class="smaller text-end text-white" style="margin-top: -4px;">Let's Get Wicked</small>
                </div>
            </router-link>
        </div>
        <div class="d-none d-md-flex align-items-center gap-3" :class="{ 'hide-on-scroll': hideOnScroll }">
            <router-link to="/contact-us" class="p-2 text-white text-decoration-none">
                <i class="bi bi-whatsapp fs-5"></i>
                <span class="ms-2 fw-bold">Contact Sales</span>
            </router-link>
            <router-link to="/login-page" class="btn btn-danger rounded-pill">
                <i class="bi bi-person fs-5"></i>
                <span class="ms-2">Login / Register</span>
            </router-link>
        </div>
        <div class="d-flex d-md-none align-items-center gap-3" :class="{ 'hide-on-scroll': hideOnScroll }">
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
            img: "img/logo.png",
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            // console.log(scrollTop)
            // console.log(scrollPercentage)
            if (scrollPercentage >= 5 && scrollPercentage <= 6) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    }
};
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>