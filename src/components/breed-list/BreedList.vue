<template>
    <div>
        <div v-for="breed in breedsList" :key="breed.name">
                    <Breed 
                        :breedName="breed.name" 
                        :subBreeds="breed.subBreeds"
                    />
        </div>
    </div>
</template>

<script>
import Breed from './Breed.vue'

export default {
    name: 'BreedList',

    components:{
        Breed
    },

    props: ['breedsList']
}
</script>

<style scoped>
</style>