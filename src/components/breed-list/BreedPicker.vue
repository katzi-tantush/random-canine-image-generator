<template>
<div>
    <div class="breed-filter">
        <input type="text" style="width:9.5em" @keyup="this.setFilterValue">
    </div>
    <div class="breed-list-wrapper">
        <BreedList :breedsList='allBreeds' :key="allBreeds.length" :filterVal="filterValue"/>
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

        data(){
            return {
                filterValue: ''
            }
        },
        
         computed:{
          allBreeds(){
            return dogStore.getters.allBreeds;
          }
        },

        methods: {
            setFilterValue(e){
                this.filterValue = e.target.value;
            }
        }
    }
</script>

<style scoped>
.breed-list-wrapper {
    margin-top: 9px;
    height: 89vh;
    overflow-y: scroll;
}
</style>