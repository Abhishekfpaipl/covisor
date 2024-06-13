<template>
    <div>
        <!-- <p>Services: {{ services }}</p>
        <p>Category: {{ category }}</p>
        <p>Place: {{ place }}</p> -->
        <FormBanner :service="services" :category="category" :place="place" v-observe />
        <LeadManagement v-observe />
        <Success v-observe />
        <Faq v-observe />
        <Service v-observe />
        <Counter :service="services" :category="category" :place="place" v-observe />
        <Trophy :service="services" :category="category" :place="place" v-observe />
        <div class="bg-light text-center py-3 d-flex align-items-center justify-content-center">
            <p class="text-dark mb-0"> Copyright © 2024 saleswik.com All rights reserved</p>
        </div>
    </div>
</template>

<script>
import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import LeadManagement from '@/components/LeadManagement.vue';
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue';
import Service from '@/components/salesfunnel/ServicesSection.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
import Trophy from '@/components/salesfunnel/TrophySection.vue';

export default {
    name: 'SalesFunnelPage',
    components: {
        FormBanner,
        LeadManagement,
        Success,
        Faq,
        Service,
        Counter,
        Trophy,
    },
    data() {
        return {
            services: '',
            category: '',
            place: ''
        };
    },
    created() {
        // Log the route params to debug
        console.log('Route params:', this.$route.params);

        // Extract the route parameter by the correct name
        const routeParam = this.$route.params.slug; // Use 'slug' if that is the parameter name

        // Check if routeParam is defined
        if (routeParam) {
            this.extractParams(routeParam);
        } else {
            console.error('Route parameter is undefined');
        }
    },
    methods: {
        extractParams(paramString) {
            // Split the string based on ' in ' keyword and then further parse it
            let parts = paramString.split('-in-');
            if (parts.length >= 2) {
                this.services = parts[0].replace(/-/g, ' ');
                this.category = parts[1].replace(/-/g, ' ');

                // Check if there is a third part for the place
                if (parts.length > 2) {
                    this.place = parts.slice(2).join(' ').replace(/-/g, ' ');
                }
            }
        }
    }
}
</script>
