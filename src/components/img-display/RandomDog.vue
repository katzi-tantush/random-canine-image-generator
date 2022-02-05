<template>
    <div>
        RANDOM DOG
        <RefreshBtn/>
        <DogImg/>
    </div>
</template>

<script>
import RefreshBtn from './RefreshBtn.vue'
import DogImg from './DogImg.vue'

export default {
    name: 'RandomDog',
    components: {
        RefreshBtn,
        DogImg
    },
    props:{
        breedUrl: {
            type: String,
            default: null
        }
    }
}
</script>

<style scoped>

</style>