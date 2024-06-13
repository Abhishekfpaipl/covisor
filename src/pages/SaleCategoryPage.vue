<template>
    <div>
        <div class="text-white py-5" style="background-color: var(--bg-primary); padding-bottom: 6rem !important;">
            <h1 class="text-center mb-0 fw-bold">{{ title }}</h1>
        </div>

        <div class="container mt-4">
            <div v-for="(sentence, index) in generatedSentences" :key="index" class="mb-3">
                <router-link :to="'/sales-funnel/' + generateSlug(sentence)">
                    {{ sentence }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SaleCategoryPage",
    data() {
        return {
            servicesList: ['Website Development Services', 'Digital Marketing Services', 'Ecommerce Development Services'],
            placesList: [
                'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur',
                'Chandigarh', 'Coimbatore', 'Lucknow', 'Surat', 'Indore', 'Patna', 'Nagpur', 'Ernakulam', 'Bhopal',
                'Vadodara', 'Ludhiana', 'Kanpur', 'Nashik', 'Varanasi', 'Visakhapatnam', 'Rajkot', 'Raipur-Chhattisgarh',
                'Vijayawada', 'Madurai', 'Ranchi', 'Goa', 'Thiruvananthapuram', 'Bhubaneshwar', 'Allahabad',
                'Aurangabad-Maharashtra', 'Dehradun', 'Mysore', 'Trichy', 'Guwahati', 'Agra', 'Kozhikode', 'Jodhpur',
                'Thrissur', 'Kolhapur', 'Salem', 'Meerut', 'Mangalore', 'Gorakhpur', 'Jabalpur', 'Jalandhar', 'Gwalior'
            ],
            title: this.$route.params.category
        };
    },
    computed: {
        generatedSentences() {
            let sentences = [];
            // Generate sentences combining servicesList, title, and placesList
            this.servicesList.forEach(service => {
                this.placesList.forEach(place => {
                    sentences.push(`${service} in ${this.title} in ${place}`);
                });
            });
            return sentences;
        }
    },
    methods: {
        generateSlug(sentence) {
            // Convert sentence into slug format
            return sentence.toLowerCase().replace(/\s+/g, '-');
        }
    }
};
</script>

<style lang="">

  </style>