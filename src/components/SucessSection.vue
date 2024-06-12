<template>
    <div>
        <div class="my-5">
            <div class="heading d-flex justify-content-center text-center pt-4">
                <p class="fs-1">Success Stories of Our Partners</p>
            </div>
            <div class="w-100 d-block ">
                <div class="w-100 overflow-auto d-flex align-items-center hide-scroll" ref="slider">
                    <div v-for="(review, index) in infiniteReviews" :key="index" @click="showUser(review, index)"
                        class="btn rounded-circle m-2 mx-3 d-flex" :class="{ selectedDiv: isSelected(review.id) }">
                        <img :src="review.imgr" alt="User Image">
                    </div>
                </div>
                <div>
                    <div class="text-center">
                        <p class="my-1 fw-bold fs-3">{{ selectedReviewData.name }}</p>
                        <p class="my-1">{{ selectedReviewData.company }}</p>
                        <ReviewRating :rating="selectedReviewData.rating" />
                    </div>
                    <div class="text d-flex justify-content-center text-center">
                        <!-- <i class="bi bi-chat-quote-fill"></i> -->
                        <p class="w-75 fs-4">" {{ getSelectedReviewText }} "</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import ReviewRating from "@/components/ReviewRating.vue"
export default {
    name: 'SucessSection',
    components: {
        ReviewRating,
    },
    data() {
        return {
            selectedReview: 0,
            reviews: [
                {
                    id: 1,
                    show: false,
                    imgr: 'img/users/1.png',
                    name: 'Ram',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
                },
                {
                    id: 2,
                    show: false,
                    imgr: 'img/users/2.png',
                    name: 'Shyam',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
                },
                {
                    id: 3,
                    show: false,
                    imgr: 'img/users/3.png',
                    name: 'Nikhil',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
                },
                {
                    id: 4,
                    show: false,
                    imgr: 'img/users/4.png',
                    name: 'Abhishek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
                },
                {
                    id: 5,
                    show: false,
                    imgr: 'img/users/5.png',
                    name: 'Rajan',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
                },
                {
                    id: 6,
                    show: false,
                    imgr: 'img/users/3.png',
                    name: 'Yogesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
                },
                {
                    id: 7,
                    show: false,
                    imgr: 'img/users/2.png',
                    name: 'Lokesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
                },
                {
                    id: 8,
                    show: false,
                    imgr: 'img/users/1.png',
                    name: 'Bhasker',
                    company: 'XYz Pvt Ltd',
                    rating: '3.5',
                    text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
                },
                {
                    id: 9,
                    show: false,
                    imgr: 'img/users/4.png',
                    name: 'Vivek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
                },
                {
                    id: 10,
                    show: false,
                    imgr: 'img/users/5.png',
                    name: 'Ankit',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
                },
                {
                    id: 11,
                    show: false,
                    imgr: 'img/users/2.png',
                    name: 'Karan',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
                },
                {
                    id: 12,
                    show: false,
                    imgr: 'img/users/1.png',
                    name: 'Rajat',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
                },
                {
                    id: 13,
                    show: false,
                    imgr: 'img/users/4.png',
                    name: 'Ajay',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
                },
                {
                    id: 14,
                    show: false,
                    imgr: 'img/users/2.png',
                    name: 'Vikas',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
                },
            ],
        };
    },
    computed: {
        infiniteReviews() {
            const reviews = this.reviews.slice();
            return reviews.concat(reviews);
        },
        getSelectedReviewText() {
            return this.infiniteReviews[this.selectedReview].text;
        },
        selectedReviewData() {
            return this.infiniteReviews[this.selectedReview];
        }
    },
    mounted() {
        this.reviews[this.selectedReview].show = true;
        this.scrollToCenter();
    },
    methods: {
        isSelected(clickedReviewId) {
            return clickedReviewId === this.infiniteReviews[this.selectedReview].id;
        },
        showUser(review, reviewIndex) {
            this.selectedReview = reviewIndex;
            let userIndex = this.reviews.indexOf(review);
            this.reviews.forEach(user_review => {
                user_review.show = false
            });
            this.reviews[userIndex].show = true
            this.scrollToCenter();
        },
        scrollToCenter() {
            const slider = this.$refs.slider;
            const selectedElement = slider.children[this.selectedReview];
            const scrollLeft =
                selectedElement.offsetLeft - (slider.offsetWidth - selectedElement.offsetWidth) / 1.8;
            slider.scrollLeft = scrollLeft;
        },
    }
}
</script>

<style scoped>
/* Your existing styles */
</style>


<style scoped>
.btn.selectedDiv {
    border: 2px solid red;
}

img {
    width: 80px;
    height: 80px;
}

.btn.selectedDiv img {
    width: 120px !important;
    height: 120px !important;
}

.btn {
    --bs-btn-padding-x: 5px;
    --bs-btn-padding-y: 5px;
}

#style-4 {
    scroll-behavior: smooth;
    overflow-x: scroll;
}

#style-4::-webkit-scrollbar {
    display: none;
}

.hide-scroll {
    overflow-x: hidden;
}

::-webkit-scrollbar {
    width: 10px;
    /* Width of the scrollbar */
}

::-webkit-scrollbar-track {
    background: #ffffff;
    /* Color of the scrollbar track */
}

::-webkit-scrollbar-thumb {
    background: rgb(134, 132, 132)4f4;
    /* Color of the scrollbar thumb */
    border-radius: 5px;
    /* Rounded corners of the thumb */
    width: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #f5e5e5;
    width: 10px;
}
</style>
