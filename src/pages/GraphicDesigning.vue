<template>
    <div>
        <FormBanner :service="'Graphic Designing'" :category="category" :place="place" v-observe />

        <LeadManagement :values="features" :title="'Factors, you will love'" v-observe />

        <AutoScrolling v-observe />
        <Success v-observe />
        <Faq :questions="questions" v-observe />
        <Counter :service="'Graphic Designing'" :serviceCount="2000" :category="'India'" :categoryCount="1500"
            :place="'All over the world'" :placeCount="5000" v-observe />
        <OurService v-observe />
        <FameFoot :service="'Graphic Designing'" :category="''" :place="''" v-observe />

    </div>
    <FooterBar />
</template>

<script>
import LeadManagement from '@/components/LeadManagement.vue'
import FooterBar from '@/components/FooterBar.vue'
import OurService from '@/components/OurService.vue'
import Success from '@/components/SucessSection.vue';
import Faq from '@/components/FaqSection.vue'; 
import FameFoot from '@/components/salesfunnel/FameFoot.vue';
import FormBanner from '@/components/salesfunnel/FormBanner.vue';
import Counter from '@/components/salesfunnel/SalesCounter.vue';
import AutoScrolling from '@/components/AutoScrolling.vue';
export default {
    name: "GraphicDesigning",
    components: {
        LeadManagement,
        FooterBar,
        OurService,
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
            features: [
                {
                    id: 1,
                    icon: 'bi-pencil-square fs-4',
                    title: "Logo Designing",
                    description: "Create distinctive and memorable visual identities for brands and businesses.",
                },
                {
                    id: 2,
                    icon: 'bi-palette fs-4',
                    title: "Brand Assets Designing",
                    description: "Develop cohesive visual elements that strengthen brand recognition and identity.",
                },
                {
                    id: 3,
                    icon: 'bi-box-seam fs-4',
                    title: "Packaging Designing",
                    description: "Design eye-catching and functional packaging solutions that enhance product appeal.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Social Media Post Designing",
                    description: "Craft engaging visuals tailored for effective social media marketing campaigns.",
                },
                {
                    id: 5,
                    icon: 'bi-file-earmark-richtext fs-4',
                    title: "Brochure Designing",
                    description: "Design informative and visually appealing printed materials for marketing and communication.",
                },
                {
                    id: 65,
                    icon: 'bi-journal-richtext fs-4',
                    title: "Catalogues Designing",
                    description: "Create organized and visually appealing product catalogs for showcasing offerings.",
                },
                {
                    id: 63,
                    icon: 'bi-bullseye fs-4',
                    title: "Advertisement Designing",
                    description: "Develop impactful visuals that capture attention and convey brand messages effectively.",
                },
                {
                    id: 54,
                    icon: 'bi-pencil fs-4',
                    title: "Content Designing",
                    description: "Create visually engaging content layouts and graphics for digital and print media.",
                },
            ],
            questions: [
                {
                    id: 1,
                    question: "What is graphic design?",
                    answer: " Graphic design is the art and practice of combining text and images to communicate messages visually. It involves creating logos, brochures, posters, advertisements, and more."
                },
                {
                    id: 2,
                    question: "How much does graphic design cost?",
                    answer: "Costs depend on the scope of the project, the experience of the designer, and factors like revisions and the usage rights of the designs. It can range from a few hundred to several thousand rupees."
                },
                {
                    id: 3,
                    question: "What happens if I'm not satisfied with the initial design?",
                    answer: "Revisions are typically included in the design process but revisions can vary depending on the agreement. You can provide feedback, and the designer will make adjustments until you're satisfied with the final result."
                },
                {
                    id: 4,
                    question: "Will I own the rights to the designs once they're completed?",
                    answer: "Ownership rights can vary depending on the agreement. Ensure you understand whether you'll have full rights to use the designs for commercial purposes without restrictions."
                },
                {
                    id: 5,
                    question: "How will the design files be delivered to me?",
                    answer: "Design files are typically delivered digitally. Ensure you receive files in formats suitable for your needs (e.g., high-resolution images for printing, web-optimized graphics for online use)."
                },
                {
                    id: 6,
                    question: "Do you provide printing services or only design?",
                    answer: "Some graphic designers offer printing services or can recommend trusted print vendors. Others focus solely on the design aspect, and you'll need to arrange printing separately."
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
