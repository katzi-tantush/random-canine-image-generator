<template>
<div>   
    <Header title='Random Canines Galore'/>
</div>
</template>

<script>
import Header from './Header.vue'
import canineControllerService from '../services/CanineControllerService'

let c = canineControllerService;
c.getTest();

    export default {
        name: 'Layout',
        components:{
            Header
        }
    }
</script>

<style scoped>

</style>
