<template>
    <SidebarComponent />
    <div class="calculator-container">
        <h1>Stop Calculator (List of all ships)</h1>
        <div class="input-container">
            <label for="distance">Distance (MGLT):</label>
            <input v-model="distance" type="number" id="distance" />
        </div>
        <button @click="calculateStops">Calculate Stops</button>
        <div v-if="results.length > 0" class="results-container">
            <h2>Results:</h2>
            <table class="results-table">
                <thead>
                    <tr>
                        <th>StarShip</th>
                        <th>Necessary Stops</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(result, index) in results" :key="index">
                        <td>{{ result.starship.name }}</td>
                        <td>
                            {{ isNaN(result.stops) ? "No MGLT data" : result.stops }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
  
<script>
import AllStarshipsService from "../services/ViewServices/AllStarshipsService";
import CalculateStopsService from "../services/ViewServices/CalculateStopsService";
import SidebarComponent from '../components/SidebarComponent.vue';

export default {
    data() {
        return {
            distance: null,
            results: [],
            allStarships: [],
        };
    },
    async created() {
        const allStarshipsService = new AllStarshipsService();
        this.allStarships = await allStarshipsService.GetAll();
    },
    methods: {
        calculateStops() {
            if (this.distance) {
                this.results = this.allStarships
                    .map((starship) => {
                        if (starship && starship.MGLT && starship.consumables) {
                            const stops = CalculateStopsService.calculateStops(this.distance, starship);
                            return { starship, stops };
                        } else {
                            console.error("Starship data is missing or invalid for:", starship);
                            return null;
                        }
                    })
                    .filter((result) => result !== null);
            } else {
                console.error("Fill in the distance.");
            }
        },
    },
};
</script>
  
<style>
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background: url('../assets/background2.jpg') center center/cover no-repeat; /* Substitua 'caminho/para/sua/imagem.jpg' pelo caminho real da sua imagem */
}
.calculator-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-container {
    margin-bottom: 15px;
}

button {
    padding: 10px 15px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.results-container {
    margin-top: 20px;
}

.results-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

.results-table th,
.results-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

.results-table th {
    background-color: #f2f2f2;
}

</style>