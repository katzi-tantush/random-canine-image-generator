<template>
    <div>
        Dog Img
        <img src="" alt="">
    </div>
</template>

<script>
export default {
    name: 'DogImg',
    props:{
        imgSrc:{
            type: String,
            default: null
        },
        altText:{
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>