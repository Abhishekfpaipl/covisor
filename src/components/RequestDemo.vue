<template>
    <div class="my-5 py-3" style="background-color: var(--bg-primary);">
        <div class="container">
            <div class="row d-flex align-items-start rounded-md-5 rounded-0 p-md-5 p-3 text-dark">
                <div class="col-12 col-md-6 text-center text-md-start">
                    <h1 class="text-white mb-3">Request a demo</h1>
                    <div class="text-white my-4 pe-0 pe-md-5">Please fill in the form here, and we'll have the best
                        product expert
                        reach out to you for a
                        one-to-one demo.</div>
                    <div class="mt-3">
                        <div v-for="(link, index) in test" :key="index" class="d-flex text-center text-white my-3">
                            <i class="bi bi-check-square-fill me-2"></i>
                            <p class="mb-0 text-start">{{ link }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-0">
                    <!-- <h1 class="text-capitalize text-white text-start">Book A free Demo</h1> -->
                    <form @submit.prevent="submitQuery()" class="mt-3 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">First name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
                            <label class="ms-2 text-muted">Email.</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No.</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="Mobile" v-model="businessName"
                                required>
                            <label class="ms-2 text-muted">Business Name.</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Notes.</label>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-danger py-2 fs-5 w-100" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'RequestDemo',
    data() {
        return {
            title: "Why Choose Us",
            test: [
                "We will get to know first your exact requirements.",
                "Arrange your live and personalized demo of SalesWik.",
                "Explian you how SalesWik can help you to grow your business.",
                "Q&A session with our product expert.",
                "In-depth explanation of pricing and features.",
            ],
            name: "",
            email: "",
            number: "",
            businessName: "",
            note: "",
        }
    }
}
</script>
<style scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.container {
    animation: fadeIn 1.5s ease-in-out;
}
</style>