<!-- RegistrationForm.vue -->
<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Registration Form</h5>
                <div v-if="currentStep === 1">
                    <div class="bg-primary animated-text">
                        <p class="p-2 border text-white mb-0">What is your name?
                        </p>
                    </div>
                    <input type="text" v-model="name" class="form-control" @keyup.enter="nextStep" />
                    <button class="btn btn-danger">Next Step</button>
                </div>
                <div v-if="currentStep === 2" class="animated-text">
                    <p>What is your email address?</p>
                    <input type="email" v-model="email" class="form-control" @keyup.enter="nextStep" />
                </div>
                <div v-if="currentStep === 3" class="animated-text">
                    <p>What is your phone number?</p>
                    <input type="text" v-model="phone" class="form-control" @keyup.enter="submitForm" />
                </div>
                <div v-if="formSubmitted" class="animated-text">
                    <p>Thank you for registering!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentStep: 1,
            name: '',
            email: '',
            phone: '',
            formSubmitted: false,
        };
    },
    methods: {
        nextStep() {
            if (this.currentStep < 3) {
                this.currentStep += 1;
            }
        },
        submitForm() {
            this.formSubmitted = true;
            // Handle form submission logic here
            console.log({
                name: this.name,
                email: this.email,
                phone: this.phone,
            });
        },
    },
};
</script>

<style scoped>
.animated-text {
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    white-space: nowrap;
    overflow: hidden;
    /* border-right: 4px solid; */
    width: 100%;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}

@keyframes blink-caret {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: black;
    }
}
</style>