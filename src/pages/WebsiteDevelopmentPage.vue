<template>
    <div>
        <FormBanner :service="'Website Development'" :category="category" :place="place" v-observe />
        <LeadManagement :values="links" :title="'Factors, you will love'" v-observe />
        <WebsiteDevelopmentText v-observe />
        <Service v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'Website Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <Trophy :service="'Website Development'" :category="''" :place="''" v-observe />
    </div>
    <FooterBar />
</template>
<script>
import LeadManagement from '@/components/LeadManagement.vue'
import FooterBar from '@/components/FooterBar.vue'
import OurService from '@/components/OurService.vue'
import WebsiteDevelopmentText from '@/components/WebsiteDevelopmentText.vue'
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue';
import Service from '@/components/salesfunnel/ServicesSection.vue';
import Trophy from '@/components/salesfunnel/TrophySection.vue';

import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
export default {
    name: "WebsiteDevelopmentPage",
    components: {
        LeadManagement,
        FooterBar,
        OurService,
        WebsiteDevelopmentText,
        FormBanner,
        Success,
        Faq,
        Service,
        Counter,
        Trophy,
    },
    data() {
        return {
            links: [
                {
                    id: 1,
                    icon: 'bi-palette fs-4',
                    title: "Custom Website Design",
                    description: "Tailored designs to fit your unique brand identity.",
                },
                {
                    id: 2,
                    icon: 'bi-phone-landscape fs-4',
                    title: "Responsive Web Development",
                    description: "Optimized for seamless experiences on all devices.",
                },
                {
                    id: 3,
                    icon: 'bi-file-earmark-code fs-4',
                    title: "Content Management System (CMS) Integration",
                    description: "Efficient CMS solutions for easy content updates.",
                },
                {
                    id: 4,
                    icon: 'bi-cart fs-4',
                    title: "E-commerce Development",
                    description: "Robust online stores to boost your sales.",
                },
                {
                    id: 5,
                    icon: 'bi-code-slash fs-4',
                    title: "Custom Web Application Development",
                    description: "Bespoke applications to meet your business needs.",
                },
                {
                    id: 6,
                    icon: 'bi-graph-up fs-4',
                    title: "SEO and Performance Optimization",
                    description: "Enhance visibility and speed for better rankings.",
                },
                {
                    id: 7,
                    icon: 'bi-tools fs-4',
                    title: "Website Maintenance and Support",
                    description: "Reliable support to keep your site running smoothly.",
                },
                {
                    id: 8,
                    icon: 'bi-plug fs-4',
                    title: "Integration with Third-party Services",
                    description: "Seamlessly connect with essential external tools.",
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