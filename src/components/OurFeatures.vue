<template>
    <div class="  my-3 py-3">
        <!-- <div class="text-center pb-3">
            <h1>The numbers add up with SalesWik CRM</h1>
            <div class="container my-3">
                <div class="row row-cols-2 row-cols-md-4">
                    <div v-for="(link, index) in links" :key="index" class="col">
                        <p class="mb-0 fs-1 text-decoration-underline ">{{ link.rate }}</p>
                        <small>{{ link.description }}</small>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="container">
            <div class="row row-cols-2 row-cols-md-3 g-2">
                <div class="col card" v-for="(feature, index) in features" :key="index">
                    <div class="flex-fill flex-column align-items-center p-2">
                        <div class="p-3 rounded-3">
                            <img :src="feature.img" style="width: 50px;" alt="">
                            <!-- <i class="bi text-primary rounded-3 fs-4 shadow p-3" :class="feature.icon"></i> -->
                        </div>
                        <div class="d-flex flex-column align-items-center ms-md-2">
                            <small class="fw-bold text-capitalize">{{ feature.title }}</small>
                            <small>{{ feature.description }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'OurFeatures',
    data() {
        return {
            features: [
                {
                    id: 1,
                    icon: 'bi-building',
                    img: 'img/features/custom.png',
                    title: 'Score leads',
                    description: 'Qualify leads based on their region, behavior, and other parameters'
                },
                {
                    id: 2,
                    icon: 'bi-building',
                    img: 'img/features/gear.png',
                    title: 'Assign leads to the right rep',
                    description: 'Get the right sales rep on the job based on customer preferences and other predefined criteria.'
                },
                {
                    id: 5,
                    icon: 'bi-building',
                    img: 'img/features/uniform.png',
                    title: 'Close deals quickly',
                    description: "Generate invoices within CRM from prospect's record and update the deal stage and status."
                },

                {
                    id: 7,
                    icon: 'bi-building',
                    img: 'img/features/block.png',
                    title: 'Attach relevant details',
                    description: 'Add notes, labels, or other documents to record in CRM.'
                },

                {
                    id: 3,
                    icon: 'bi-building',
                    img: 'img/features/wallet.png',
                    title: 'Automate activites',
                    description: 'Create workflows for faster, erro-free communication and service.'
                },
                {
                    id: 4,
                    icon: 'bi-building',
                    img: 'img/features/lead.png',
                    title: 'lead capture',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 6,
                    icon: 'bi-building',
                    img: 'img/features/users.png',
                    title: 'User management',
                    description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                },
                {
                    id: 8,
                    icon: 'bi-building',
                    title: 'Stay connected',
                    img: 'img/features/data.png',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
            ],
            links: [
                {
                    id: 1,
                    rate: '300%',
                    description: 'Improvement in lead conversion rates.'
                },
                {
                    id: 2,
                    rate: '41%',
                    description: 'Revenue increase per salesperson.'
                },
                {
                    id: 3,
                    rate: '27%',
                    description: 'Improvement in customer retention.'
                },
                {
                    id: 4,
                    rate: '24%',
                    description: 'Shorter sales cycles.'
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>