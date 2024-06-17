<template>
    <div class>
        <img :src="banner" alt="Cover Image"
            style="width:100%;">
    </div>
</template>
<script>
export default {
    name: 'BannerOne',
    props:['banner']
}
</script>