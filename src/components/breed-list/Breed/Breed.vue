<template>
<!-- TODO: decide if I'm having the subreeds or not -->
    <div class="breed-card" @click="selectBreed()">
        <div class="breed-text">
            {{breedName}}
        </div>
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
    .breed-card {
        border: 1px solid;
        border-width: medium;
        width: 9em;
        height: 2em;
        display: flex;
        justify-content: center;
        float: left;

        margin-left: 0.8em;
        margin-right: 0.8em;
        margin-top: 0.8em;
    }
    .breed-text {
        margin: auto;
    }
</style>