<template>
    <div class="bg-light">
        <div class="text-white py-5" style="background-color: var(--bg-primary); padding-bottom: 6rem !important;">
            <h1 class="text-center mb-0 fw-bold">{{ title }}</h1>
        </div>

        <div class="container mt-4">
            <div class="row row-cols-1 row-cols-md-2 g-4 px-2">
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded" style="background-color: var(--bg-primary)">
                        Website Development Services</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in websiteDevelopmentSentences"
                        :key="'wd-' + index" style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded" style="background-color: var(--bg-primary)">
                        Digital Marketing Services</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in digitalMarketingSentences"
                        :key="'dm-' + index" style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded" style="background-color: var(--bg-primary)">
                        Ecommerce Development Services</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in ecommerceDevelopmentSentences"
                        :key="'ec-' + index" style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <!-- <div class="col py-1 bg-light text-start ps-3" style="border-left: 3px solid var(--bg-primary)">
                    <h2>Ecommerce Development Services</h2>
                    <div v-for="(sentence, index) in ecommerceDevelopmentSentences" :key="'ec-' + index">
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div> -->
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
        websiteDevelopmentSentences() {
            return this.generateSentences('Website Development Services');
        },
        digitalMarketingSentences() {
            return this.generateSentences('Digital Marketing Services');
        },
        ecommerceDevelopmentSentences() {
            return this.generateSentences('Ecommerce Development Services');
        }
    },
    methods: {
        generateSentences(service) {
            return this.placesList.map(place => `${service} in ${this.title} in ${place}`);
        },
        generateSlug(sentence) {
            // Convert sentence into slug format
            return sentence.toLowerCase().replace(/\s+/g, '-');
        }
    }
};
</script>
