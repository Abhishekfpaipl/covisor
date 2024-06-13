<template>
    <div class="pt-5 mt-5">

        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                    type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Connect</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                    type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Business</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                    type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Ecommerce</button>
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
                                <th scope="col" class="border-end text-center" v-for="plan in plans"
                                    :key="plan.id">
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
                            <tr class="border-bottom" v-for="feature in features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal smaller">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.featuresIncluded.includes(feature.id)"
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
                                <th scope="col" class="border-end text-center" v-for="plan in plans"
                                    :key="plan.id">
                                    <p class="mb-0">{{ plan.title }}</p>
                                    <p class="mb-0 ">
                                        <small class="">₹</small>
                                        <small class="">{{ plan.price }}</small>
                                        <small class="fw-normal">/-</small>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="border-start border-end">
                            <tr class="border-bottom" v-for="feature in features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.featuresIncluded.includes(feature.id)"
                                        class="bi bi-check2 fs-5 text-success"></i>
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
                                <th scope="col" class="border-end text-center" v-for="plan in plans"
                                    :key="plan.id">
                                    <p class="mb-0">{{ plan.title }}</p>
                                    <p class="mb-0 ">
                                        <small class="">₹</small>
                                        <small class="">{{ plan.price }}</small>
                                        <small class="fw-normal">/-</small>
                                    </p>
                                </th>
                            </tr>
                        </thead>
                        <tbody class="border-start border-end">
                            <tr class="border-bottom" v-for="feature in features" :key="feature.id">
                                <th class="pb-1 text-start">
                                    <span class="fw-normal">{{ feature.name }}</span>
                                </th>
                                <td class="pb-1 text-center" v-for="plan in plans" :key="plan.id">
                                    <i v-if="plan.featuresIncluded.includes(feature.id)"
                                        class="bi bi-check2 fs-5 text-success"></i>
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
            plans: [
                { id: 1, title: "1", sup:"st", description: "Info Website", price: 999, featuresIncluded: [1, 2, 3, 4, 5, 6] },
                { id: 2, title: "2", sup:"nd", description: "Business Website", price: 1499, featuresIncluded: [1, 2, 3, 4, 5, 6, 7, 8] },
                { id: 3, title: "3", sup:"rd", description: "Catalog Website", price: 2499, featuresIncluded: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
                { id: 4, title: "4", sup:"th", description: "Designer Website", price: 3499, featuresIncluded: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] },
            ],
            features: [
                { id: 1, name: "Free Domin" },
                { id: 2, name: "Email Id" },
                { id: 3, name: "SSL Certificate" },
                { id: 4, name: "Contact Form" },
                { id: 5, name: "Mobile Responsive" },
                { id: 6, name: "SEO friendly" },
                { id: 7, name: "Google Location Map" },
                { id: 8, name: "Direct Calling" },
                { id: 9, name: "Social Links" },
                { id: 10, name: "Whatsapp Connect" },
                { id: 11, name: "Payment Detail" },
                { id: 12, name: "Business Catelog" },
                { id: 13, name: "Content Writing" },
                { id: 14, name: "Free Update" },
                { id: 15, name: "Brand Logo" },
                { id: 16, name: "Development Time" },
                { id: 17, name: "Customer Support" },
                { id: 18, name: "Renewal Charges" },
            ],
        };
    },
}
</script>
<style lang="">

</style>