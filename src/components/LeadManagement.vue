<template>
    <div class="my-3 py-3">
        <div class="container">
            <div class="py-2 mb-5">
                <h1 class="text-center">Industries we work for</h1>
                <small class="text-capitalize">Helping Businesses in All Domains</small>
            </div>
            <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-3">
                <div class="col" v-for="(lead, index) in values" :key="index">
                    <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
                        <div class="card position-relative w-100 p-3 d-flex flex-column bg-light"
                            style="color: var(--bg-primary);">
                            <div class="image">
                                <i class="bi" :class="lead.icon"></i>
                                <p class="ms-2 fw-bold text-uppercase">{{ lead.title }}</p>
                            </div>
                            <div class="content">
                                <p>{{ lead.description }}</p>
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
    name: "LeadManagement",
    data() {
        return {
            leads: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Web applications",
                    description: "There are basic Internet presence websites which provide information about the company, its products and services offered. In a number of cases, this information does not change very frequently and hence we create, what we call, static / HTML presence websites.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "E commerce websites",
                    description: "We don't just develop your eCommerce store, We scale your Business profit through continuous improvements and reinforcements and market trends.E-Commerce has been the de facto standard for shopping online in this era of development and fast paced environment.",
                },
                {
                    id: 3,
                    icon: 'bi-hand-thumbs-up fs-4',
                    title: "mobile apps",
                    description: "Our mobile app development service extends to app popular platforms like Android and iOS, and app popular devices like Android Phones, iPhones, iPad and Tablet devices.It is a well-known fact that mobile phone will be a big enabler for business and most applications will be accessed using hand-held devices in future.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "seo",
                    description: "Once your website is up and running, you will want to make sure that Google ranks you highly, so that your customers or visitors can find you easily. This is the ultimate goal of every company operating online. We will work to maximize your website's online presence and reputation.",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "digital marketing",
                    description: "Digital marketing is a vital aspect of any business that operates online, providing valuable exposure. Creating a marketing campaign that is designed to keep viewers, visitors and subscribers engaged can have incredible effects on conversions, both immediately and further down the line.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    title: "maintanance",
                    description: "Once your website is up and running, you may want to keep it looking as fresh, modern and relevant and as secure as the day it went live. We offer maintenance services and provide vital updates to your website. we also provide free training so you can DIY your website maintenance.",
                },
                // {
                //     id: 6,
                //      icon: 'bi-clipboard-data fs-4',
                //     title: "Real-time dashboards & reports",
                //     description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                // },
                // {
                //     id: 32,
                //      icon: 'bi-box-arrow-in-down-left fs-4',
                //     title: "Import Leads",
                //     description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                // },
                // {
                //     id: 43,
                //      icon: 'bi-box-arrow-up-right fs-4',
                //     title: "Export Leads",
                //     description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                // },
                // {
                //     id: 13,
                //     icon: 'bi-stars fs-4',
                //     image: 'img/features/custom.png',
                //     title: 'Score leads',
                //     description: 'Qualify leads based on their region, behavior, and other parameters'
                // },
                // {
                //     id: 23,
                //     icon: 'bi-hand-index fs-4',
                //     image: 'img/features/gear.png',
                //     title: 'Assign leads to the right rep',
                //     description: 'Get the right sales rep on the job based on customer preferences and other predefined criteria.'
                // },
                // {
                //     id: 54,
                //     icon: ' bi-lightning fs-4',
                //     image: 'img/features/uniform.png',
                //     title: 'Close deals quickly',
                //     description: "Generate invoices within CRM from prospect's record and update the deal stage and status."
                // },

                // {
                //     id: 72,
                //      icon: 'bi-archive fs-4',
                //     title: 'Attach relevant details',
                //     description: 'Add notes, labels, or other documents to record in CRM.'
                // },

                // {
                //     id: 31,
                //     icon: 'bi-stack-overflow fs-4',
                //     image: 'img/features/wallet.png',
                //     title: 'Automate activites',
                //     description: 'Create workflows for faster, erro-free communication and service.'
                // },
                // {
                //     id: 432,
                //      icon: 'bi-magnet fs-4',
                //     title: 'lead capture',
                //     description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                // },
                // {
                //     id: 623,
                //      icon: 'bi-people fs-4',
                //     title: 'User management',
                //     description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                // },
                // {
                //     id: 823,
                //      icon: ' bi-ui-checks fs-4',
                //     title: 'Stay connected',
                //     description: 'Receive real-time notification about activities in CRM across devices.'
                // },
                // {
                //     id: 823,
                //      icon: ' bi-calendar2-date fs-4',
                //     title: 'Schedule Leads',
                //     description: 'Receive real-time notification about activities in CRM across devices.'
                // },
            ],
            values: [
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Integrity properties",
                    description: "Keeping our promises to you demonstrates our integrity. We also seek to maintain a spirit of transparent honesty in everything we do.Every piece of work we create is to achieve a common goal,to strengthen our clients market positions..",
                },
                {
                    id: 2,
                    icon: 'bi-funnel fs-4',
                    title: "Excellence",
                    description: "We're smart, creative, nerdy and nice. And most importantly, we make sure we understand you, your business and the people you work with.By giving attention to every detail, we create a product that far surpasses the status quo.",
                },
                {
                    id: 3,
                    icon: 'bi-funnel fs-4',
                    title: "Teamwork",
                    description: "We combine our strengths to give you a superior, more versatile solution.We intentionally maintain a collaborative environment where each team member's voice is heard, valued, and respected so that their ideas benefit you.",
                },
                {
                    id: 4,
                    icon: 'bi-funnel fs-4',
                    title: "Privacy and safety",
                    description: "Create powerful digital safety solutions for your workforce,increasing employee engagement with important processes and procedures effiiciently whilst ensuring the highest levels of compliance.",
                },
                {
                    id: 5,
                    icon: 'bi-funnel fs-4',
                    title: "Quality services",
                    description: "Our experienced designer will create a web design for your business or organization from scratch to bring about effective result-driven user experiences and a unique, unforgettable brand message to your website audience.",
                },
                {
                    id: 6,
                    icon: 'bi-funnel fs-4',
                    title: "Creativity",
                    description: "Creativity is problem solving, and we believe in solving the impossible. We never settle for the first, easiest, or quickest solution. We carefully analyze, research, and create a custom solution that not only solves your challenge but also helps you stand out.",
                },
                {
                    id: 7,
                    icon: 'bi-funnel fs-4',
                    title: "Dependability",
                    description: "We endeavor to always deliver what we promise you, to meet every deadline, and to communicate proactively.Because we treat your business like our own, we strive to deliver services upon which you can completely rely.",
                },
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Fun",
                    description: "We believe that by demonstrating a sense of humor and developing an enjoyable workplace environment, we create an enduring atmosphere for exceptional creativity, outstanding client service, and thriving team members.",
                },
            ]
        }
    }
}
</script>
<style scoped>
/* .container {
    position: relative;
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px;
  } */
.card:hover {
    background-color: var(--bg-primary) !important;
    color: white !important
}

.content {
    color: white !important
}

.card {
    /* position: relative; */
    /* width: 100%; */
    max-width: 300px;
    /* background-color: #fff; */
    /* margin: 20px; */
    /* padding: 20px 15px; */
    /* display: flex; */
    /* flex-direction: column; */
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5); */
    transition: 0.3s ease-in-out;
    border-radius: 15px;
    overflow: hidden;
}

.container .card .image {
    position: relative;
    width: 100%;
    max-width: 260px;
    margin: 0 auto;
    /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2); */
    z-index: 1;
    transition: 0.3s ease-in-out;
}

.container .card .image img {
    max-width: 100%;
    border-radius: 15px;
}

.container .card .content {
    position: relative;
    /* padding: 10px 15px; */
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
    transition: visibility 0s, opacity 0.3s ease-in-out, max-height 0.3s ease-in-out;
}

.container .card:hover .content {
    visibility: visible;
    opacity: 1;
    max-height: 200px;
    /* Adjust this value as needed */
    transition-delay: 0.2s;
}

.container .card:hover .image {
    transform: translateY(-10px);
}

/* @media (max-width: 768px) {
    .container .card { 
        max-width: 100%;
    }
    .container .card .image {
        max-width: 100%;
    }
}

@media (max-width: 480px) {
    .container .card .image {
        max-width: 100%;
    }
} */

/* @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.container {
    animation: fadeIn 1.5s ease-in-out;
} */
</style>
