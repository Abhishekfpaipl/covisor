<template>
    <div class="container-fluid p-5 bg-dark" style="background-color: var(--bg-primary);">
        <div class="">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img src="/img/famefoot.svg"  style="width: 300px; max-width: 80%; filter: invert(1)" alt="">
                <p class="mb-0 fs-3 text-white text-capitalize">" we are absolutely thrilled and honored to be
                    best in
                    {{ service }}, in
                    {{ category }} in {{ place }}. "</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TrophySection",
    props: ['service', 'category', 'place'],
}
</script>
<style>

</style>