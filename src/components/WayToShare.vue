<template>
    <div class="my-3 py-3">
        <div class="container text-center">
            <h1>So many ways to share</h1>
            <small>Your digital business card, your choice... <br> Saleswik provides you with the most sharing options on
                the
                planet.</small>
        </div>

        <div class="container">
            <div class="row row-cols-2 row-cols-md-4 row-cols-xl-6">
                <div class="col d-flex justify-content-center my-3" v-for="(way, index) in ways" :key="index">
                    <div class="card" >
                        <div class="text-center card-body">
                            <img :src="way.image" class="card-img-top" style="width: 50px;" alt="image">
                            <!-- <i class="bi fs-4" :class="way.icon"></i> -->
                            <h5 class="card-title">{{ way.title }}</h5>
                            <!-- <p v-if="way.text" class="card-text">{{ way.text }}</p> -->
                            <!-- <span v-if="way.link" class="btn btn-primary">{{ way.link }}</span> -->
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "WayToShare",
    data() {
        return {
            // images: [
            //     "https://popl.co/cdn/shop/files/get-the-app-qr-code.png?v=1692803358&width=300",
            //     "https://popl.co/cdn/shop/files/iphone-widgets.png?v=1692803358&width=300",
            //     "https://popl.co/cdn/shop/files/namedrop.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/text-your-link.png?v=1692803597&width=300",
            //     "https://popl.co/cdn/shop/files/wallet-and-apple-watch.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/email-signatures.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/virtual-backgrounds.png?v=1692803596&width=300",
            //     "https://popl.co/cdn/shop/files/popl-accessories.png?v=1692803596&width=300"
            // ]
            ways: [
                {
                    title: "Bharatke",
                    image: "img/share/Bharatke.jpg",
                    // link: "Get the app"
                },
                {
                    title: "Facebook",
                    image: "img/share/facebook.png",
                    // link: ""
                },
                {
                    title: "Instagram",
                    image: "img/share/insta.png",
                    // link: ""
                },
                {
                    title: "LinkedIn",
                    image: "img/share/linkedin.png",
                    // link: ""
                },
                {
                    title: "Pinterest",
                    image: "img/share/pinterest.png",
                    // link: ""
                },
                {
                    title: "Telegram",
                    image: "img/share/telegram.png",
                    // link: ""
                },
                {
                    title: "Twitter",
                    image: "img/share/twitter.png",
                    // link: ""
                },
                {
                    title: "WhatsApp",
                    image: "img/share/whatsapp.png",
                    // link: "Shop now"
                },
                {
                    title: "Youtube",
                    image: "img/share/Youtube.jpg",
                    // link: "Shop now"
                },
                {
                    title: "JustDial",
                    image: "img/share/justdial.png",
                    // link: "Shop now"
                },
                {
                    title: "India Mart",
                    image: "img/share/indiamart.png",
                    // link: "Shop now"
                },
            ]
        }
    }
}
</script>
<style lang="">

</style>