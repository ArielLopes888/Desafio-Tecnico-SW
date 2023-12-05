<template>
    <div class="sidebar-container">
        <button class="sidebar-button" @click="buttonSidebar">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
        </button>
        <aside :class="{ 'sidebar-visible': isSidebarVisible }">
            <router-link class="sidebar-option" v-for="option in options" :key="option.id" :to="option.route">
                {{ option.label }}
            </router-link>
        </aside>
        <div class="sidebar-overlay" v-if="isSidebarVisible" @click="hideSidebar"></div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            isSidebarVisible: false,
            options: [
                { id: 1, label: 'List Stop Calculations', route: '/liststops' },
                { id: 2, label: 'Calculate Stops', route: '/stops' },
                { id: 3, label: 'All Starships', route: '/allstarships' },
                { id: 4, label: 'Home', route: '/' },
            ]
        };
    },
    methods: {
        buttonSidebar() {
            this.isSidebarVisible = !this.isSidebarVisible;
        },
        hideSidebar() {
            this.isSidebarVisible = false;
        }
    }
};
</script>
  
<style>
.sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 20px;
    z-index: 2;
}

.sidebar-button {
    padding: 10px;
    background-color: #f2f2f200;
    border: none;
    cursor: pointer;
}

.menu-line {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #333;
    margin-bottom: 4px;
}

.menu-line:last-child {
    margin-bottom: 0;
}


aside {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 200px;
    background-color: #595b64;
    padding: 20px;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
    z-index: 2;
}

.sidebar-visible {
    transform: translateX(0);
}

.sidebar-option {
    display: block;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #ffffff;
    text-align: center;
    text-decoration: none;
    color: #333;
    border-radius: 20px
}

.sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
</style>
  