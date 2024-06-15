<template>
    <div>
        <FormBanner :service="'Digital Marketing'" :category="category" :place="place" v-observe />

        <LeadManagement :values="features" :title="'Factors, you will love'" v-observe />
        <div class="container">
            <h1 class="text-center py-4">Digital Marketing Pricing</h1>
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
        <Counter :service="'Digital Marketing'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <Trophy :service="'Digital Marketing'" :category="''" :place="''" v-observe />

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
    name: "DigitalMarketingPage",
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
                    price: '4,999',
                    mrp: '10,000',
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
                    price: '14,999',
                    mrp: '30,000',
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
                    price: '29,999',
                    mrp: '60,000',
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
                    mrp: '90,000',
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
                    icon: 'bi-search fs-4',
                    title: "Search Engine Optimization (SEO)",
                    description: "Improve rankings with on-page and off-page SEO techniques.",
                },
                {
                    id: 2,
                    icon: 'bi-cash-stack fs-4',
                    title: "Pay-Per-Click Advertising (PPC)",
                    description: "Manage paid ads on search engines and social media for targeted visibility.",
                },
                {
                    id: 3,
                    icon: 'bi-file-earmark-text fs-4',
                    title: "Content Marketing",
                    description: "Create and distribute engaging content to attract and retain audiences.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Social Media Marketing (SMM)",
                    description: "Manage social media content and run targeted ad campaigns.",
                },
                {
                    id: 5,
                    icon: 'bi-envelope fs-4',
                    title: "Email Marketing",
                    description: "Design and execute personalized email campaigns for better engagement.",
                },
                {
                    id: 65,
                    icon: 'bi-person-circle fs-4',
                    title: "Influencer Marketing",
                    description: "Partner with influencers to endorse products and reach new audiences.",
                },
                {
                    id: 63,
                    icon: 'bi-graph-up fs-4',
                    title: "Conversion Rate Optimization (CRO)",
                    description: "Optimize websites to increase conversion rates through data analysis.",
                },
                {
                    id: 54,
                    icon: 'bi-bar-chart fs-4',
                    title: "Analytics and Reporting",
                    description: "Monitor and analyze marketing metrics to inform strategic decisions.",
                },
                {
                    id: 125,
                    icon: 'bi-star fs-4',
                    title: "Online Reputation Management (ORM)",
                    description: "Manage online reviews and feedback to maintain a positive brand image.",
                },
                {
                    id: 68,
                    icon: 'bi-phone fs-4',
                    title: "Mobile Marketing",
                    description: "Optimize marketing strategies for mobile users and mobile-specific behaviors.",
                },
                {
                    id: 30,
                    icon: 'bi-people fs-4',
                    title: "Customer Relationship Management (CRM)",
                    description: "Use CRM systems to manage leads and personalize marketing efforts.",
                },
                {
                    id: 31,
                    icon: 'bi-gear fs-4',
                    title: "Marketing Automation",
                    description: "Automate marketing tasks with tools like HubSpot, Marketo, or Mailchimp.",
                },
            ],
            questions: [
                {
                    id: 1,
                    question: "Why is digital marketing important for my business?",
                    answer: " Exploring the benefits of digital marketing in terms of reaching a larger audience, increasing brand visibility, and driving sales or leads."
                },
                {
                    id: 2,
                    question: "How do I determine which digital marketing strategies are best for my business?",
                    answer: "Assessing which channels and tactics align with business goals, target audience, budget, and industry."
                },
                {
                    id: 3,
                    question: "How much should I budget for digital marketing?",
                    answer: "Understanding typical costs associated with different digital marketing strategies and determining a budget that fits the business's resources and goals."
                },
                {
                    id: 4,
                    question: "How long does it take to see results from digital marketing efforts?",
                    answer: "Managing expectations regarding the timeline for seeing measurable outcomes such as increased website traffic, leads, or conversions."
                },
                {
                    id: 5,
                    question: "What metrics should I track to measure the success of my digital marketing campaigns?",
                    answer: "Identifying key performance indicators (KPIs) such as website traffic, conversion rates, ROI, cost per acquisition (CPA), and engagement metrics."
                },
                {
                    id: 6,
                    question: "How do I build an online presence and brand identity through digital marketing?",
                    answer: "Strategies for creating consistent branding across digital channels, building relationships with customers, and maintaining a positive online reputation."
                },
                {
                    id: 7,
                    question: "How can digital marketing help with customer retention and loyalty?",
                    answer: "Exploring tactics such as personalized email campaigns, social media engagement, loyalty programs, and customer feedback strategies."
                },
                {
                    id: 8,
                    question: "What are the ethical considerations in digital marketing, and how can I ensure compliance?",
                    answer: "Understanding privacy regulations (like GDPR or CCPA), ethical practices in data collection and usage, and maintaining transparency with customers."
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
