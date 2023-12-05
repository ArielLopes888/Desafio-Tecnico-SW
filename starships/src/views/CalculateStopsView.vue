<template>
    <SidebarComponent />
    <div class="stop-calculator">
        <h1>Stop Calculator</h1>
        <div class="input-container">
            <label for="distance">Distance (MGLT):</label>
            <input v-model="distance" type="number" id="distance" />
        </div>
        <div class="input-container">
            <label for="starship">Starship:</label>
            <select v-model="selectedStarship" id="starship">
                <option v-for="starship in allStarships" :key="starship.name" :value="starship">
                    {{ starship.name }}
                </option>
            </select>
        </div>
        <button @click="calculateStops">Calculate Stops</button>
        <div v-if="result !== null" class="result-container">
            <p>Necessary stops: {{ result }}</p>
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
            selectedStarship: null,
            result: null,
            allStarships: [],
        };
    },
    async created() {
        const allStarshipsService = new AllStarshipsService();
        this.allStarships = await allStarshipsService.GetAll();
    },
    methods: {
        calculateStops() {
            if (this.distance && this.selectedStarship) {
                const stops = CalculateStopsService.calculateStops(this.distance, this.selectedStarship);
                this.result = stops;
            } else {
                console.error("Fill in all fields.");
            }
        },
    },
};
</script>
  
<style scoped>
.stop-calculator {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(145, 68, 68, 0.1);
}

.input-container {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

input,
select,
button {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-top: 5px;
    font-size: 16px;
}

button {
    background-color: #4caf50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

.result-container {
    margin-top: 20px;
    font-weight: bold;
    color: #333;
}
</style>
  