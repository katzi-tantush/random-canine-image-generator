<template>
<div class="app-wrapper">   
    <Header title='Random Canines Galore'/>
    <BreedPicker class="split left"/>
    <RandomDog class="split right"/>
</div>
</template>

<script>
import Header from './Header.vue'
import BreedPicker from './breed-list/BreedPicker.vue'
import RandomDog from './img-display/RandomDog.vue'


    export default {
        name: 'Layout',
        components:{
            Header,
            BreedPicker,
            RandomDog
        }
    }
</script>

<style scoped>
.app-wrapper{
    height: 100%;
  width: 100%;
}

    .split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 20erm;
  overflow-x: hidden;
  padding-top: 20px;
}

.left {
  left: 0;
  background-color: rgb(216, 216, 216);
}

.right {
  right: 0;
  background-color: rgb(255, 145, 145);
}
</style>
