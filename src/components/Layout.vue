<template>
<div>   
    <Header title='Random Canines Galore'/>
    <BreedPicker/>
</div>
</template>

<script>
import Header from './Header.vue'
import BreedPicker from './BreedPicker.vue'
import canineControllerService from '../services/CanineControllerService'
import dogStore from '../stores/DogStore'
import factory from '../Factory'

canineControllerService.getAllBreeds()
    .then(res => 
        dogStore.breeds = factory.objectToArr(res.data.message)
        )
    .catch(e => console.log(e));

    export default {
        name: 'Layout',
        components:{
            Header,
            BreedPicker
        }
    }
</script>

<style scoped>

</style>
