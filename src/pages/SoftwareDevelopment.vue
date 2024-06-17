<template>
    <div>
        <FormBanner :service="'Software Development'" :category="category" :place="place" v-observe />

        <LeadManagement :values="features" :title="'Factors, you will love'" v-observe /> 

        <AutoScrolling v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'Software Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <FameFoot :service="'Software Development'" :category="''" :place="''" v-observe />

    </div>
    <FooterBar />
</template>

<script>
import LeadManagement from '@/components/LeadManagement.vue'
import FooterBar from '@/components/FooterBar.vue'
import OurService from '@/components/OurService.vue'
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue';
 import FameFoot from '@/components/salesfunnel/FameFoot.vue'; 
import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
import AutoScrolling from '@/components/AutoScrolling.vue';
export default {
    name: "SoftwareDevelopment",
    components: {
        LeadManagement,
        FooterBar,
        OurService,
        FormBanner,
        Success,
        Faq,
         Counter,
        FameFoot,
        AutoScrolling,
    },
    data() {
        return {
            services: '',
            category: '',
            place: '', 
            features: [
                {
                    id: 1,
                    icon: 'bi-boxes fs-4',
                    title: "Stock Management System",
                    description: "Track inventory levels and manage stock efficiently.",
                },
                {
                    id: 2,
                    icon: 'bi-currency-dollar fs-4',
                    title: "Financial Management System",
                    description: "Handle financial transactions and budgeting seamlessly.",
                },
                {
                    id: 3,
                    icon: 'bi-credit-card fs-4',
                    title: "Payment Management System",
                    description: "Streamline payment processing and transactions.",
                },
                {
                    id: 4,
                    icon: 'bi-briefcase fs-4',
                    title: "Asset Management System",
                    description: "Manage and track company assets effectively.",
                },
                {
                    id: 5,
                    icon: 'bi-people fs-4',
                    title: "Human Resources Management System",
                    description: "Automate HR processes and manage employee data.",
                },
                {
                    id: 65,
                    icon: 'bi-file-earmark-text fs-4',
                    title: "Document Management System",
                    description: "Organize and store documents securely.",
                },
                {
                    id: 63,
                    icon: 'bi-kanban fs-4',
                    title: "Project Management System",
                    description: "Plan, track, and manage projects efficiently.",
                },
                {
                    id: 54,
                    icon: 'bi-graph-up-arrow fs-4',
                    title: "Lead Management System",
                    description: "Track and manage leads through the sales process.",
                },
            ],
            questions: [
                {
                    id: 1,
                    question: "Why do I need custom software?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!."
                },
                {
                    id: 2,
                    question: "How long will it take to develop the software?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 3,
                    question: "How much will it cost?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 4,
                    question: "Will the software be easy to use?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 5,
                    question: "What are the steps involved in software development?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 6,
                    question: "How will you handle my data and ensure privacy?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                }, 
            ]
        }
    },
    created() {
        // Log the route params to debug
        console.log('Route params:', this.$route.params);

        // Extract the route parameter by the correct name
        const routeParam = this.$route.params.title; // Use 'slug' if that is the parameter name

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
<style lang="">

</style>
