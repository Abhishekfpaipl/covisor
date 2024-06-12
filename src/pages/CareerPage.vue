<template>
    <div>
        <div class="text-center fw-bold py-5 text-white" style="background-color: var(--bg-primary);">
            <p class="fs-1 mb-0">Career</p>
            <p class="fs-5">LOOKING FOR A CAREER, JOIN US !</p>
        </div>
        <div class="container py-5 rounded-top-5 bg-white" style="margin-top: -40px;">
            <div class="row">
                <div class="col-12 col-md-6">
                    <form @submit.prevent="loginAccount()">
                        <div class="p-2 form-floating">
                            <input type="text" class="form-control" placeholder="First Name" v-model="mobile">
                            <label for="floatingInput" class="ms-2 text-muted">First Name</label>
                        </div>
                        <div class="p-2 form-floating">
                            <input type="text" class="form-control" placeholder="Business Name" v-model="email">
                            <label for="floatingInput" class="ms-2 text-muted">Business Name</label>
                        </div>
                        <div class="p-2 form-floating">
                            <input type="number" class="form-control" placeholder="Phone No." v-model="number">
                            <label for="floatingInput" class="ms-2 text-muted">Phone No</label>
                        </div>
                        <div class="p-2 form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Notes</label>
                        </div>
                        <button class="btn btn-danger text-capitalize">send message</button>
                    </form>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div v-for="(data, index) in works" :key="index" class="col-12">
                            <div class="d-flex align-items-center border my-2">
                                <div class="p-3">
                                    <i :class="data.icon"></i>
                                </div>
                                <span class="fw-bold">{{ data.heading }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-white py-5" style="background-color: var(--bg-primary);">
            <h3 class="text-center ">Our Core Values</h3>
            <p class="text-center container">
                One thing that we've tried to keep consistent through all these years is our core set of values and
                beliefs.
                They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                values
                in
                everything we do - from the littlest of things to the biggest of decisions.
            </p>
        </div>
        <div class="container my-5">
            <div class="p-2 row">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                    <div class="d-flex align-items-center border p-2">
                        <img :src="data.icon" :alt="data.name" style="width: 8%; filter: grayscale(1);" class="mx-3">
                        <div class=" ms-2">
                            <span class="fw-bold">{{ data.heading }}</span>
                            <p>{{ data.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterBar />

    </div>
</template>

<script>
import FooterBar from '@/components/FooterBar.vue'
export default {
    name: 'CareerPage',
    components: {
        FooterBar
    },
    data() {
        return {
            datas: [
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/think different.svg',
                    heading: 'Think Different',
                    text: 'Random ideas, new suggestions, and challenging the norm are always welcome.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/ownership of work.svg',
                    heading: 'Stay Weird, Be Yourself',
                    text: 'The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/respect everyone.svg',
                    heading: 'Respect Everyone',
                    text: 'Treat others how you’d like to be treated, and you have a happy family.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/Growth and learning.svg',
                    heading: 'Ownership Of Work',
                    text: 'Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/stay weird.svg',
                    heading: 'Take Initiative',
                    text: 'Want to change something? Change it. See something that needs fixing? Fix it.'
                },
                {
                    icon: 'https://tss-static-images.gumlet.io/career-revamp/take initiative.svg',
                    heading: 'Growth & Learning',
                    text: 'Work with various teams and departments and learn something new every day.'
                },
            ],
            works: [
                {
                    icon: 'bi bi-currency-rupee fs-3',
                    heading: 'Competitive Salary'
                },
                {
                    icon: 'bi bi-bounding-box fs-3',
                    heading: 'Open Office Culture'
                },
                {
                    icon: 'bi bi-graph-up-arrow fs-3',
                    heading: 'Fast Growing Startup'
                },
                {
                    icon: 'bi bi-diagram-2 fs-3',
                    heading: 'Equal Opportunities'
                },
            ],
            mobile: '',
            email: '',
            number: '',
            note: ''
        }
    },
    methods: {
        loginAccount() {
            console.log(this.mobile, this.email, this.number, this.note)
        }
    }

}
</script>

<style lang="scss" scoped></style>