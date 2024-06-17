<template>
  <div class=" ">
    <NavBar brandColorOne="#F8F9FA" brandTextColor="black"
      brandLogo="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" brandName="hello" />
    <div style="padding-top:70px">
      <BannerOne banner="https://cdn.bhybrid.org/imgcdn/20230518121733/card/c15imgbg.png" />
    </div>
    <div class="my-3">
      <ImageAndText image-src="/img/template1.png" title="Example Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image-position="left" />
    </div>
    <div class="my-3">
      <ImageAndText image-src="/img/template1.png" title="Example Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image-position="right" />
    </div>
    <div class="my-3">
      <CollectionSection />
    </div>
    <div class="my-3">
      <GroupsSection />
    </div>
    <div class="my-3">
      <TempCustomers :reviews="customers" title="our customers" />
    </div>
    <div class="my-3">
      <WhyChooseUs :description="whychooseUs" title="why choose us" image-src="/img/templateOne/whychooseUs.svg" />
    </div>

    <div class="my-3">
      <TempFaqs :faqs="faqs" image-src="/img/templateOne/faq.svg" title="Frequently asked questions"
        image-position="left" />
    </div>

    <div class="my-3">
      <CustomCounter name1="customers" :value1="50" name2="years" :value2="10" name3="team" :value3="150" />
    </div>
    <!-- <div class="my-3">
      <ContactCard brandColorOne="green" brandTextColor="white" brandMobile="8860012001"
        brandEmail="support@sovisor.com" brandWhatsapp="8860012001"
        brandAddress=" 2nd Floor, Block B1/632, Janakpuri, 110058, Delhi, India" />
    </div> -->

    <SocialSchedule />

    <GalleryCollage />

    <div class="my-3">
      <InfoSection :customFields="customFields" />
    </div>

    <TempMiniFooter />

    <DigitalFooter :socialLinks="social" brandName="Hello" tagLine="tagline" brandColorOne="green"
      brandLogo="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" brandEmail="support@sovisor.com"
      brandMobile="8860012001" brandAddress="2nd Floor, Block B1/632, Janakpuri, <br> 110058, Delhi, India" />

    <div class="whatsapp rounded-circle border d-flex align-items-center justify-content-center bg-success text-white"
      @click="openWhatsapp()" style="width: 37px; height: 37px;">
      <i class="bi bi-whatsapp fs-5"></i>
    </div>

    <div class="phone rounded-circle border d-flex align-items-center justify-content-center bg-primary text-white"
      @click="openDialer()" style="width: 37px; height: 37px;">
      <i class="bi bi-telephone fs-5"></i>
    </div>

    <div class="query border rounded-circle bg-success bg-dark" data-bs-toggle="offcanvas" data-bs-target="#bottomQuery"
      aria-controls="bottomQuery">
      <img src="/img/re.svg" style="width: 25px; height: 25px; filter: invert(1);" alt="">
    </div>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="bottomQuery" aria-labelledby="bottomQueryLabel">
      <div class="offcanvas-header border-bottom">
        <h5 class="offcanvas-title" id="bottomQueryLabel">Query</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="submitQuery()" class="row g-3 needs-validation" novalidate>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
            <label for="floatingInput" class="text-muted">First name</label>
          </div>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
            <label class="text-muted">Email Or Mobile No.</label>
          </div>
          <div class="form-floating">
            <textarea v-model="query" rows="2" class="form-control flex-fill" placeholder="Type your message..."
              required>
              </textarea>
            <label class="text-muted">Enter Your Query</label>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit Query</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from '@/components/digitalcard/NavBar.vue';
import BannerOne from '@/components/digitalcard/BannerOne.vue'
import CollectionSection from '@/components/digitalcard/CollectionSection.vue'
import CustomCounter from '@/components/digitalcard/CustomCounter.vue'
import InfoSection from '@/components/digitalcard/InfoSection.vue';
import GroupsSection from '@/components/digitalcard/GroupsSection.vue';
import SocialSchedule from '@/components/digitalcard/SocialSchedule.vue';
import GalleryCollage from '@/components/digitalcard/GalleryCollage.vue';
// import ContactCard from '@/components/digitalcard/ContactCard.vue';
import DigitalFooter from '@/components/digitalcard/DigitalFooter.vue';
import ImageAndText from '@/components/ImageAndText.vue';
import TempFaqs from '@/components/TempFaqs.vue';
import WhyChooseUs from '@/components/WhyChooseUs.vue';
import TempCustomers from '@/components/TempCustomers.vue';
import TempMiniFooter from '@/components/TempMiniFooter.vue';

export default {
  name: "TemplateOne",
  components: {
    NavBar,
    BannerOne,
    CustomCounter,
    CollectionSection,
    InfoSection,
    // ContactCard,
    GroupsSection,
    SocialSchedule,
    DigitalFooter,
    GalleryCollage,
    ImageAndText,
    TempFaqs,
    WhyChooseUs,
    TempCustomers,
    TempMiniFooter,
  },
  data() {
    return {
      name: '',
      email: '',
      query: '',
      customFields: [
        {
          name: "Shop Name",
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus ."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
        {
          name: "Description",
          value: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
        },
      ],
      faqs: [
        {
          id: 1,
          question: "Can i make whatsApp communication from saleswik CRM?",
          answer: "Yes, you can do trasactional whatsapp messaging through saleswik CRM. You can also select automated messages and send to the buyers."
        },
        {
          id: 2,
          question: "Is Saleswik CRM gives alert of timely followups?",
          answer: "Yes, It gives peding follow-up alerts on dashboard saleswik and sms so that you should not miss any followup"
        },
        {
          id: 3,
          question: "Can I sync my call log leads to saleswik CRM?",
          answer: "Yes, you can sync all your calls in saleswik CRM and convert them into leads."
        },
        {
          id: 4,
          question: "Is my data secured at saleswik CRM?",
          answer: "Yes, your data is completely safe, and important credentails are encripted."
        },
      ],
      social: [
        {
          id: 1,
          name: "Instagram",
          url: "http://www.instagram.com/"
        },
        {
          id: 2,
          name: "Facebook",
          url: "http://www.facebook.com/"
        },
        {
          id: 3,
          name: "Linkdin",
          url: "http://in.linkedin.com/"
        },
        {
          id: 4,
          name: "Youtube",
          url: "http://www.youtube.com/"
        },
      ],
      whychooseUs: [
        {
          title: '24X7 Support services',
          icon: 'bi-headset'
        },
        {
          title: 'Quality assurance',
          icon: 'bi-thumbs-up'
        },
        {
          title: 'Cost effective pricing',
          icon: 'bi-currency-ruppee'
        },
        {
          title: 'Remarkable track record',
          icon: 'bi-journal'
        },
        {
          title: '10 years of expertise',
          icon: 'bi-stars'
        },
      ],
      customers: [
        {
          id: 1,
          show: false,
          imgr: '/img/users/1.png',
          name: 'Ram',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
        },
        {
          id: 2,
          show: false,
          imgr: '/img/users/2.png',
          name: 'Shyam',
          company: 'XYz Pvt Ltd',
          rating: '4.5',
          text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
        },
        {
          id: 3,
          show: false,
          imgr: '/img/users/3.png',
          name: 'Nikhil',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
        },
        {
          id: 4,
          show: false,
          imgr: '/img/users/4.png',
          name: 'Abhishek',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
        },
        {
          id: 5,
          show: false,
          imgr: '/img/users/5.png',
          name: 'Rajan',
          company: 'XYz Pvt Ltd',
          rating: '4',
          text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
        },
        {
          id: 6,
          show: false,
          imgr: '/img/users/3.png',
          name: 'Yogesh',
          company: 'XYz Pvt Ltd',
          rating: '4.5',
          text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
        },
        {
          id: 7,
          show: false,
          imgr: '/img/users/2.png',
          name: 'Lokesh',
          company: 'XYz Pvt Ltd',
          rating: '4',
          text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
        },
        {
          id: 8,
          show: false,
          imgr: '/img/users/1.png',
          name: 'Bhasker',
          company: 'XYz Pvt Ltd',
          rating: '3.5',
          text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
        },
        {
          id: 9,
          show: false,
          imgr: '/img/users/4.png',
          name: 'Vivek',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
        },
        {
          id: 10,
          show: false,
          imgr: '/img/users/5.png',
          name: 'Ankit',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
        },
        {
          id: 11,
          show: false,
          imgr: '/img/users/2.png',
          name: 'Karan',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
        },
        {
          id: 12,
          show: false,
          imgr: '/img/users/1.png',
          name: 'Rajat',
          company: 'XYz Pvt Ltd',
          rating: '4',
          text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
        },
        {
          id: 13,
          show: false,
          imgr: '/img/users/4.png',
          name: 'Ajay',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
        },
        {
          id: 14,
          show: false,
          imgr: '/img/users/2.png',
          name: 'Vikas',
          company: 'XYz Pvt Ltd',
          rating: '5',
          text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
        },
      ],
    }
  },
  methods: {
    submitQuery() {
      console.log('Submit Query')
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      }
      this.$store.dispatch('submitQuery', data)
    },
    openDialer() {
      const phoneNumber = 8826658501;
      window.location.href = `tel:${phoneNumber}`;
    },
    openWhatsapp() {
      window.open(`https://wa.me/${8826658501}?text=Hello...`, '_blank');
    }
  }

};
</script>
<style>
.query {
  z-index: 9;
  position: fixed;
  bottom: 30px;
  right: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.whatsapp {
  z-index: 9;
  position: fixed;
  bottom: 80px;
  left: 10px;
  cursor: pointer;
  padding: 5px !important
}

.phone {
  z-index: 9;
  position: fixed;
  bottom: 30px;
  left: 10px;
  cursor: pointer;
  padding: 5px
}
</style>