<template>
    <div class="">
        <Banner v-observe />
        <div class="" id="second">
            <LeadManagement v-observe />
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
        <div class="">
            <PriceSection v-observe />
        </div>
        <div class="">
            <StarterPacks/>
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
import PriceSection from '@/components/PriceSection.vue'
import SalesFunnel from '@/components/SalesFunnel.vue'
import RequestDemo from '@/components/RequestDemo.vue'
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
        PriceSection,
        SalesFunnel,
        RequestDemo,
        // WorkingProcess,
        StarterPacks,
    },
    data() {
        return {
            title: "Lead Automation & distribution",
            description: "Leads are the lifeline of your business. The more leads you generate, the more leads you impress,and the more your business grows! Every business needs a streamlined system for acquiring,nurturing, and successfully converting leads.",
            image: "https://cfw42.rabbitloader.xyz/eyJjIjp0cnVlLCJoIjoiY3JhdGlvY3JtLmNvbSIsInYiOjE4ODg5ODM4NDgsImkiOiI0YmM3Y2E5OS1mMWRiLTQ1ODctYTc1NS02MGJiYzE0NmE0MDAifQ/wp-content/uploads/2023/09/Funnel-Image.png",
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
