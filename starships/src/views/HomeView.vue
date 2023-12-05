<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
</script>

<template>
  <SidebarComponent />
  <div class="centered-content">
    <h1 style="color: black;">HOME</h1>
  </div>
</template>

<style scoped></style>

<style>
.centered-content {
  display: flex;
  justify-content: center;
  height: 100vh;

}


h1 {
  text-align: center;
}
</style>
