<template>
    <div class="">
        <Banner v-observe />
        <div class="" id="second">
            <LeadManagement :values="values" :title="'our Core Values'" v-observe />
        </div>
        <RequestDemo v-observe />
        <StarterPacks /> 
        <SalesCounter :service="'Years in industry'" :serviceCount="10" :category="'complete projects'" :categoryCount="1000"
        :place="'happy clients'" :placeCount="900" v-observe/>
        <AutoScrolling v-observe />
        <OurService v-observe />
        <SucessSection v-observe />
        <Trophy :service="'Website Development'" :category="''" :place="' '" v-observe />
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
import Trophy from '@/components/salesfunnel/TrophySection.vue';
import OurService from '@/components/OurService.vue'

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
        Trophy
    },
    data() {
        return {
            title: "Lead Automation & distribution",
            description: "Leads are the lifeline of your business. The more leads you generate, the more leads you impress,and the more your business grows! Every business needs a streamlined system for acquiring,nurturing, and successfully converting leads.",
            image: "https://cfw42.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoiY3JhdGlvY3JtLmNvbSIsInYiOjE4ODg5ODM4NDgsImkiOiI0YmM3Y2E5OS1mMWRiLTQ1ODctYTc1NS02MGJiYzE0NmE0MDAifQ/wp-content/uploads/2023/09/Funnel-Image.png",
            values: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Integrity properties",
                    description: "Keeping our promises to you demonstrates our integrity. We also seek to maintain a spirit of transparent honesty in everything we do.Every piece of work we create is to achieve a common goal,to strengthen our clients market positions..",
                },
                {
                    id: 2,
                    icon: 'bi-funnel fs-4',
                    title: "Excellence",
                    description: "We're smart, creative, nerdy and nice. And most importantly, we make sure we understand you, your business and the people you work with.By giving attention to every detail, we create a product that far surpasses the status quo.",
                },
                {
                    id: 3,
                    icon: 'bi-funnel fs-4',
                    title: "Teamwork",
                    description: "We combine our strengths to give you a superior, more versatile solution.We intentionally maintain a collaborative environment where each team member's voice is heard, valued, and respected so that their ideas benefit you.",
                },
                {
                    id: 4,
                    icon: 'bi-funnel fs-4',
                    title: "Privacy and safety",
                    description: "Create powerful digital safety solutions for your workforce,increasing employee engagement with important processes and procedures effiiciently whilst ensuring the highest levels of compliance.",
                },
                {
                    id: 5,
                    icon: 'bi-funnel fs-4',
                    title: "Quality services",
                    description: "Our experienced designer will create a web design for your business or organization from scratch to bring about effective result-driven user experiences and a unique, unforgettable brand message to your website audience.",
                },
                {
                    id: 6,
                    icon: 'bi-funnel fs-4',
                    title: "Creativity",
                    description: "Creativity is problem solving, and we believe in solving the impossible. We never settle for the first, easiest, or quickest solution. We carefully analyze, research, and create a custom solution that not only solves your challenge but also helps you stand out.",
                },
                {
                    id: 7,
                    icon: 'bi-funnel fs-4',
                    title: "Dependability",
                    description: "We endeavor to always deliver what we promise you, to meet every deadline, and to communicate proactively.Because we treat your business like our own, we strive to deliver services upon which you can completely rely.",
                },
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Fun",
                    description: "We believe that by demonstrating a sense of humor and developing an enjoyable workplace environment, we create an enduring atmosphere for exceptional creativity, outstanding client service, and thriving team members.",
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
/* You can put the CSS classes here too */
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
