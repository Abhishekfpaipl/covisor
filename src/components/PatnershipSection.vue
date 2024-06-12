<template>
    <div>
        <div class="container text-center my-5">
            <div class="py-2">
                <h1 class="text-center">Features, that boost your attention!</h1>
                <small class="text-capitalize">A simple <span class="text-uppercase">crm</span> that grows with your
                    business</small>
            </div>
            <div class="row m-0 gy-2 text-center">
                <div v-for="(text, index) in texts" :key="index" class="col-6 col-xl-4">
                    <div class="card fs-6 p-3 my-card text-decoration-none">
                        {{ text.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'PatnershipSection',
    data() {
        return {
            texts: [
                { name: 'Comprehensive pipeline management', },
                { name: 'Workflow automation', },
                { name: 'Full-fledged email communication', },
                { name: 'Built-in telephony', },
                { name: 'WhatsApp communication', },
                { name: 'Customizable dashboards', },
            ]
        }
    }
}
</script>
<style scoped>
.my-card {
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.my-card:hover {
    color: red;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>