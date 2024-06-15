<template>
    <div>
        <FormBanner :service="'B2B ecommerce Development'" :category="category" :place="place" v-observe />

        <LeadManagement :values="features" :title="'Factors, you will love'" v-observe />
        <div class="container">
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

        <Service v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'b2b ecommerce Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <Trophy :service="'b2b ecommerce Development'" :category="''" :place="''" v-observe />

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
    name: "B2BEcommerceDevelopment",
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
                    question: "Q1. Can i make whatsApp communication from saleswik CRM?",
                    answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                },
                {
                    id: 2,
                    question: "Q2. Is Saleswik CRM gives alert of timely followups?",
                    answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                },
                {
                    id: 3,
                    question: "Q3. Can I sync my call log leads to saleswik CRM?",
                    answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                },
                {
                    id: 4,
                    question: "Q4. Is my data secured at saleswik CRM?",
                    answer: "Yes, your data is completely safe, and important credentails are encripted."
                },
                {
                    id: 5,
                    question: "Q5. Can i sync leads form my website to saleswik?",
                    answer: "Yes, we have API based solutions for all your lead sources and its sync leads in runtime."
                },
                {
                    id: 6,
                    question: "Q6. Can i manage my accounts at saleswik CRM?",
                    answer: "Yes, you can manage your PO, proforma & Tax invoices. You can also manage your credit payment followups & AMC renewal."
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>
