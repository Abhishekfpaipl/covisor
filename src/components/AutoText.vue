<template>
    <div>
        <div class="text-white p-3 rounded mb-3">
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
                <div class="fw-bold fs-5 text-wrap">
                    <text-typing
                        :fullText="'Hello, Welcome to SOVISOR, Yes we are providing all tech solutions for your business'" />
                    <AutoTypeDelete v-if="show" :texts="services" :typingSpeed="100" :deleteSpeed="50" :delay="500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextTyping from '@/components/TextTyping.vue';
import AutoTypeDelete from '@/components/AutoTypeDelete.vue';

export default {
    name: "DemoPage2",
    data() {
        return {
            loadingText: true, 
            services: [
                'Graphic designing',
                'B2B ecommerce development',
                'B2C ecommerce development',
                'Software development',
                'Website development',
                'Digital marketing'
            ],
            show: false,
        };
    },
    components: {
        TextTyping,
        AutoTypeDelete
    },
    methods: {
        showNextText() {
            setTimeout(() => {
                this.loadingText = true; 
                this.loadingText = false;
            }, 2000);
        },
        showAuto() {
            setTimeout(() => {
                this.show = true;
            }, 11000); // Adjust timing as needed
        },
    },
    mounted() {
        // Start showing the initial text
        this.showNextText();
        // Automatically show TestComp after a delay
        this.showAuto();
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
    height: 10px;
    background: white;
    border-radius: 20px;
    animation: loader 0.8s infinite alternate;
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