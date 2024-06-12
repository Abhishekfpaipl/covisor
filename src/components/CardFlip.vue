<!-- FlipCard.vue -->
<template>
  <div class="flip-card" @click="flipCard">
    <div :class="{'flip-card-inner': true, 'flipped': isFlipped}">
      <div class="flip-card-front">
        <div class="card text-center p-3">
          <img src="lead.image" class="card-img-top" alt="image" style="width: 48px;">
          <div class="card-body px-0">
            <h5 class="card-title text-start">title</h5>
            <!-- <p class="card-text text-start">{{ lead.description }}</p> -->
          </div>
        </div>
      </div>
      <div class="flip-card-back">
        <div class="card text-center p-3">
          <h5 class="card-title">More Info</h5>
          <p class="card-text">Additional details about the lead.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//   props: ['lead'],
  data() {
    return {
      isFlipped: false
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    }
  }
};
</script>

<style scoped>
.flip-card {
  /* perspective: 1000px; */
  position: relative;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}
.flipped {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>
