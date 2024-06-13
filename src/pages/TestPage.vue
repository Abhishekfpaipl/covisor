<template>
    <div>
        <p v-for="(sentence, index) in sentences" :key="index">{{ sentence.name }}</p>
        Total Sentences: {{ sentences.length }}
    </div>
</template>

<script>
export default {
    name: 'SalesFunnelPage',
    data() {
        return {
            servicesList: ['Website Development Services', 'Digital Marketing Services', 'Ecommerce Development Services'],
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
            placesList: [
                'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Ahmedabad', 'Kolkata', 'Jaipur',
                'Chandigarh', 'Coimbatore', 'Lucknow', 'Surat', 'Indore', 'Patna', 'Nagpur', 'Ernakulam', 'Bhopal',
                'Vadodara', 'Ludhiana', 'Kanpur', 'Nashik', 'Varanasi', 'Visakhapatnam', 'Rajkot', 'Raipur-Chhattisgarh',
                'Vijayawada', 'Madurai', 'Ranchi', 'Goa', 'Thiruvananthapuram', 'Bhubaneshwar', 'Allahabad',
                'Aurangabad-Maharashtra', 'Dehradun', 'Mysore', 'Trichy', 'Guwahati', 'Agra', 'Kozhikode', 'Jodhpur',
                'Thrissur', 'Kolhapur', 'Salem', 'Meerut', 'Mangalore', 'Gorakhpur', 'Jabalpur', 'Jalandhar', 'Gwalior'
            ],
            sentences: []
        };
    },
    created() {
        this.generateSentences();
    },
    methods: {
        generateSentences() {
            const generatedSentences = [];

            this.servicesList.forEach(service => {
                this.categoriesList.forEach(category => {
                    this.placesList.forEach(place => {
                        const name = `${service} in ${category} in ${place}`;
                        const slug = name.toLowerCase().replace(/\s+/g, '-');
                        generatedSentences.push({ slug, name });
                    });
                });
            });

            this.sentences = generatedSentences;
            console.log('sentences', JSON.stringify(generatedSentences));
        }
    }
    
};
</script>
