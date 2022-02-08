<template>
    <div>
        <div v-for="breed in filteredBreeds" :key="breed.name">
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

    props: ['breedsList', 'filterVal'],

    data(){
        return {
            filteredBreeds: this.breedsList
        }
    },

    watch: {
        filterVal(){
            if (this.filterVal !== ''){
                this.filteredBreeds = this.breedsList.filter(breed => 
                    breed.name.toLowerCase().indexOf(this.filterVal.toLowerCase()) > -1
                    );
            } else {
                this.filteredBreeds = this.breedsList;
            }
        }
    }

}
</script>

<style scoped>
.breed-list-item {
    margin-top: 5px;
    margin-left: 5px;
    border-bottom: solid 1px rgb(129, 128, 128);
}

</style>