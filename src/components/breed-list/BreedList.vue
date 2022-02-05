<template>
    <div>
        <ul>
            <li v-for="breed in breedsList" :key="breed.name">
                <Breed :breedName="breed.name" :subBreeds="breed.subBreeds"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Breed from './Breed/Breed.vue'

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