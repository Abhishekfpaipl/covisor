<template>
    <div>
        <div class="text-white py-5" style="background-color: var(--bg-primary); padding-bottom: 6rem !important;">
            <h1 class="text-center mb-0 fw-bold">B2B Ecommerce Development</h1>
            <small class="text-capitalize">The secret of getting ahead, is getting started</small>
        </div>
        <div class="">
            <LeadManagement :values="features" :title="'test'" v-observe />
        </div>
        <div class="">
            <h1 class="text-center">Pricing</h1>
            <div class="table-responsive">
                <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                    <thead class="border-bottom">
                        <tr>
                            <th></th>
                            <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                <p class="mb-0">{{ plan.title }} <sup>{{ plan.sup }}</sup></p>
                                <p class="mb-0 ">
                                    <small class="smaller ">₹</small>
                                    <small class="smaller">{{ plan.price }}</small>
                                    <small class="smaller fw-normal">/-</small>
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
    </div>
</template>

<script>
import LeadManagement from '@/components/LeadManagement.vue'
export default {
    name: "B2BEcommerceDevelopment",
    components: {
        LeadManagement,
    },
    data() {
        return {
            plans: [
                {
                    id: 1,
                    title: "1",
                    sup: "st",
                    description: "Info Website",
                    price: 999,
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
                    title: "2",
                    sup: "nd",
                    description: "Business Website",
                    price: 1499,
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
                    title: "3",
                    sup: "rd",
                    description: "Catalog Website",
                    price: 2499,
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
                    title: "4",
                    sup: "th",
                    description: "Designer Website",
                    price: 3499,
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
                    icon: 'bi-funnel fs-4',
                    title: "Search Engine Optimization(SEO)",
                    description: "On-Page SEO: Optimizing website content, meta tags, and structure to improve search engine rankings. Off- Page SEO: Building quality backlinks, managing local listings, and enhancing domain authority.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Pay-Per-Click Advertising (PPC)",
                    description: "Creation and management of paid advertising campaigns on search engines (like Google Ads) and social media platforms (like Facebook Ads).Strategic bidding, keyword research, ad creation, and performance tracking.",
                },
                {
                    id: 3,
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "Content Marketing",
                    description: "Development of high-quality, relevant content (articles, blogs, videos, infographics) to attract and engage target audiences. Content distribution through various channels to maximize reach and impact.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Social Media Marketing (SMM)",
                    description: "Social Media Management: Creating and curating content for social media platforms (Facebook, Instagram, Twitter, LinkedIn, etc.). Paid Social Advertising: Running targeted ad campaigns to increase brand awareness, generate leads, and drive conversions.",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "Email Marketing",
                    description: "Designing and executing email campaigns to nurture leads, promote products/services, and build customer relationships. Segmentation, personalization, and automation of email sequences for optimal engagement.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    title: "Influencer Marketing",
                    description: "Collaborating with influencers and industry experts to endorse products/services and reach their dedicated audience. Identifying and partnering with influencers whose audience aligns with your target market.",
                },
                {
                    id: 63,
                    icon: 'bi-whatsapp fs-4',
                    title: "Conversion Rate Optimization (CRO)",
                    description: "Analyzing user behavior on websites and landing pages to identify barriers and optimize for higher conversion rates. A/B testing, usability testing, and implementing data-driven improvements.",
                },
                {
                    id: 54,
                    icon: 'bi-whatsapp fs-4',
                    title: "Analytics and Reporting",
                    description: "Monitoring and analyzing digital marketing performance metrics (traffic, conversions, ROI) to measure effectiveness and inform strategic decisions. Providing regular reports with actionable insights and recommendations for continuous improvement.",
                },
                {
                    id: 125,
                    icon: 'bi-whatsapp fs-4',
                    title: "Online Reputation Management (ORM)",
                    description: "Monitoring and responding to online reviews, comments, and mentions to maintain a positive brand image. Mitigating negative feedback and leveraging positive feedback to enhance credibility and trustworthiness.",
                },
                {
                    id: 68,
                    icon: 'bi-whatsapp fs-4',
                    title: "Mobile Marketing",
                    description: "Optimizing digital marketing strategies and campaigns for mobile users, considering mobile-specific behaviors and preferences.Mobile-friendly website design, SMS marketing, and mobile app marketing strategies.",
                },
                {
                    id: 30,
                    icon: 'bi-whatsapp fs-4',
                    title: "Customer Relationship Management (CRM)",
                    description: "Integrating CRM systems to manage and nurture leads throughout the sales funnel.Leveraging customer data for personalized marketing campaigns and improved customer retention.",
                },
                {
                    id: 30,
                    icon: 'bi-whatsapp fs-4',
                    title: "Marketing Automation",
                    description: "Implementing tools and platforms (like HubSpot, Marketo, or Mailchimp) to automate repetitive marketing tasks, such as email scheduling, lead nurturing, and campaign management.",
                },
            ],
        }
    }
}
</script>
<style lang="">

</style>
