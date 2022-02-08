<template>
    <div class="header">
        <div>
            <h1 >{{title}}</h1>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Header',

        components:{
        },

        props:{
            title: String
        }
    }
</script>

<style>
.header {
    text-align: center;
    background-color: #212529;
    color: aliceblue;
}

h1 .header {
    font-size: 1.25rem;
    font-weight: bolder;
} 

.sidebar-toggle {
    text-align: center;
    position: absolute;
}

</style>
