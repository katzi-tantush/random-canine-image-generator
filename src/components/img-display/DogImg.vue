<template>
    <div v-if="imgSrc !== null">
        <img class="dog-img" :src="imgSrc" :alt="altText">
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
    .dog-img{
        height: 10em;   
        float: right; 
        margin: 2px;
    }
</style>