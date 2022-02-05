<template>
    <div>
        Get A Random Image Of Your Breed
        <div>
            <h4>
                <div v-if="selectedBreed === null">
                    Select a breed in the breed picker section to see random photos of it
                </div>
                <div v-else>
                    {{selectedBreed}}
                    <img :src="selectedBreedImgSrc" :alt="selectBreed">
                </div>
            </h4>
        </div>


        <RefreshBtn @click="getBreedImgSrc(selectedBreed)"/>
        <DogImg :imgSrc="breedImSrc" :altText="selectedBreed"/>
        
    </div>
</template>

<script>
import dogStore from '../../stores/DogStore';
import RefreshBtn from './RefreshBtn.vue';
import DogImg from './DogImg.vue';
import canineControllerService from '../../services/CanineControllerService'

export default {
    name: 'RandomDog',
    components: {
        RefreshBtn,
        DogImg
    },
    props:{
        breedUrl: {
            type: String,
            default: null
        }
    },

    data(){
        return{
            dogStore,
            breedImSrc: null
        }
    },

    methods: {
        getBreedImgSrc(){
            canineControllerService.getBreedImgSrc(this.selectedBreed)
                .then(res => this.breedImSrc = res)
                .catch(e => console.log(e));
        }
    },

    computed:{
        selectedBreed(){
            return this.dogStore.getters.selectedBreed;
        },
        selectedBreedImgSrc(){
            return this.dogStore.getters.selectedBreedImgSrc;
        }
    }
}
</script>

<style scoped>

</style>