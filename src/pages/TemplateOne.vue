<template>
  <div class=" ">
    <NavBar brandColorOne="green" brandTextColor="white"
      brandLogo="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" brandName="hello" />
    <div style="padding-top:70px">
      <BannerOne banner="https://cdn.bhybrid.org/imgcdn/20230518121733/card/c15imgbg.png" v-observe/>
    </div>
    <div class="my-3">
      <ImageAndText image-src="/img/template1.png" title="Example Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image-position="left" v-observe/>
    </div>
    <div class="my-3">
      <ImageAndText image-src="/img/template1.png" title="Example Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image-position="right" v-observe/>
    </div>
    <div class="my-3">
      <ImageAndText image-src="/img/template1.png" title="Example Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." image-position="left" v-observe/>
    </div>
    <div class="">
      <CollectionSection v-observe/>
    </div>
    <div class="">
      <GroupsSection v-observe/>
    </div>
    <div class="">
      <InfoSection :customFields="customFields" v-observe/>
    </div>
    <div class="">
      <CustomCounter name1="customers" :value1="50" name2="years" :value2="10" name3="team" :value3="150" v-observe/>
    </div>
    <div class="">
      <ContactCard brandColorOne="green" brandTextColor="white" brandMobile="8860012001"
        brandEmail="support@sovisor.com" brandWhatsapp="8860012001"
        brandAddress=" 2nd Floor, Block B1/632, Janakpuri, 110058, Delhi, India" v-observe/>
    </div>
    <div class="my-3">
      <TempFaqs :faqs="faqs" image-src="/img/templateOne/faq.svg" title="Faqs" image-position="left" v-observe/>
    </div>
    <SocialSchedule v-observe/>
    <GalleryCollage v-observe/>
    <DigitalFooter :socialLinks="social" brandName="Hello" tagLine="tagline" brandColorOne="green"
      brandLogo="https://cdn.bhybrid.org/imgcdn/20230708200505/card/p1109photo.jpg" brandEmail="support@sovisor.com"
      brandMobile="8860012001" brandAddress="2nd Floor, Block B1/632, Janakpuri, <br> 110058, Delhi, India" />

    <div class="whatsapp rounded-circle border d-flex align-items-center justify-content-center bg-success text-white"
      @click="openWhatsapp()" style="width: 40px; height: 40px;">
      <i class="bi bi-whatsapp"></i>
    </div>
    <div class="phone rounded-circle border d-flex align-items-center justify-content-center bg-primary text-white"
      @click="openDialer()" style="width: 40px; height: 40px;">
      <i class="bi bi-telephone"></i>
    </div>

    <div class="query border rounded-circle bg-success bg-dark" data-bs-toggle="offcanvas" data-bs-target="#bottomQuery"
      aria-controls="bottomQuery">
      <img src="/img/Tempcontact.svg" style="width: 20px; height: 20px; filter: invert(1);" alt="">
      <!-- <i class="d-flex justify-content-center align-items-center bi bi-question-circle"></i> -->
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
import ContactCard from '@/components/digitalcard/ContactCard.vue';
import DigitalFooter from '@/components/digitalcard/DigitalFooter.vue';
import ImageAndText from '@/components/ImageAndText.vue';
import TempFaqs from '@/components/TempFaqs.vue';

export default {
  name: "TemplateOne",
  components: {
    NavBar,
    BannerOne,
    CustomCounter,
    CollectionSection,
    InfoSection,
    ContactCard,
    GroupsSection,
    SocialSchedule,
    DigitalFooter,
    GalleryCollage,
    ImageAndText,
    TempFaqs,
  },
  data() {
    return {
      name: '',
      email: '',
      query: '',
      customFields: [
        {
          name: "Shop Name",
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab soluta quis nihil adipisci voluptate impedit placeat aperiam doloremque quasi voluptatibus."
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
        {
          id: 5,
          question: "Can i sync leads form my website to saleswik?",
          answer: "Yes, we have API based solutions for all your lead sources and its sync leads in runtime."
        },
        {
          id: 6,
          question: "Can i manage my accounts at saleswik CRM?",
          answer: "Yes, you can manage your PO, proforma & Tax invoices. You can also manage your credit payment followups & AMC renewal."
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
      ]
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
  bottom: 10px;
  right: 10px;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}

.whatsapp {
  z-index: 9;
  position: fixed;
  bottom: 60px;
  left: 10px;
  cursor: pointer;
}

.phone {
  z-index: 9;
  position: fixed;
  bottom: 10px;
  left: 10px;
  cursor: pointer;
}
</style>