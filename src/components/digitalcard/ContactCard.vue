<template>
    <div class="">
        <div class="container  py-3">
            <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Contacts ~</span></p>
            <div class="row row-cols-1 row-cols-md-4">
                <div v-for="(icon, index) in contact" :key="index" class="col mb-3 d-flex flex-column justify-content-center align-items-center"
                    @click="handleIconClick(icon.action)">
                    <div class="d-md-flex justify-content-center align-items-center">
                        <div class="d-flex justify-content-center align-items-center rounded-circle"
                            style="width: 60px; height: 60px;"
                            :style="{ color: brandTextColor, backgroundColor: brandColorOne }">
                            <i class="fs-5 bi " :class="icon.icon"></i>
                        </div>
                    </div>
                    <!-- <p class="text-center fw-bold mt-2 d-md-block mb-0">{{ icon.name }}</p> -->
                    <p class="text-center fw-bold mt-2 d-md-block mb-0">{{ getSubtext(icon.icon) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactCard',
    props: ['brandColorOne', 'brandTextColor','brandMobile', 'brandEmail', 'brandWhatsapp', 'brandAddress'],
    data() {
        return {
            contact: [
                { name: 'Email', icon: 'bi-envelope', action: 'openEmail' },
                { name: 'Call', icon: 'bi-telephone', action: 'openDialer' },
                { name: 'Whatsapp', icon: 'bi-whatsapp', action: 'openWhatsapp' },
                { name: 'Map', icon: 'bi-geo', action: 'openMaps' },
            ],
        }
    },
    methods: {
        handleIconClick(action) {
            const phoneNumber = this.brandMobile;
            const emailAddress = 'abhisheknegi042@gmail.com';
            const location = '2nd Floor, Block B1/632, Janakpuri, Delhi, 110058';

            switch (action) {
                case 'openEmail':
                    window.location.href = `mailto:${emailAddress}`;
                    break;
                case 'openDialer':
                    window.location.href = `tel:${phoneNumber}`;
                    break;
                case 'openWhatsapp':
                    window.open(`https://wa.me/${phoneNumber}?text=Hello...`, '_blank');
                    break;
                case 'openMaps':
                    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`, '_blank');
                    break;
                default:
                    break;
            }
        },
        getSubtext(icon) {
            switch (icon) {
                case 'bi-envelope': return this.brandEmail;
                case 'bi-telephone': return this.brandMobile;
                case 'bi-whatsapp': return this.brandWhatsapp;
                case 'bi-geo': return this.brandAddress;
                default: return '';
            }
        },
    }
}
</script>

<!-- <style scoped>
@media (max-width: 767.98px) {

    /* Adjust styles for small screens */
    .row-cols-md-4>.col {
        flex: 0 0 50%;
        max-width: 50%;
    }
}

@media (min-width: 768px) {

    /* Adjust styles for medium and larger screens */
    .row-cols-md-4>.col {
        flex: 0 0 25%;
        max-width: 25%;
    }
}
</style> -->
