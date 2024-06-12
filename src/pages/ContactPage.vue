<template>
    <div class="">
        <div class="text-white py-5" style="background-color: var(--bg-primary); padding-bottom: 6rem !important;">
            <h1 class="text-center mb-0 fw-bold">Contact Page</h1>
            <small class="text-capitalize">The secret of getting ahead, is getting started</small>
        </div>
        <div class="container bg-white rounded-top-5" style="margin-top: -40px;">
            <div class="row p-3">
                <div class="col-12 col-md-6 pt-4">
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
                <div class="col-12 col-md-6 mt-5 mt-md-0 pt-4" style="color: var(--bg-primary) !important;">
                    <h1 class="text-uppercase my-3">We Believe</h1>
                    <p class="text-capitalize fs-5 fw-bold">"If you don't take care of your customers, <br> your
                        competitors
                        will do!"</p>
                    <h1 class="text-uppercase cutout my-3"><span>So Relax </span></h1>
                    <p class="text-capitalize fs-5 fw-bold">"let's build an awesome business together <br>We will take
                        care of
                        you !"</p>
                </div>

            </div>
        </div>
        <div class="container-fluid mt-5 py-5" style="background-color: var(--bg-forth);">
            <div class="row">
                <h1 class="text-uppercase mb-4">Need to get in touch with us?</h1>
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img src="img/contactus.svg" style="width: 500px; max-width: 80%;" alt="">
                </div>
                <div class="col-12 col-md-6 mt-5 mt-md-0 ">
                    <div class="row row-cols-1">
                        <div v-for="(icon, index) in contact" :key="index" class="col py-2"
                            @click="handleIconClick(icon.action)">
                            <div class="d-flex justify-content-center align-items-center border p-2 ">
                                <a class="text-white" :href="icon.url" target="_blank">
                                    <i :class="icon.icon" :style="'color:' + icon.color"></i>
                                </a>
                                <p class="text-start ms-2 fw-bold mb-0">{{ icon.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="container my-5">

            <h1 class="text-capitalize my-5">Follow us on</h1>
            <div class="row row-cols-4">
                <div v-for="(contact, index) in folows" :key="index" class="col py-2">
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="rounded-circle border d-flex align-items-center justify-content-center"
                            style="width: 60px; height: 60px;">
                            <a class="text-white" :href="contact.url" target="_blank">
                                <i :class="contact.icon" :style="'color:' + contact.color"></i>
                            </a>
                        </div>
                    </div>
                    <p class="text-center mt-2 fw-bold">{{ contact.name }}</p>
                </div>
            </div>
        </div>
    </div>
    <FooterBar />
</template>

<script>
import FooterBar from '@/components/FooterBar.vue';

export default {
    name: "ContactPage",
    components: { FooterBar },
    data() {
        return {
            contact: [
                { name: 'support@covisor.in', icon: 'bi-envelope fs-3', color: 'red', action: 'openEmail' },
                { name: '8860012001', icon: 'bi-telephone-fill fs-3', color: 'black', action: 'openDialer' },
                // { name: 'Business', icon: 'bi-building fs-5', action: '' },
                { name: '8860012001', icon: 'bi-whatsapp fs-3', color: 'green', action: 'openWhatsapp' },
                { name: 'Block B1/632, Janakpuri, Delhi', icon: 'bi-geo-fill fs-3', color: 'black', action: 'openMaps' },
                // { name: 'Query', icon: 'bi-question-circle fs-5', action: 'openQuery' },
            ],
            folows: [
                {
                    icon: 'bi bi-facebook fs-3',
                    name: 'Facebook',
                    color: 'blue',
                    url: 'https://www.facebook.com/yourpage'
                },
                {
                    icon: 'bi bi-twitter-x fs-3',
                    name: 'Twitter',
                    color: 'black',
                    url: 'https://www.instagram.com/yourprofile'
                },
                {
                    icon: 'bi bi-youtube fs-3',
                    name: 'YouTube',
                    color: 'red',
                    url: 'https://www.youtube.com/'
                },
                {
                    icon: 'bi bi-linkedin fs-3',
                    name: 'LinkedIn',
                    color: 'blue',
                    url: 'https://www.linkedin.com/in/yourprofile'
                },
            ],
            mobile: '',
            email: '',
            number: '',
            note: '',
        }
    },
    methods: {
        loginAccount() {
            console.log(this.mobile, this.email, this.number, this.note)
        }
    }
}
</script>

<style scoped>
.so-relax {
    position: relative;
    text-align: center;
    /* margin: 20px 0; */
}

.so-relax::before,
.so-relax::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background: black;
}

.so-relax::before {
    left: 0;
}

.so-relax::after {
    right: 0;
}
</style>
