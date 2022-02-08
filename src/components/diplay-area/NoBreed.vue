<template>
    <div class="no-breed-inner">
        <i class="fas fa-hand-point-left" style="height: 35vh"></i>
        <div class="inner-text">
            <h4>
                Choose a breed to start seeing some dogs
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NoBreed',
}
</script>

<style>
.no-breed-inner {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.no-breed-inner .inner-text {
    font-weight: bolder;
}
</style>