<template>
    <div>
        <div
            @click="toggleSidebar" 
            class="sidebar-dog">
            <i class="fas fa-dog" style="height: 6vh"></i>
            Breed Menu 
            <span v-if="selectedBreed" class="viewing-breed">
                currently viewing - "{{selectedBreed}}""
            </span>
        </div>
        <div class="sidebar" :style="{ width: sidebarWidth }">
            <div v-if="!collapsed">
                <BreedPicker />
            </div>
        </div>
    </div>
</template>

<script>
import dogStore from '../stores/DogStore'
import BreedPicker from './breed-list/BreedPicker.vue'

export default {
    name: 'SideBar',

    components: {
        BreedPicker
    },

    props: {},

    data(){
        return {
            collapsed: true,
            sidebarWidth: '0em'
        }
    },

    computed: {
        selectedBreed(){
            return dogStore.getters.selectedBreed;
        }
    },

    methods:{
        toggleSidebar(){
            this.collapsed = !this.collapsed;
            this.sidebarWidth = this.collapsed ? '0em' : '138px';
        }
    }
}
</script>

<style>
.sidebar {
    background-color: #212529;

    float: left;
    position: fixed;
    z-index: 1;
    top: 4em;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    
    flex-direction: column;
}


div .sidebar-dog {
    position: fixed;
    left: 1em;
    top: 1em;
    color: aliceblue;
}

.viewing-breed{
    margin-left: 1em;
    border-bottom: 1px solid white;;
}
</style>