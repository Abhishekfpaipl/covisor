<template>
    <div class="my-3 py-3">
        <div class="container">
            <div class="py-2 mb-5">
                <h1 class="text-center text-capitalize">{{ title }}</h1>
                <small class="text-capitalize">Helping Businesses in All Domains</small>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col" v-for="(lead, index) in values" :key="index">
                    <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                        <div class="card position-relative w-100 p-3 d-flex flex-column bg-light"
                            style="color: var(--bg-primary);">
                            <div class="image">
                                <i class="bi" :class="lead.icon"></i>
                                <p class="ms-2 fw-bold text-uppercase">{{ lead.title }}</p>
                            </div>
                            <div class="content">
                                <p>{{ lead.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "LeadManagement",
    props:['values','title'],
}
</script>
<style scoped>
/* .container {
    position: relative;
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
  } */
.card:hover {
    background-color: var(--bg-primary) !important;
    color: white !important
}

.content {
    color: white !important
}

.card {
    /* position: relative; */
    /* width: 100%; */
    max-width: 300px;
    /* background-color: #fff; */
    /* margin: 20px; */
    /* padding: 20px 15px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); */
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
}

.container .card .image {
    position: relative;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); */
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.container .card .image img {
    max-width: 100%;
    border-radius: 15px;
}

.container .card .content {
    position: relative;
    /* padding: 10px 15px; */
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    max-height: 200px;
    /* Adjust this value as needed */
    transition-delay: 0.2s;
}

.container .card:hover .image {
    transform: translateY(-10px);
}

/* @media (max-width: 768px) {
    .container .card { 
        max-width: 100%;
    }
    .container .card .image {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .container .card .image {
        max-width: 100%;
    }
} */

/* @keyframes fadeIn {
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
} */
</style>
