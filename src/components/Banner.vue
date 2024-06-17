<template>
    <div style="background-color:var(--bg-primary);">
        <!-- <div class="container-fluid text-white">
            <div class="row py-5" style="background-color:var(--bg-primary);">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div class="" style="width:1000px; max-width:70%">
                        <img src="/img/sales-banner.png" class="w-100">
                    </div>
                </div>
                <div class="px-0 col-12 col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center">
                        <div class="text-start mt-5 mt-md-0">
                            <p class="fs-1 fw-bold m-0 ">Sovisor</p>
                        </div>
                        <h3 class="mt-3">Solutions for business.</h3>
                        <small class="">Convert curious prospects into loyal customers</small>
                        <div class="mt-5 text-center text-md-start">
                            <p class="my-1">Capture leads from multiple sources.</p>
                            <p class="my-1">Properly nurture each lead.</p>
                            <p class="my-1">Maximize lead conversion.</p>
                            <p class="my-1">Boost sales and productivity.</p>
                        </div>
                        <RouterLink to="/">
                            <div class="btn my-4 fs-5 fw-bold text-white btn-danger">
                                Get Started
                            </div>
                        </RouterLink>
                        <a href="#second"><i class="bi bi-chevron-down fs-1" style="color:var(--bg-tertiary)"></i></a>
                </div>
            </div>
        </div> -->

        <div class="container">
            <div class="row d-flex align-items-center justify-content-center p-md-5 p-3">
                <AutoText />
                <!-- <div class="">
                    <h3 class="text-white text-uppercase mb-0">Welcome to sovisor</h3>
                    <small class="text-white">Solutions for business</small>
                    <div class="bg-danger text-white text-capitalize fs-5 fw-bold mb-0">
                        we are providing
                    </div>
                </div> -->
                <div class="col-12 col-md-6 align-items-center text-center text-md-start">
                    <img src="/img/formwelcome.svg" class="mt-3" style="width: 350px;max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 d-flex flex-column mt-5 mt-md-3">
                    <h3 class="text-white text-capitalize">Request a demo</h3>
                    <form @submit.prevent="submitQuery()" class="mt-3 row g-3 needs-validation" novalidate>
                        <div class="w-100 form-floating mt-2">
                            <input type="text" class="form-control" placeholder="" v-model="name" required>
                            <label for="floatingInput" class="text-muted ms-2">Your Name</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <input type="tel" class="form-control" placeholder="Mobile" v-model="number" required>
                            <label class="ms-2 text-muted">Mobile No</label>
                        </div>
                        <div class="w-100 form-floating mt-2">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Services Required</label>
                        </div>

                        <div class="col-12">
                            <button class="btn btn-warning py-2 fs-5 w-100" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoText from "@/components/AutoText.vue"
export default {
    name: 'BannerComp',
    components:{
        AutoText
    }
}
</script>
<style lang="">

</style>