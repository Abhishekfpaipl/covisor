<template>
    <div class="my-3 py-3" style="background-color: var(--bg-forth);">
        <div class="container p-md-5 p-3">
            <h1 class="text-center text-capitalize">Frequently asked questions</h1>
            <small>Take advantage of curated questions and answers frequently asked by the visitors & business.</small>
            <div class="row row-cols-1 row-cols-md-2 g-2 mt-5">
                <div class="col" v-for="(question, index) in questions" :key="index">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed border-bottom fw-bold" type="button"
                                    data-bs-toggle="collapse" :data-bs-target="'#collapseTwo' + question.id"
                                    aria-expanded="false" :aria-controls="'collapseTwo' + question.id">
                                    {{ question.question }}
                                </button>
                            </h2>
                            <div :id="'collapseTwo' + question.id" class="accordion-collapse collapse"
                                data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body text-start">{{ question.answer }}</div>
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
    name: 'FaqSection',
    data() {
        return {
            questions: [
                {
                    id: 1,
                    question: "Q1. Can i make whatsApp communication from saleswik CRM?",
                    answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
                },
                {
                    id: 2,
                    question: "Q2. Is Saleswik CRM gives alert of timely followups?",
                    answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
                },
                {
                    id: 3,
                    question: "Q3. Can I sync my call log leads to saleswik CRM?",
                    answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
                },
                {
                    id: 4,
                    question: "Q4. Is my data secured at saleswik CRM?",
                    answer: "Yes, your data is completely safe, and important credentails are encripted."
                },
                {
                    id: 5,
                    question: "Q5. Can i sync leads form my website to saleswik?",
                    answer: "Yes, we have API based solutions for all your lead sources and its sync leads in runtime."
                },
                {
                    id: 6,
                    question: "Q6. Can i manage my accounts at saleswik CRM?",
                    answer: "Yes, you can manage your PO, proforma & Tax invoices. You can also manage your credit payment followups & AMC renewal."
                },
            ]
        }
    }
}
</script>

<style>
.accordion-button:not(.collapsed) {
    color: black !important;
    background-color: white !important;
    box-shadow: none !important;
}

.accordion {
    --bs-accordion-btn-focus-box-shadow: none !important;
}

/* .accordion-button:not(.collapsed) {
    background-color: var(--bg-primary) !important;
    color:white !important 
} 
.accordion-collapse.show {
    background-color: white;
    color: black !important; 
} */
</style>