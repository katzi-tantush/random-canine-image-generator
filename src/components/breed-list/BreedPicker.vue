<template>
<div>
    <h3>STEP RIGHT UP! PICK A BREED, ANY BREED!</h3>
    <BreedList :breeds='breeds'/>
</div>
</template>

<script>
import BreedList from './BreedList.vue'

    export default {
        name: 'BreedPicker',
        components:{
            BreedList
        },
        props:{
            breeds: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style scoped>

</style>