<template>
    <div>
        <FormBanner :service="'B2B Ecommerce Development'" :category="category" :place="place" v-observe />

        <LeadManagement :values="features" :title="'Factors, you will love'" v-observe /> 
        <AutoScrolling v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'B2B Ecommerce Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />

        <OurService v-observe />
        <FameFoot :service="'B2B Ecommerce Development'" :category="''" :place="''" v-observe />

    </div>
    <FooterBar />
</template>

<script>
import LeadManagement from '@/components/LeadManagement.vue'
import FooterBar from '@/components/FooterBar.vue'
import OurService from '@/components/OurService.vue'
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue'; 
import FameFoot from '@/components/salesfunnel/FameFoot.vue'
import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
import AutoScrolling from '@/components/AutoScrolling.vue';
export default {
    name: "B2BEcommerceDevelopment",
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
                    icon: 'bi-tags fs-4',
                    title: "Customizable Catalogs and Pricing",
                    description: "Set unique prices and catalogs for different customers.",
                },
                {
                    id: 2,
                    icon: 'bi-people fs-4',
                    title: "Account Management and Roles",
                    description: "Manage user roles and account hierarchies efficiently.",
                },
                {
                    id: 3,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Integration with ERP and CRM Systems",
                    description: "Sync inventory, customer data, and orders seamlessly.",
                },
                {
                    id: 4,
                    icon: 'bi-filter fs-4',
                    title: "Advanced Product Search and Filtering",
                    description: "Filter products by attributes with faceted search.",
                },
                {
                    id: 5,
                    icon: 'bi-box-seam fs-4',
                    title: "Bulk Ordering and Quick Reorder",
                    description: "Easily reorder and manage bulk purchases.",
                },
                {
                    id: 65,
                    icon: 'bi-currency-exchange fs-4',
                    title: "Quoting and Negotiation Tools",
                    description: "RFQ functionality to negotiate prices and terms.",
                },
                {
                    id: 63,
                    icon: 'bi-credit-card fs-4',
                    title: "Payment and Credit Options",
                    description: "Flexible payment methods and credit management.",
                },
                {
                    id: 54,
                    icon: 'bi-box-arrow-in-down fs-4',
                    title: "Order Management and Fulfillment",
                    description: "Manage orders from creation to shipment tracking.",
                },
                {
                    id: 125,
                    icon: 'bi-person-circle fs-4',
                    title: "Customer Self-Service Tools",
                    description: "Dashboards for orders, returns, and account settings.",
                },
                {
                    id: 68,
                    icon: 'bi-graph-up fs-4',
                    title: "Analytics and Reporting",
                    description: "Get insights with customizable analytics and reports.",
                },
                {
                    id: 30,
                    icon: 'bi-shield-lock fs-4',
                    title: "Security and Compliance",
                    description: "Ensure data security and compliance with industry standards.",
                },
                {
                    id: 31,
                    icon: 'bi-phone fs-4',
                    title: "Responsive Design and Mobile Compatibility",
                    description: "Mobile-friendly design for seamless user experience.",
                },
            ],
            questions: [
                {
                    id: 1,
                    question: "What is B2B ecommerce?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!."
                },
                {
                    id: 2,
                    question: "How will a B2B ecommerce website benefit my business?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 3,
                    question: "How much does it cost to develop a B2B ecommerce website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 4,
                    question: "Do I need special technical knowledge to manage a B2B ecommerce website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 5,
                    question: "How do I ensure security for transactions on a B2B ecommerce website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 6,
                    question: "Can a B2B ecommerce website integrate with our existing business systems?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 7,
                    question: "How long does it take to launch a B2B ecommerce website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 8,
                    question: "What ongoing maintenance does a B2B ecommerce website require?",
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
