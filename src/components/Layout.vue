<template>
<div class="app-wrapper">   
    <Header title='Random Canines Galore'/>
    <RandomDog/>
    <SideBar/>
</div>
</template>

<script>
import canineControllerService from '../services/CanineControllerService'
import dogStore from '../stores/DogStore'
import Header from './Header.vue'
import RandomDog from './diplay-area/RandomDog.vue'
import  SideBar from './SideBar.vue'

    export default {
        name: 'Layout',

        components:{
            Header,
            RandomDog,
            SideBar
        },

        created(){
          canineControllerService.getAllBreeds()
            .then(res => dogStore.commit('setAllBreeds', res))
            .catch(e => console.log(e));
        }
    }
</script>

<style >
body {
  margin: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
