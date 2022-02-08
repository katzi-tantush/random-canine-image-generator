<template>
    <div>
        <div v-for="breed in breedsList" :key="breed.name">
                    <Breed 
                        :breedName="breed.name" 
                        :subBreeds="breed.subBreeds"
                        class="breed-list-item"
                    />
        </div>
        <div style="height:10vh">

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
.breed-list-item {
    margin-top: 5px;
    margin-left: 5px;
    border-bottom: solid 1px rgb(129, 128, 128);
}

</style>