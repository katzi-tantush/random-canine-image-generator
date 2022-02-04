<template>
<!-- TODO: decide if I'm having the subreeds or not -->
    <div>
        {{breedName}}
        <!-- {{subBreeds}} -->
    </div>
</template>

<script>
export default {
        name: 'Breed',
        props: {
            breedName: String,
            subBreeds: Array    
        },
        components:{
            // SubBreed
        }
    }
</script>

<style scoped>

</style>