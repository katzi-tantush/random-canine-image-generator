<template>
<div>   
    <Header title='Random Canines Galore'/>
    <BreedPicker :breeds="breeds"/>
</div>
</template>

<script>
import Header from './Header.vue'
import BreedPicker from './breed-list/BreedPicker.vue'
import canineControllerService from '../services/CanineControllerService'
// import dogStore from '../stores/DogStore'
import factory from '../Factory'


    export default {
        name: 'Layout',
        components:{
            Header,
            BreedPicker
        },
        data(){
            return {
                breeds: []
            }
        },
        created(){
            canineControllerService.getAllBreeds()
                .then(res => {
                    // do I need the store?
                    // dogStore.breeds = factory.objectToArr(res.data.message);
                    this.breeds = factory.resToBreedArr(res.data.message);
                })
                .catch(e => console.log(e));
        }
    }
</script>

<style scoped>

</style>
