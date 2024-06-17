<template>
    <div style="padding-top:65px">
        <Banner v-observe />
        <div class="" id="second">
            <LeadManagement :values="values" :title="'our Core Values'" v-observe />
        </div>
        <TemplateDemo v-observe/>
        <RequestDemo v-observe />
        <StarterPacks />
        <SalesCounter :service="'Years in industry'" :serviceCount="10" :category="'complete projects'"
            :categoryCount="1000" :place="'happy clients'" :placeCount="900" v-observe />
        <AutoScrolling v-observe />
        <OurService v-observe />
        <SucessSection v-observe />
        <FameFoot :service="'Website Development'" :category="''" :place="''" v-observe />
        <MiniFooter />
        <FooterBar v-observe />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import SucessSection from '@/components/SucessSection.vue'
import SalesCounter from '@/components/salesfunnel/SalesCounter.vue'
import FooterBar from '@/components/FooterBar.vue'
import AutoScrolling from '@/components/AutoScrolling.vue'
import LeadManagement from '@/components/LeadManagement.vue'
import RequestDemo from '@/components/RequestDemo.vue'
import MiniFooter from '@/components/MiniFooter.vue'
import StarterPacks from '@/components/StarterPacks.vue'
import FameFoot from '@/components/salesfunnel/FameFoot.vue';
import OurService from '@/components/OurService.vue'
import TemplateDemo from '@/components/TemplateDemo.vue'

export default {
    name: 'HomePage',
    components: {
        Banner,
        SucessSection,
        SalesCounter,
        FooterBar,
        AutoScrolling,
        LeadManagement,
        RequestDemo,
        StarterPacks,
        MiniFooter,
        OurService,
        FameFoot,
        TemplateDemo,
    },
    data() {
        return {
            values: [
                {
                    id: 1,
                    icon: 'bi-shield-check fs-4',
                    title: "Integrity properties",
                    description: "Demonstrating transparency and honesty in all our commitments and actions, ensuring trust and reliability in every interaction.",
                },
                {
                    id: 2,
                    icon: 'bi-star fs-4',
                    title: "Excellence",
                    description: "Going beyond expectations by understanding your needs deeply and meticulously crafting solutions that surpass ordinary standards.",
                },
                {
                    id: 3,
                    icon: 'bi-people fs-4',
                    title: "Teamwork",
                    description: "Leveraging collective strengths to provide you with adaptable and superior solutions, fostering a collaborative environment where every voice contributes meaningfully."
                },
                {
                    id: 4,
                    icon: 'bi-shield-lock fs-4',
                    title: "Privacy and safety",
                    description: "Create powerful digital safety solutions for your workforce,increasing employee engagement with important processes and procedures effiiciently whilst ensuring the highest levels of compliance.",
                },
                {
                    id: 5,
                    icon: 'bi-graph-up fs-4',
                    title: "Quality services",
                    description: "Crafting bespoke web designs that drive impactful user experiences and convey a distinct brand message, led by experienced designers from concept to execution.",
                },
                {
                    id: 6,
                    icon: 'bi-palette fs-4',
                    title: "Creativity",
                    description: "Solving challenges innovatively, refusing to settle for ordinary solutions, and creating bespoke strategies that not only solve problems but also distinguish your business.",
                },
                {
                    id: 7,
                    icon: 'bi-calendar-check fs-4',
                    title: "Dependability",
                    description: "Consistently delivering on promises, meeting deadlines with proactive communication, and treating your business's success as our own commitment.",
                },
                {
                    id: 1,
                    icon: 'bi-emoji-laughing fs-4',
                    title: "Fun",
                    description: "Cultivating a positive and enjoyable workplace environment, fostering creativity, exceptional client service, and the well-being of our team members through humor and camaraderie.",
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

<style>
.before-enter {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.enter {
    opacity: 1;
    transform: translateY(0);
}
</style>
