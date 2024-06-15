<template>
    <div>
        <FormBanner :service="'B2C Ecommerce Development'" :category="category" :place="place" v-observe />

        <LeadManagement :values="features" :title="'Factors, you will love'" v-observe />
        <div class="container">
            <h1 class="text-center py-4">B2C Ecommerce Development Pricing</h1>
            <div class="table-responsive pb-4">
                <table class="table table-bordered table-light table-striped" style="width: 100%;">
                    <thead class="border-bottom">
                        <tr>
                            <th class="text-start">Features <p class="mb-0 small">List</p>
                            </th>
                            <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                <p class="mb-0">{{ plan.title }}</p>
                                <p class="mb-0 ">
                                    <small class="smaller ">₹</small>
                                    <small class="smaller">{{ plan.price }}</small>
                                    <small class="smaller fw-normal">/-</small>
                                </p>
                                <p class="mb-0">
                                    <small class="fw-light text-decoration-line-through text-dark smaller">{{ plan.mrp
                                        }}</small>
                                </p>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="border-start border-end">
                        <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                            <th class="pb-1 text-start">
                                <span class="fw-normal smaller">{{ feature.name }}</span>
                            </th>
                            <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                <i v-if="plan.features[index].included"
                                    class="bi bi-check2 fs-5 text-success smaller"></i>
                                <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                    class="fw-normal">Basic</i>
                                <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <Service v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'B2C Ecommerce Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <Trophy :service="'B2C Ecommerce Development'" :category="''" :place="''" v-observe />

    </div>
    <FooterBar />
</template>

<script>
import LeadManagement from '@/components/LeadManagement.vue'
import FooterBar from '@/components/FooterBar.vue'
import OurService from '@/components/OurService.vue'
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue';
import Service from '@/components/salesfunnel/ServicesSection.vue';
import Trophy from '@/components/salesfunnel/TrophySection.vue';
import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
export default {
    name: "B2CEcommerceDevelopment",
    components: {
        LeadManagement,
        FooterBar,
        OurService,
        FormBanner,
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
            plans: [
                {
                    id: 1,
                    title: "Lite",
                    description: "Info Website",
                    price: '19,999',
                    mrp: '29,999',
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: false },
                        { id: 8, name: "Direct Calling", included: false },
                        { id: 9, name: "Social Links", included: false },
                        { id: 10, name: "WhatsApp Connect", included: false },
                        { id: 11, name: "Payment Detail", included: false },
                        { id: 12, name: "Business Catalog", included: false },
                        { id: 13, name: "Content Writing", included: false },
                        { id: 14, name: "Free Update", included: false },
                        { id: 15, name: "Brand Logo", included: false },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
                {
                    id: 2,
                    title: "Plus",
                    description: "Business Website",
                    price: '29,999',
                    mrp: '39,999',
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: true },
                        { id: 8, name: "Direct Calling", included: true },
                        { id: 9, name: "Social Links", included: false },
                        { id: 10, name: "WhatsApp Connect", included: false },
                        { id: 11, name: "Payment Detail", included: false },
                        { id: 12, name: "Business Catalog", included: false },
                        { id: 13, name: "Content Writing", included: false },
                        { id: 14, name: "Free Update", included: false },
                        { id: 15, name: "Brand Logo", included: false },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
                {
                    id: 3,
                    title: "Elite",
                    description: "Catalog Website",
                    price: '39,999',
                    mrp: '49,999',
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: true },
                        { id: 8, name: "Direct Calling", included: true },
                        { id: 9, name: "Social Links", included: true },
                        { id: 10, name: "WhatsApp Connect", included: true },
                        { id: 11, name: "Payment Detail", included: true },
                        { id: 12, name: "Business Catalog", included: true },
                        { id: 13, name: "Content Writing", included: true },
                        { id: 14, name: "Free Update", included: true },
                        { id: 15, name: "Brand Logo", included: false },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
                {
                    id: 4,
                    title: "Pro",
                    description: "Designer Website",
                    price: '49,999',
                    mrp: '59,999',
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: true },
                        { id: 8, name: "Direct Calling", included: true },
                        { id: 9, name: "Social Links", included: true },
                        { id: 10, name: "WhatsApp Connect", included: true },
                        { id: 11, name: "Payment Detail", included: true },
                        { id: 12, name: "Business Catalog", included: true },
                        { id: 13, name: "Content Writing", included: true },
                        { id: 14, name: "Free Update", included: true },
                        { id: 15, name: "Brand Logo", included: true },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
            ],
            features: [
                {
                    id: 1,
                    icon: 'bi-ui-checks fs-4',
                    title: "User-friendly Interface and Design",
                    description: "Intuitive, responsive interface for seamless shopping on any device.",
                },
                {
                    id: 2,
                    icon: 'bi-collection fs-4',
                    title: "Product Catalog Management",
                    description: "Manage listings, categories, and product variants easily.",
                },
                {
                    id: 3,
                    icon: 'bi-cart-check fs-4',
                    title: "Shopping Cart and Checkout Process",
                    description: "Secure cart and streamlined checkout with multiple payment options.",
                },
                {
                    id: 4,
                    icon: 'bi-credit-card fs-4',
                    title: "Payment Gateway Integration",
                    description: "Integrate with popular gateways for secure transactions.",
                },
                {
                    id: 5,
                    icon: 'bi-box-seam fs-4',
                    title: "Order Management and Fulfillment",
                    description: "Manage orders with status updates and shipment tracking.",
                },
                {
                    id: 65,
                    icon: 'bi-search fs-4',
                    title: "Search and Navigation",
                    description: "Advanced search with filters and predictive suggestions.",
                },
                {
                    id: 63,
                    icon: 'bi-person-badge fs-4',
                    title: "Customer Accounts and Profiles",
                    description: "Manage accounts, order history, and personalized recommendations.",
                },
                {
                    id: 54,
                    icon: 'bi-tag fs-4',
                    title: "Promotions and Discounts",
                    description: "Run sales, discounts, and loyalty programs easily.",
                },
                {
                    id: 125,
                    icon: 'bi-star fs-4',
                    title: "Customer Reviews and Ratings",
                    description: "Enable customer reviews with moderation tools.",
                },
                {
                    id: 68,
                    icon: 'bi-share fs-4',
                    title: "Social Media Integration",
                    description: "Share products and reviews, enable social logins.",
                },
                {
                    id: 30,
                    icon: 'bi-graph-up fs-4',
                    title: "Analytics and Reporting",
                    description: "Track KPIs and gain insights with comprehensive reports.",
                },
                {
                    id: 31,
                    icon: 'bi-shield-lock fs-4',
                    title: "Security and Compliance",
                    description: "Ensure data protection and payment security compliance.",
                },
            ],
            questions: [
                {
                    id: 1,
                    question: "What exactly is B2C ecommerce?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!."
                },
                {
                    id: 2,
                    question: "Do I need technical knowledge to start a B2C ecommerce website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 3,
                    question: "What steps do I need to take to start selling products online?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 4,
                    question: "How can I attract customers to my B2C ecommerce website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 5,
                    question: "Do I need to handle shipping and logistics myself?",
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
