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
                </div>
            </h4>
        </div>

        <RefreshBtn @click="getBreedImgSrcs(selectedBreed)"/>
        <DogImgList :breed="selectedBreed" :imgSrcs="breedImSrcs"/>
        
    </div>
</template>

<script>
import dogStore from '../../stores/DogStore';
import RefreshBtn from './RefreshBtn.vue';
import canineControllerService from '../../services/CanineControllerService';
import DogImgList from './DogImgList.vue';

export default {
    name: 'RandomDog',
    components: {
        RefreshBtn,
        DogImgList
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
            breedImSrcs: []
        }
    },

    methods: {
        getBreedImgSrcs(){
            if(this.selectedBreed !== null){
               canineControllerService.getBreedImgSrcs(this.selectedBreed)
                .then((res) => {
                    this.setBreedImgSrcs(res)
                    })
                .catch(e => console.log(e));
            } else {
                this.promptBreedSelect();
            }
        },
        setBreedImgSrcs(srcArr){
            this.breedImSrcs = srcArr;
        },
        promptBreedSelect(){
            alert('You must select a breed if you wish to see images of it!')
        }
    },

    computed:{
        selectedBreed(){
            return this.dogStore.getters.selectedBreed;
        },
    }
}

</script>

<style scoped>

</style>