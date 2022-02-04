<template>
    <div>
        <ul>
            <li v-for="breed in breeds" :key="breed.name">
            <Breed :breedName="breed.name" :subBreeds="breed.subBreeds"/>

            </li>
        </ul>
        <!-- {{breeds}} -->
    </div>
</template>

<script>
import Breed from './Breed/Breed.vue'

export default {
    name: 'BreedList',
    components:{
        Breed
    },
    props: ['breeds']
    // {
    //     breeds: {
    //         type: Array,
    //         default: []
    //     }
    // }
}
</script>

<style scoped>

</style>