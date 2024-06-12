<template>
    <div class="d-flex justify-content-center align-items-center"
        style="background-image: url('/img/mobiledark.png'); height: 100vh; width: 100vw;">
        <div class="card" style="min-width: 18rem; height: 30rem;">
            <div class="card-body">
                <h5 class="card-title">Registration Form</h5>

                <div>
                    <div v-if="currentStep === 1">
                        <div class="bg-primary text-white p-3 rounded my-3">
                            <div v-if="loadingText" class="d-flex flex-column justify-content-center">
                                <i class="bi bi-robot me-2 fs-1"></i>
                                <div class="loader">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div v-else class="d-flex flex-column">
                                <i class="bi bi-robot fs-1"></i>
                                <div class="fw-bold fs-5 text-wrap" style="width: 18rem;">
                                    <text-typing :fullText="'What is your name / Business name?'" />
                                </div>
                            </div>
                        </div>
                        <textarea name="" v-model="name" class="form-control bg-light"
                            style="max-height: 100px !important;" placeholder="Type your answer..."
                            @keyup.enter="nextStep"></textarea>
                        <!-- <input type="text" /> -->
                    </div>
                    <div v-if="currentStep === 2">
                        <div class="bg-primary text-white p-3 rounded my-3">
                            <div v-if="loadingText" class="d-flex flex-column justify-content-center">
                                <i class="bi bi-robot me-2 fs-1"></i>
                                <div class="loader">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div v-else class="d-flex flex-column">
                                <i class="bi bi-robot fs-1"></i>
                                <div class="fw-bold fs-5 text-wrap" style="width: 18rem;">
                                    <text-typing :fullText="'What is your email address?'" />
                                </div>

                            </div>
                        </div>
                        <textarea name="" v-model="email" class="form-control bg-light"
                            style="max-height: 100px !important;" placeholder="Type your answer..."
                            @keyup.enter="nextStep"></textarea>
                        <!-- <input type="email" v-model="email" class="form-control" @keyup.enter="nextStep" /> -->
                    </div>
                    <div v-if="currentStep === 3">
                        <div class="bg-primary text-white p-3 rounded my-3">
                            <div v-if="loadingText" class="d-flex flex-column justify-content-center">
                                <i class="bi bi-robot me-2 fs-1"></i>
                                <div class="loader">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div v-else class="d-flex flex-column">
                                <i class="bi bi-robot fs-1"></i>
                                <div class="fw-bold fs-5 text-wrap" style="width: 18rem;">
                                    <text-typing :fullText="'What is your phone number?'" />
                                </div>

                            </div>
                        </div>
                        <textarea name="" v-model="phone" class="form-control bg-light"
                            style="max-height: 100px !important;" placeholder="Type your answer..."
                            @keyup.enter="nextStep"></textarea>
                        <!-- <input type="text" v-model="phone" class="form-control" @keyup.enter="submitForm" /> -->
                    </div>
                    <!-- <div v-if="formSubmitted">
                        <div class="bg-success rounded my-3"></div>
                        <p class="animated-text">Thank you for registering!</p>
                    </div> -->
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <button class="btn btn-secondary" @click="prevStep" :disabled="currentStep === 1">Back</button>
                <button class="btn btn-success" @click="nextStep" v-if="currentStep < 3">Next</button>
                <button class="btn btn-success" @click="submitForm" v-if="currentStep === 3">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import TextTyping from '@/components/TextTyping.vue';

export default {
    name: "DemoPage2",
    data() {
        return {
            currentStep: 1,
            name: '',
            email: '',
            phone: '',
            formSubmitted: false,
            buffering: true,
            loadingText: true,
        };
    },
    components: {
        TextTyping,
    },
    watch: {
        currentStep() {
            this.showBuffering();
        },
    },
    methods: {
        showBuffering() {
            // this.buffering = true;
            this.loadingText = true;
            // setTimeout(() => {
            //   this.buffering = false;
            setTimeout(() => {
                this.loadingText = false;
            }, 2000); // Adjust the duration of the typing animation as needed
            // }, 2000); // Adjust the duration of the buffering animation as needed
        },
        nextStep() {
            if (this.currentStep < 3) {
                this.currentStep += 1;
            }
        },
        prevStep() {
            if (this.currentStep > 1) {
                this.currentStep -= 1;
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
            this.$router.push('/thank-you')
        },
    },
    mounted() {
        this.showBuffering();
    },
};
</script>

<style scoped>
.loader {
    text-align: center;
}

.loader span {
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    /* Replaced @dotSize with direct value */
    height: 10px;
    /* Replaced @dotSize with direct value */
    background: white;
    border-radius: 20px;
    /* Replaced @dotSize with direct value */
    animation: loader 0.8s infinite alternate;
    /* Replaced @animationTime with direct value */
}

.loader span:nth-of-type(2) {
    animation-delay: 0.2s;
}

.loader span:nth-of-type(3) {
    animation-delay: 0.6s;
}

@keyframes loader {
    0% {
        opacity: 0.9;
        transform: scale(0.5);
    }

    100% {
        opacity: 0.1;
        transform: scale(1);
    }
}

.animated-text {
    animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
    /* white-space: nowrap;
    overflow: hidden;
    width: 100%; */
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
        border-color: white;
    }
}
</style>