<template>
    <div class="container-fluid p-5 bg-dark" style="background-color: var(--bg-primary);">
        <div class="border border-3 border-warning p-2 py-5">
            <div class="d-flex flex-column">
                <span class="bi bi-trophy text-warning" style="font-size: 64px;"></span>
                <span class="text-warning fs-3 fw-bold">FAMEFOOT</span>
                <p class="mb-0 fs-3 text-warning text-capitalize">" we are absolutely thrilled and honored to be
                    best in
                    {{ service }}, in
                    {{category}} in {{place}}. "</p>
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
<style lang="">

</style>