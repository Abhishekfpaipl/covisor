<template>
    <div> 
        <div class="container-fluid text-white">
            <div class="row py-5" style="background-color:var(--bg-primary)">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <div class="" style="width:1000px; max-width:70%">
                        <img src="img/sales-banner.png" class="w-100" >
                    </div>
                </div>
                <div class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-md-start align-items-center"> 
                        <div class="text-start mt-5 mt-md-0"> 
                            <p class="fs-1 fw-bold m-0 ">SalesWik</p>
                        </div>
                        <h3 class="mt-3">Streamline Your Lead Management.</h3>
                        <small class="">Convert curious prospects into loyal customers</small>
                        <div class="mt-5 text-center text-md-start">
                            <p class="my-1">Capture leads from multiple sources.</p>
                            <p class="my-1">Properly nurture each lead.</p>
                            <p class="my-1">Maximize lead conversion.</p>
                            <p class="my-1">Boost sales and productivity.</p>
                        </div> 
                        <RouterLink to="/">
                            <div class="btn my-4 fs-5 fw-bold text-white btn-danger" >
                                Get Started 
                            </div>
                        </RouterLink>
                        <a href="#second"><i class="bi bi-chevron-down fs-1" style="color:var(--bg-tertiary)"></i></a> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BannerComp',
}
</script>
<style lang="">

</style>