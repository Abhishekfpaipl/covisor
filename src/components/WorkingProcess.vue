<template>
    <div class="container">
        <h2 class="text-center mb-4">How It Work</h2>
        <h3 class="text-center mb-4">Our Working Process</h3>
        <div class="row justify-content-center">
            <div v-for="(process, index) in processes" :key="index" class="col-1 col-md-3">
                <div class="position-relative d-flex justify-content-center align-items-center rounded-circle border shadow" style="width: 270px;height: 270px;">
                    <div class="d-flex flex-column justify-content-center align-items-center rounded-circle border" style="width: 230px;height: 230px">
                        <h4 class="my-1">{{ process.title }}</h4>
                        <small class="">{{ process.description }}</small>
                        </div>
                    <div class="position-absolute rounded-circle d-flex justify-content-center align-items-center border bg-danger" style="width:70px;height:70px;top: 10px;right: 25px;">0{{ index + 1 }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkingProcess',
    data() {
        return {
            processes: [
                {
                    id: 1,
                    title: 'Plan & research',
                    description: 'Find Sources, Evaluate Sources, Establish a Working'
                },
                {
                    id: 2,
                    title: 'Design & Development',
                    description: 'Breaking a market into segments & customers whose desires'
                },
                {
                    id: 3,
                    title: 'Testing & Lunching',
                    description: 'Results are the specific actions to prevent future problems.'
                }
            ]
        }
    }
}
</script>

<style scoped>
.text-purple {
    color: #6f42c1;
}
</style>