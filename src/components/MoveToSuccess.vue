<template>
    <div class="my-3 py-3">
        <h1 class="text-center mb-5">Why Choose Us</h1>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-2">
                <div v-for="(link, index) in links" :key="index" class="col d-flex justify-content-center">
                    <div class="card d-flex flex-column align-items-center  border-0" style="width: 18rem;">
                        <img :src="link.image" class="card-img-top" alt="image" style="width: 64px;">
                        <div class="card-body">
                            <h5 class="card-title">{{ link.title }}</h5>
                            <p class="card-text">{{ link.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MoveToSuccess',
    data() {
        return {
            links: [
                {
                    image: "https://funnel.io/hubfs/flashlight-line-2.svg",
                    title: "Get started fast",
                    description: "Ditch weeks of onboarding time"
                },
                {
                    image: "https://funnel.io/hubfs/hand-heart-line-1.svg",
                    title: "Questions answered",
                    description: "Expert support whenever you need it"
                },
                {
                    image: "https://funnel.io/hubfs/shield-line.svg",
                    title: "Trusted Tech Partners",
                    description: "Access a certified worldwide network"
                },
                {
                    image: "https://funnel.io/hubfs/thumb-up-line.svg",
                    title: "No nonsense pricing",
                    description: "We keep it fair and transparent"
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>