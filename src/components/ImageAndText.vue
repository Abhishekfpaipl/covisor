<template>
    <div class="container py-2">
      <div class="row align-items-center">
        <div v-if="imagePosition === 'left'" class="col-md-4">
          <img :src="imageSrc" class="img-fluid" style="height: 250px;" alt="Image">
        </div>
        <div class="col-md-8">
          <h3 class="text-capitalize">{{ title }}</h3>
          <p>{{ description }}</p>
          
        </div>
        <div v-if="imagePosition === 'right'" class="col-md-4">
          <img :src="imageSrc" class="img-fluid " style="height: 250px;" alt="Image">
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
      description: {
        type: String,
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
  