<script setup>
import SidebarComponent from '../components/SidebarComponent.vue'
</script>

<template>
  <SidebarComponent />
  <div class="centered-content">
    <img src="../assets/starwars-logo.png" alt="Central Image" class="central-image">
    <div class="overlay">
      <p class="animated-paragraph">
        AMEAÇA DO BUG<br>
        <br><br>
        A Comunidade de Desenvolvedores está<br>
        em grande tumulto. Em<br>
        disputa estão os bugs<br>
        nos códigos para<br>
        os sistemas estelares<br>
        exteriores.<br><br>

        Na esperança de resolver o<br>
        assunto com um bloqueio de<br>
        implacáveis pull requests,<br>
        o capitão dev Ariel lidera a resistência.
        <br><br>
        <br><br>
        <br>CLIQUE NO MENU NO CANTO SUPERIOR ESQUERDO<br>
      </p>
    </div>

  </div>
</template>

<style>
.centered-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

h1 {
  text-align: center;
}

.central-image {
  width: 100%;
  max-width: 450px;
  margin-top: 10px;
}

.overlay {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.animated-paragraph {
  color: #fff;
  opacity: 0;
  animation: slide-up 35s ease-in-out forwards;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  font-size: 1.5em;
}

@keyframes slide-up {
  from {
    opacity: 1;
    transform: translateY(130%);
  }

  to {
    opacity: 1;
    transform: translateY(-500%);
  }
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background: url('../assets/background2.jpg') center center/cover no-repeat;
}
</style>
