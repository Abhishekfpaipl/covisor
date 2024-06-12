<template>
    <div class="" style="background-color: var(--bg-forth)">
        <div class="container my-5 pb-5">
            <h1 class="text-center py-5 text-capitalize">Get started in 3 simple steps</h1>
            <div class="row row-cols-1 row-cols-lg-3 g-3">
                <div v-for="(link, index) in links" :key="index" class="col">
                    <div class="card p-3 ">
                        <div class="">
                            <div class="d-flex justify-content-center align-items-center">
                                <img :src="link.img" width="80" class="">
                            </div>
                            <h5 class="mt-3 text-center text-capitalize">{{ link.head }}</h5>
                            <p class="text-center w-100 text-capitalize">{{ link.text }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'KycSection',
    data() {
        return {
            links: [
                {
                    id: 1,
                    img: 'img/registration.png',
                    head: 'Register Your Account',
                    text: 'Register your account and get verified.'
                },
                {
                    id: 2,
                    img: 'img/1.png',
                    head: 'Setup Your Account',
                    text: 'Setup your account as per your business details.'
                },
                {
                    id: 3,
                    img: 'img/2.png',
                    head: 'Boost your sales',
                    text: 'through various of our features'
                },
            ],
        }
    }
}
</script>