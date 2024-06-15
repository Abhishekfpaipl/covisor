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
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
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
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
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
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
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
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
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
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
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
                        <router-link :to="'/sales-funnel/' + generateSlug(sentence)"
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
    name: "SalePlacePage",
    data() {
        return {
            servicesList: ['Website Development', 'Digital Marketing', 'Ecommerce B2B Wholesale', 'Ecommerce B2C Retail', 'Software Development', 'Graphic Designing',],
            categoriesList: [
                'Body Massage Centres',
                'Cinema Halls', 'Schools', 'Beauty Spas', 'Dermatologists', 'Hospitals', 'Malls',
                'Gyms', 'Beauty Parlours', 'Estate Agents', 'Banquet Halls', 'ENT Doctors', 'Book Shops', 'Bike On Rent',
                'Sexologist Doctors', 'Neurologists', 'Gynaecologist & Obstetrician Doctors', 'Train Ticket Booking Agents',
                'Travel Agents', 'Paying Guest Accommodations', 'General Physician Doctors', 'Dentists', 'Orthopaedic Doctors',
                'Chemists', 'Motor Training Schools', 'Gastroenterologists', 'Car Rental', 'Salons', 'Courier Services',
                'Dance Classes', 'Pathology Labs', 'Taxi Services', 'Cake Shops', 'AC Repair & Services', 'Mobile Phone Dealers',
                'Pet Shops', 'Dmart', 'Packers And Movers', 'Psychiatrists', 'Dharamshalas', 'Urologist Doctors', 'Bakeries',
                'Bicycle Dealers', 'Coffee Shops', 'Paediatricians', 'Sonography Centres', 'Yoga Classes', 'Hostels',
                'Cardiologists', 'Electrical Shops', 'Skin Care Clinics', 'Diagnostic Centres', 'Homeopathic Doctors',
                'Physiotherapists', 'Photo Studios', 'Plumbers', 'Music Classes', 'Electricians', 'Sports Goods Dealers',
                'Shoe Dealers', 'Hair Stylists', 'Gift Shops', 'Ophthalmologists', 'Car Repair & Services', 'Ayurvedic Doctors',
                'Eye Clinics', 'Restaurants', 'Carpenters', 'Jewellery Showrooms', 'Cooks On Hire', 'Stationery Shops',
                'Nephrologists', 'Caterers', 'Interior Designers', 'Rehabilitation Center', 'Grocery Stores', 'Banks', 'ATM',
                '5 Star Hotels', 'Hotels', 'Resorts', 'Plastic Surgeons', 'Smart Watch Dealers', 'Drug De Addiction Centres'
            ],
            title: this.$route.params.place
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
            return this.categoriesList.map(category => `${service} in ${category} in ${this.title}`);
        },
        generateSlug(sentence) {
            // Convert sentence into slug format
            return sentence.toLowerCase().replace(/\s+/g, '-');
        }
    }
};
</script>
