<template>
<!-- TODO: decide if I'm having the subreeds or not -->
    <div @click="">
        {{breedName}}
    </div>
</template>

<script>
export default {
        name: 'Breed',
        props: {
            breedName: String,
            subBreeds: Array    
        },
        components: {
            // SubBreed
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>