<template>
    <div @click="selectBreed">
        <div class="breed-text">
            {{breedName}}
        </div>
    </div>
</template>

<script>
import dogStore from '../../stores/DogStore'

export default {
        name: 'Breed',
        
        props: ['breedName'],

        methods:{
            selectBreed(){
                dogStore.commit('setSelectedBreed', this.breedName);
            }
        },
    }
</script>

<style scoped>
    .breed-text {
        color: aliceblue;
    }
</style>