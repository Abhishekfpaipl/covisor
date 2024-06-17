<template>
    <div class="container  py-2">
        <div class="row align-items-center">
            <div v-if="imagePosition === 'left'" class="col-md-6">
                <img :src="imageSrc" class="img-fluid" style="height: 250px;" alt="Image">
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
                <h3 class="text-start mb-3 text-capitalize">{{ title }}</h3>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div v-for="(faq, index) in faqs" :key="index" class="accordion-item my-2 border-0">
                        <h2 class="accordion-header border">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                                :aria-controls="'flush-collapseOne' + index">
                                <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                            </button>
                        </h2>
                        <div :id="'flush-collapseOne' + index" class="accordion-collapse collapse border-0"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body text-start">{{ faq.answer }}</div>
                        </div>
                    </div>
                </div>

            </div>
            <div v-if="imagePosition === 'right'" class="col-md-6">
                <img :src="imageSrc" class="img-fluid" style="height: 250px;" alt="Image">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        faqs: {
            type: Array,
            required: true
        },
        imagePosition: {
            type: String,
            default: 'left',
            validator: function (value) {
                return ['left', 'right'].includes(value.toLowerCase());
            }
        }
    }
};
</script>

<style>
/* Add Bootstrap styles here if needed */
</style>