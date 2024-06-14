<template>
    <div class="">
        <div class="text-white py-5" style="background-color: var(--bg-primary); padding-bottom: 6rem !important;">
            <h1 class="text-center mb-0 fw-bold text-capitalize">{{ title }}</h1>
            <small class="text-capitalize">The secret of getting ahead, is getting started</small>
        </div>
        <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Website
                    Development</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Digital
                    Marketing</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Ecommerce
                    Development</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                tabindex="0">
                <div class="table-responsive">
                    <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                        <thead class="border-bottom">
                            <tr>
                                <th></th>
                                <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                    <p class="mb-0">{{ plan.title }} <sup>{{ plan.sup }}</sup></p>
                                    <p class="mb-0 ">
                                        <small class="smaller ">₹</small>
                                        <small class="smaller">{{ plan.price }}</small>
                                        <small class="smaller fw-normal">/-</small>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="border-start border-end">
                            <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal smaller">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.features[index].included"
                                        class="bi bi-check2 fs-5 text-success smaller"></i>
                                    <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                        class="fw-normal">Basic</i>
                                    <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div class="table-responsive">
                    <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                        <thead class="border-bottom">
                            <tr>
                                <th></th>
                                <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                    <p class="mb-0">{{ plan.title }} <sup>{{ plan.sup }}</sup></p>
                                    <p class="mb-0 ">
                                        <small class="smaller ">₹</small>
                                        <small class="smaller">{{ plan.price }}</small>
                                        <small class="smaller fw-normal">/-</small>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="border-start border-end">
                            <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal smaller">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.features[index].included"
                                        class="bi bi-check2 fs-5 text-success smaller"></i>
                                    <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                        class="fw-normal">Basic</i>
                                    <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                <div class="table-responsive">
                    <table class="table table-borderless table-hover container-fluid" style="width: 100%">
                        <thead class="border-bottom">
                            <tr>
                                <th></th>
                                <th scope="col" class="border-end text-center" v-for="plan in plans" :key="plan.id">
                                    <p class="mb-0">{{ plan.title }} <sup>{{ plan.sup }}</sup></p>
                                    <p class="mb-0 ">
                                        <small class="smaller ">₹</small>
                                        <small class="smaller">{{ plan.price }}</small>
                                        <small class="smaller fw-normal">/-</small>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="border-start border-end">
                            <tr class="border-bottom" v-for="(feature, index) in plans[0].features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal smaller">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.features[index].included"
                                        class="bi bi-check2 fs-5 text-success smaller"></i>
                                    <i v-else-if="feature.name === 'Brand Logo' && plan.id === 4"
                                        class="fw-normal">Basic</i>
                                    <i v-else class="bi bi-dash fs-5 text-secondary"></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "StarterPricing",
    data() {
        return {
            title: this.$route.params.title.replace(/-/g, ' '),
            plans: [
                {
                    id: 1,
                    title: "1",
                    sup: "st",
                    description: "Info Website",
                    price: 999,
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: false },
                        { id: 8, name: "Direct Calling", included: false },
                        { id: 9, name: "Social Links", included: false },
                        { id: 10, name: "WhatsApp Connect", included: false },
                        { id: 11, name: "Payment Detail", included: false },
                        { id: 12, name: "Business Catalog", included: false },
                        { id: 13, name: "Content Writing", included: false },
                        { id: 14, name: "Free Update", included: false },
                        { id: 15, name: "Brand Logo", included: false },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
                {
                    id: 2,
                    title: "2",
                    sup: "nd",
                    description: "Business Website",
                    price: 1499,
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: true },
                        { id: 8, name: "Direct Calling", included: true },
                        { id: 9, name: "Social Links", included: false },
                        { id: 10, name: "WhatsApp Connect", included: false },
                        { id: 11, name: "Payment Detail", included: false },
                        { id: 12, name: "Business Catalog", included: false },
                        { id: 13, name: "Content Writing", included: false },
                        { id: 14, name: "Free Update", included: false },
                        { id: 15, name: "Brand Logo", included: false },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
                {
                    id: 3,
                    title: "3",
                    sup: "rd",
                    description: "Catalog Website",
                    price: 2499,
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: true },
                        { id: 8, name: "Direct Calling", included: true },
                        { id: 9, name: "Social Links", included: true },
                        { id: 10, name: "WhatsApp Connect", included: true },
                        { id: 11, name: "Payment Detail", included: true },
                        { id: 12, name: "Business Catalog", included: true },
                        { id: 13, name: "Content Writing", included: true },
                        { id: 14, name: "Free Update", included: true },
                        { id: 15, name: "Brand Logo", included: false },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
                {
                    id: 4,
                    title: "4",
                    sup: "th",
                    description: "Designer Website",
                    price: 3499,
                    features: [
                        { id: 1, name: "Free Domain", included: true },
                        { id: 2, name: "Email Id", included: true },
                        { id: 3, name: "SSL Certificate", included: true },
                        { id: 4, name: "Contact Form", included: true },
                        { id: 5, name: "Mobile Responsive", included: true },
                        { id: 6, name: "SEO friendly", included: true },
                        { id: 7, name: "Google Location Map", included: true },
                        { id: 8, name: "Direct Calling", included: true },
                        { id: 9, name: "Social Links", included: true },
                        { id: 10, name: "WhatsApp Connect", included: true },
                        { id: 11, name: "Payment Detail", included: true },
                        { id: 12, name: "Business Catalog", included: true },
                        { id: 13, name: "Content Writing", included: true },
                        { id: 14, name: "Free Update", included: true },
                        { id: 15, name: "Brand Logo", included: true },
                        { id: 16, name: "Development Time", included: false },
                        { id: 17, name: "Customer Support", included: false },
                        { id: 18, name: "Renewal Charges", included: false },
                    ],
                },
            ],

        };
    },
};
</script>
