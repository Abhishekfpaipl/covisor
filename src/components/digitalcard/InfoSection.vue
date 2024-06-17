<template>
    <div class="container py-3">
      <p class="px-2 py-3 text-center mb-3">
        <span class="fs-2">~ About Us ~</span>
      </p>
      <div class="d-flex gap-3 overflow-x-scroll" id="scroll">
        <div class="" v-for="(custom, index) in customFields" :key="index">
          <div class="card" style="min-width: 18rem; min-height: 12rem">
            <div class="card-body p-0">
              <h5 class="card-title border-bottom py-3 bg-light">{{ custom.name }}</h5>
              <p class="card-text px-2 overflow-scroll" id="scroll">{{ custom.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InfoSection',
    props: ['customFields'],
  }
  </script>
  
  <style scoped>
  .card-text {
    max-height: 12rem; /* Adjust as needed */
    overflow-y: auto;
  }
  .d-flex {
    overflow-x: auto;
  }
  #scroll::-webkit-scrollbar {
  display: none;
}
  </style>
  