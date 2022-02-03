<template>
    <h3>{{breeds}}</h3>
</template>

<script>
    export default {
        name: 'BreedPicker',
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