<template>
    <div class="">
        <Banner v-observe />
        <div class="" id="second">
            <LeadManagement :values="values" :title="'Industries we work for'" v-observe />
        </div>
        <div class="">
            <RequestDemo v-observe />
        </div>
        <!-- <div class="">
            <WorkingProcess />
        </div> -->
        <div class="">
            <WhyChooseUs v-observe />
        </div>
        <div class="">
            <KycSection v-observe />
        </div>
        <!-- <div class="">
            <PriceSection v-observe />
        </div> -->
        <div class="">
            <StarterPacks />
        </div>
        <div class="">
            <ImageWithText :title="title" :description="description" :image="image" :points="true" v-observe />
        </div>
        <div class="">
            <SalesFunnel v-observe />
        </div>
        <div class="">
            <CounterSection v-observe />
        </div>
        <div class="">
            <SucessSection v-observe />
        </div>
        <div class="">
            <TestSection v-observe />
        </div>
        <div class="">
            <FaqSection v-observe />
        </div>
        <div class="">
            <WayToShare v-observe />
        </div>
        <div class="">
            <MiniFooter />
        </div>
        <FooterBar v-observe />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import KycSection from '@/components/KycSection.vue'
import SucessSection from '@/components/SucessSection.vue'
import CounterSection from '@/components/CounterSection.vue'
import FooterBar from '@/components/FooterBar.vue'
import TestSection from '@/components/TestSection.vue'
import WayToShare from '@/components/WayToShare.vue'
import ImageWithText from '@/components/ImageWithText.vue'
import FaqSection from '@/components/FaqSection.vue'
import LeadManagement from '@/components/LeadManagement.vue'
import WhyChooseUs from '@/components/WhyChooseUs.vue'
// import PriceSection from '@/components/PriceSection.vue'
import SalesFunnel from '@/components/SalesFunnel.vue'
import RequestDemo from '@/components/RequestDemo.vue'
import MiniFooter from '@/components/MiniFooter.vue'
// import WorkingProcess from '@/components/WorkingProcess.vue'
import StarterPacks from '@/components/StarterPacks.vue'

export default {
    name: 'HomePage',
    components: {
        Banner,
        KycSection,
        SucessSection,
        CounterSection,
        FooterBar,
        TestSection,
        WayToShare,
        ImageWithText,
        FaqSection,
        LeadManagement,
        WhyChooseUs,
        // PriceSection,
        SalesFunnel,
        RequestDemo,
        // WorkingProcess,
        StarterPacks,
        MiniFooter,
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
