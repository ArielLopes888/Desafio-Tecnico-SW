<script>
import AllStarshipsService from '../services/ViewServices/AllStarshipsService';
import SidebarComponent from '../components/SidebarComponent.vue';

const AllStarShips = new AllStarshipsService();

export default {
  data() {
    return {
      allStarShips: [],
    };
  },
  mounted() {
    AllStarShips.GetAll()
      .then(response => {
        if (response && Array.isArray(response) && response.length > 0) {
          this.allStarShips = response;
        } else {
          console.error("A resposta da API está vazia ou não é um array.");
        }
      })
      .catch(error => {
        console.error("Erro ao obter dados da API:", error);
      });
  },
};
</script>

<template>
  <SidebarComponent />
  <article class="centered-content">
    <div class="table-container">
      <table class="custom-table">
        <thead style="color: rgb(3, 3, 3);">
          <tr>
            <th>Starship</th>
            <th>MGLT</th>
            <th>Manufacturer</th>
            <th>Passengers</th>
            <th>Consumables</th>
          </tr>
        </thead>
        <tbody style="color: rgba(226, 78, 78, 0.986);">
          <tr v-for="starship in allStarShips" :key="starship.name">
            <td>{{ starship.name }}</td>
            <td>{{ starship.MGLT }}</td>
            <td>{{ starship.manufacturer }}</td>
            <td>{{ starship.passengers }}</td>
            <td>{{ starship.consumables }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<style scoped>
.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th, .custom-table td {
  border: 1px solid #302f2f;
  padding: 10px;
  text-align: left;
  font-size: 0.9em;
}

.custom-table th {
  background-color: #bd1919;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f900;
}

.table-container {
  max-height: 800px;
  overflow: auto;
}

h1 {
  text-align: center;
}

.centered-content {
  display: flex;
  justify-content: center;
  height: 100vh;
}
</style>
