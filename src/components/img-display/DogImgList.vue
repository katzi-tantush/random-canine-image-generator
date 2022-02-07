<template>
    <div class="img-list">
        <DogImg v-for="src of imgSrcs" 
            :key="src"
            :imgSrc="src"
            :altText="`${breed} image`"/>
    </div>
</template>

<script>
import DogImg from './DogImg.vue'

export default {
    name: 'DogImgList',
    
    components:{
        DogImg
    },

    props: ['imgSrcs', 'breed'],
}

</script>

<style>
.img-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 19px;
}
</style>