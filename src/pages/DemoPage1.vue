<template>
    <div class="pb-5 d-flex justify-content-center align-items-center" style="background-color:var(--bg-primary); width: 100vw;height: 100vh;">
        <div class="container">
            <div class="d-flex justify-content-center align-items-center">
                <div class="card p-3 py-5 mt-5 shadow d-flex flex-column justify-content-between align-items-center" style="max-width: 20rem; min-height:30rem;background-color: #ffffff47 !important">
                    <h1 class="text-center text-white text-capitalize">Demo 1</h1>
                    <form @submit.prevent="register()" class="mt-3 row g-3 needs-validation flex-grow-1" novalidate>
                        <div class="w-100 mt-2">
                            <input type="text" class="form-control border-0 border-bottom rounded-0 px-2 bg-transparent" placeholder="Name" v-model="name" required>
                        </div>
                        <div class="w-100 mt-2">
                            <input type="text" class="form-control border-0 border-bottom rounded-0 px-2 bg-transparent" placeholder="Email" v-model="email" required>
                        </div>
                        <div class="w-100 mt-2">
                            <input type="number" class="form-control border-0 border-bottom rounded-0 px-2 bg-transparent" placeholder="Mobile No." v-model="number" required>
                        </div>
                        <div class="w-100 mt-2 mb-auto">
                            <textarea name="" class="form-control border-0 border-bottom rounded-0 px-2 bg-transparent" placeholder="Note." v-model="note"></textarea>
                        </div>
                        <div class="col-12 align-self-end">
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
    name: 'DemoPage1',
    data() {
        return {
            name: '',
            email: '',
            number: '',
            note: '',
        }
    },
    methods: {
        register() {
            console.log(this.name, this.email, this.number, this.note);
            this.$router.push('/thank-you')
        }
    }
}
</script>
