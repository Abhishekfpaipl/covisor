<template>
    <div class="mt-5 py-2">
        <div class="container">
            <div class="row d-flex align-items-start rounded-md-5 rounded-0 p-3 text-dark">
                <div class="col-12 col-md-6 d-flex flex-column">
                    <h1 class="text-center mb-3">{{ title }}</h1>
                    <img class="align-self-center" src="img/whychoose.svg" style="width: 250px; max-width: 80%;"
                        alt="image">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0">
                    <div v-for="(link, index) in test" :key="index" class="d-flex my-2">
                        <i class="bi bi-check-square-fill me-2" style="color: var(--bg-primary);"></i>
                        <p class="mb-0">{{ link }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WhyChooseUs',
    data() {
        return {
            title: "Why Choose Us",
            test: [
                "Ensure Zero Lead Leakage",
                "No Missing Follow - ups",
                "Increase 80 % Additional Sales",
                "Cost effective",
                "Secured Plateform",
                "Free support",
                "Modern Interface",
                "Easy Setup & Fast Adoption",
            ],
            name: "",
            email: "",
            number: "",
            businessName: "",
        }
    }
}
</script>
<style lang="">

</style>