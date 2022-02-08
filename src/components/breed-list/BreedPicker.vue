<template>
<div>
    <div class="breed-list-wrapper">
        <BreedList :breedsList='allBreeds' :key="allBreeds.length"/>
    </div>
</div>
</template>

<script>
import BreedList from './BreedList.vue';
import dogStore from '../../stores/DogStore';

    export default {
        name: 'BreedPicker',

        components:{
            BreedList
        },
        
         computed:{
          allBreeds(){
            return dogStore.getters.allBreeds;
          }
        },
    }
</script>

<style scoped>
.breed-list-wrapper {
    margin-top: 9px;
    height: 89vh;
    overflow-y: scroll;
}
</style>