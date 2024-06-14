<template>
    <div>
        <!-- <p>Services: {{ services }}</p>
        <p>Category: {{ category }}</p>
        <p>Place: {{ place }}</p> -->
        <FormBanner :service="services" :category="category" :place="place" v-observe />
        <LeadManagement :values="leads" :title="'Industries we work for'" v-observe />
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
            place: '',
            leads: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Web applications",
                    description: "There are basic Internet presence websites which provide information about the company, its products and services offered. In a number of cases, this information does not change very frequently and hence we create, what we call, static / HTML presence websites.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "E commerce websites",
                    description: "We don't just develop your eCommerce store, We scale your Business profit through continuous improvements and reinforcements and market trends.E-Commerce has been the de facto standard for shopping online in this era of development and fast paced environment.",
                },
                {
                    id: 3,
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "mobile apps",
                    description: "Our mobile app development service extends to app popular platforms like Android and iOS, and app popular devices like Android Phones, iPhones, iPad and Tablet devices.It is a well-known fact that mobile phone will be a big enabler for business and most applications will be accessed using hand-held devices in future.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "seo",
                    description: "Once your website is up and running, you will want to make sure that Google ranks you highly, so that your customers or visitors can find you easily. This is the ultimate goal of every company operating online. We will work to maximize your website's online presence and reputation.",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "digital marketing",
                    description: "Digital marketing is a vital aspect of any business that operates online, providing valuable exposure. Creating a marketing campaign that is designed to keep viewers, visitors and subscribers engaged can have incredible effects on conversions, both immediately and further down the line.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    title: "maintanance",
                    description: "Once your website is up and running, you may want to keep it looking as fresh, modern and relevant and as secure as the day it went live. We offer maintenance services and provide vital updates to your website. we also provide free training so you can DIY your website maintenance.",
                },
            ],
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
