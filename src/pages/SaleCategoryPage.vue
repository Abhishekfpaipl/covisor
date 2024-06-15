<template>
    <div class="bg-light">
        <div class="text-white py-5" style="background-color: var(--bg-primary); padding-bottom: 6rem !important;">
            <h1 class="text-center mb-0 fw-bold">{{ title }}</h1>
        </div>

        <div class="container mt-4">
            <div class="row row-cols-1 row-cols-md-2 g-4 px-2">
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded"
                        style="background-color: var(--bg-primary)">
                        Website Development Services</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in website" :key="'wd-' + index"
                        style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/website-development/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded"
                        style="background-color: var(--bg-primary)">
                        Digital Marketing Services</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in digital" :key="'dm-' + index"
                        style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/digital-marketing/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded"
                        style="background-color: var(--bg-primary)">
                        Ecommerce B2B Wholesale</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in b2becom" :key="'ec-' + index"
                        style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/b2b-ecommerce-development/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded"
                        style="background-color: var(--bg-primary)">
                        Ecommerce B2C Retail</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in b2cecom" :key="'ec-' + index"
                        style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/b2c-ecommerce-development/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded"
                        style="background-color: var(--bg-primary)">
                        Software Development</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in software" :key="'ec-' + index"
                        style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/software-development/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
                <div class="col py-1 bg-light text-start ps-3">
                    <h4 class="mb-4 text-capitalize text-white p-1 ps-3 rounded"
                        style="background-color: var(--bg-primary)">
                        Graphic Designing</h4>
                    <div class="p-1 ps-3 my-2" v-for="(sentence, index) in graphic" :key="'ec-' + index"
                        style="border-left: 3px solid var(--bg-primary)">
                        <router-link :to="'/graphic-designing/' + generateSlug(sentence)"
                            class="text-decoration-none text-black">
                            <small>
                                {{ sentence }}
                            </small>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SaleCategoryPage",
    data() {
        return {
            servicesList: ['Website Development', 'Digital Marketing', 'Ecommerce B2B Wholesale', 'Ecommerce B2C Retail', 'Software Development', 'Graphic Designing',],
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
        website() {
            return this.generateSentences('Website Development');
        },
        digital() {
            return this.generateSentences('Digital Marketing');
        },
        b2becom() {
            return this.generateSentences('Ecommerce B2B Wholesale');
        },
        b2cecom() {
            return this.generateSentences('Ecommerce B2C Retail');
        },
        software() {
            return this.generateSentences('Software Development');
        },
        graphic() {
            return this.generateSentences('Graphic Designing');
        },
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
