<template>
<div>
    <h3>STEP RIGHT UP! PICK A BREED, ANY BREED!</h3>
    <div>
        Press a breed to get 10 random photos of it
    </div>
    <div>
        <BreedList  class="breed-list-wrapper" :breedsList='breeds' :key="breeds.length"/>
    </div>
</div>
</template>

<script>
import BreedList from './BreedList.vue'
import canineControllerService from '../../services/CanineControllerService'
import factory from '../../Factory'

    export default {
        name: 'BreedPicker',
        
        components:{
            BreedList
        },
        
        data(){
            return {
                breeds: []
            };
        },

        created(){
            canineControllerService.getAllBreeds()
                .then(res => {
                    this.breeds = factory.resToBreedArr(res.data.message);
                })
                .catch(e => console.log(e));
        }
    }
</script>

<style scoped>
    /* .breed-list-wrapper {

    } */
</style>