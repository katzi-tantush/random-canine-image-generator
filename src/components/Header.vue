<template>
        <h1 class="header">{{title}}</h1>
</template>

<script>
    export default {
        name: 'Header',
        
        props:{
            title: String
        }
    }
</script>

<style scoped>
.header {
    text-align: center;
}
</style>
