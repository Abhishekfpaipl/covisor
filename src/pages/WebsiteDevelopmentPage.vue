<template>
    <div>
        <FormBanner :service="'Website Development'" :category="category" :place="place" v-observe />
        <LeadManagement :values="links" :title="'Factors, you will love'" v-observe />
        <WebsiteDevelopmentText v-observe />
        <AutoScrolling v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'Website Development'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <FameFoot :service="'Website Development'" :category="null" :place="null" v-observe />
    </div>
    <p></p>
    <FooterBar />
</template>
<script>
import LeadManagement from '@/components/LeadManagement.vue'
import FooterBar from '@/components/FooterBar.vue'
import OurService from '@/components/OurService.vue'
import WebsiteDevelopmentText from '@/components/WebsiteDevelopmentText.vue'
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue'; 
import FameFoot from '@/components/salesfunnel/FameFoot.vue';
import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
import AutoScrolling from '@/components/AutoScrolling.vue';
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
        Counter,
        FameFoot,
        AutoScrolling,
    },
    data() {
        return {
            services: '',
            category: '',
            place: '',
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
                    question: "What is web hosting, and why do I need it?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 2,
                    question: "What is a domain name, and how do I choose one?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 3,
                    question: "How much will it cost to build and maintain a website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 4,
                    question: "Are there any hidden costs I should be aware of?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 5,
                    question: "How will people find my website?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 6,
                    question: "How do I ensure my website is secure?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 7,
                    question: "What is user experience (UX), and why is it important?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 8,
                    question: "What if I need to make changes to my website in the future?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 9,
                    question: "Do I need professional content writing and design services?",
                    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis vitae pariatur omnis iste eius earum enim distinctio libero et harum eaque sapiente nihil atque provident odio voluptate, officiis dolores!"
                },
                {
                    id: 10,
                    question: "How long will it take to build my website?",
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