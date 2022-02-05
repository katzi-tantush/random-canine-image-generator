<template>
    <div>
        RANDOM DOG
        <div>
            <h4>
                <div v-if="selectedBreed == null">
                    Select a breed in the breed picker section to see random photos of it
                </div>
                <div v-else>
                    {{selectedBreed}}
                </div>
            </h4>
        </div>

        <RefreshBtn/>
        <DogImg/>
    </div>
</template>

<script>
import dogStore from '../../stores/DogStore';
import RefreshBtn from './RefreshBtn.vue';
import DogImg from './DogImg.vue';

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
            dogStore
        }
    },
    computed:{
        selectedBreed(){
            return this.dogStore.getters.selectedBreed;
        }
    }
}
</script>

<style scoped>

</style>