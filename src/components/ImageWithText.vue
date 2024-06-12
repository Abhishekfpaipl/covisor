<template>
    <div class="my-5 py-3" style="background-color: var(--bg-forth);">
        <div class="container">
            <div class="row d-flex align-items-center rounded-md-5 rounded-0 p-md-5 p-3 text-dark">
                <div class="col-12 col-md-6 text-center text-md-start">
                    <h1>{{ title }}</h1>
                    <p v-if="!points" class="my-2">{{ description }}</p>
                    <div v-if="points" class="">
                        <div v-for="(link, index) in links" :key="index" class="d-flex">
                            <i class="bi bi-check-square-fill text-success me-2"></i>
                            <p class="mb-0">{{ link }}</p>
                        </div>
                    </div> 
                </div>
                <div class="col-12 col-md-6 d-flex flex-column">
                    <img class="align-self-center" :src="image" style="width: 250px; max-width: 80%;" alt="image">
                    <div v-if="points" class="">
                        <i class="bi bi-quote text-dark"></i>
                        <small>
                            Cratio integrated leads from 5 souces,
                            significantly reducing our first response
                            time.<br>
                        </small>
                        <strong class="text-start">Ayush Gupta, Saleswity</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ImageWithText',
    props: ['title', 'description', 'image', 'points'],
    data() {
        return {
            links: [
                "Effortlessly capture, categorize, and route leads to the right sales reps instantly",
                "Boost your sales teams's response time, and never miss a sales lead again.",
                "Seamlessly integrated with Google, Facebook, Email, Websites, Landing Page, Social Media, Lead Portals, and 30+ other sources."
            ],
            test: [
                "Ensure Zero Lead Leakage",
                "No Missing Follow - ups",
                "Increase 100 - 200 % Additional Sales",
                "Cost effective",
                "Secured Plateform",
                "Free support",
                "Modern Interface",
                "Easy Setup & Fast Adoption",
            ]
        }
    }
}
</script>
<style lang="">

</style>