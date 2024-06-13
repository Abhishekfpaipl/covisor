<template>
    <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item" v-for="(link, index) in links" :key="index">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        {{ link.name }}
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body d-flex flex-wrap">
                        <router-link :to="'/sales-category/' + sub" v-for="(sub, subIndex) in link.sublinks"
                            :key="subIndex" class="text-decoration-none text-dark">
                            <span>&nbsp; {{ sub }} &nbsp;|</span>
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "MiniFooter",
    data() {
        return {
            links: [
                {
                    id: 1,
                    name: "Popular Categories",
                    sublinks: [
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
                    // sublinks: [
                    //     { slug: 'web-development-in-body-massage-centers-in-delhi', name: "Web Development in Body Massage Centers in Delhi" },
                    //     { slug: 'web-development-in-cinema-halls-in-delhi', name: "Web Development in Cinema Halls in Delhi" },
                    //     { slug: 'web-development-in-schools-in-delhi', name: "Web Development in Schools in Delhi" },
                    //     { slug: 'ecommerce-in-beauty-spas-in-up', name: "Ecommerce in Beauty Spas in Up" },
                    //     // { name: "Dermatologists" },
                    //     // { name: "Hospitals" },
                    //     // { name: "Malls" },
                    //     // { name: "Gyms" },
                    //     // { name: "Beauty Parlours" },
                    //     // { name: "Estate Agents" },
                    //     // { name: "Banquet Halls" },
                    //     // { name: "ENT Doctors" },
                    //     // { name: "Book Shops" },
                    //     // { name: "Bike On Rent" },
                    //     // { name: "Sexologist Doctors" },
                    //     // { name: "Neurologist" },
                    //     // { name: "Gynaecologist & Obstetrician Doctors" },
                    //     // { name: "Train Ticket Booking Agents" },
                    //     // { name: "Travel Agents" },
                    //     // { name: "Paying Guest Accommodations" },
                    //     // { name: "General physician doctors" },
                    //     // { name: "Dentists" },
                    //     // { name: "Orthopaedic Doctors" },
                    //     // { name: "Chemists" },
                    //     // { name: "Motor training schools" },
                    //     // { name: "Gastroenterologists" },
                    //     // { name: "Car Rental" },
                    //     // { name: "Courier Services " },
                    //     // { name: "Dance Classes " },
                    //     // { name: "Pathology labs" },
                    //     // { name: "Taxi services" },
                    //     // { name: "Cake Shops" },
                    //     // { name: "AC Repair & Services" },
                    //     // { name: "Mobile Phone Dealers" },
                    //     // { name: "Pet Shops" },
                    //     // { name: "Dmart" },
                    //     // { name: "Packers And Movers" },
                    //     // { name: "Psychiatrists" },
                    //     // { name: "Dharamshalas" },
                    //     // { name: " Urologist Doctors " },
                    //     // { name: " Bakeries" },
                    //     // { name: " Bakeries" },
                    // ],
                }
            ]
        }
    }
}
</script>
<style lang="">

</style>