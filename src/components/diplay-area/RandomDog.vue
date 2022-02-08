<template>
    <div class="random-dog-wrapper"> 
        <div>
                <div v-if="selectedBreed === null" class="no-breed-wrapper">
                    <NoBreed/>
                </div>
                <div v-else class="img-are-wrapper">
                    <ImgArea :breed="selectedBreed"/>
                </div>
        </div>
    </div>
</template>

<script>
import dogStore from '../../stores/DogStore';

import ImgArea from './img-display/ImgArea.vue'
import NoBreed from './NoBreed.vue'

export default {
    name: 'RandomDog',
    components: {
        ImgArea,
        NoBreed,
    },
    props:{
        breedUrl: {
            type: String,
            default: null
        }
    },


    methods: {
        promptBreedSelect(){
            alert('You must select a breed if you wish to see images of it!')
        }
    },

    computed:{
        selectedBreed(){
            return dogStore.getters.selectedBreed;
        },
    }
}

</script>

<style scoped>
.no-breed-wrapper {
    text-align: center;
    margin-top: 100px;
}

.img-are-wrapper {
    align-content: center;
    display: flex;
    justify-content: center;
}
</style>