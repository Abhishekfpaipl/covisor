<template>
    <div class="position-relative w-100 d-flex justify-content-center align-items-center flex-fill">
        <div class="card position-relative w-100 bg-white p-3 d-flex flex-column">
            <div class="image">
                <!-- <img src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg" alt="Card Image"> -->
                <img :src="lead.image" style="width: 32px;" alt="Card Image">
                <span class="ms-2 fw-bold">{{ lead.title }}</span>
            </div>
            <div class="content">
                <p>{{ lead.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: ['lead']
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
</style>