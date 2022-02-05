<template>
<!-- TODO: decide if I'm having the subreeds or not -->
    <div @click="selectBreed()">
        {{breedName}}
    </div>
</template>

<script>
import dogStore from '../../../stores/DogStore'

export default {
        name: 'Breed',
        props: {
            breedName: String,
            subBreeds: Array    
        },
        components: {
        },
        methods:{
            selectBreed(){
                dogStore.commit('setSelectedBreed', this.breedName);
            }
        },
        created(){
            // this.selectBreed();
        }
    }
</script>

<style scoped>

</style>