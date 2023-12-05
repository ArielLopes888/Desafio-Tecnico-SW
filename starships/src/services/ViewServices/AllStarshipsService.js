
export default function AllStarshipsService() {
    async function getStarshipsFromPage(pageNumber) {
        const response = await fetch(`https://swapi.dev/api/starships/?page=${pageNumber}`);
        
        if (!response.ok) {
            console.error(`Erro ao obter dados da página ${pageNumber}: ${response.status} ${response.statusText}`);
            return [];
        }

        const data = await response.json();
        return data.results;
    }

    async function getAllStarships() {
        let allStarships = [];
        let pageNumber = 1;

        while (pageNumber <= 4) {
            const starshipsFromPage = await getStarshipsFromPage(pageNumber);

            if (starshipsFromPage.length > 0) {
                allStarships = [...allStarships, ...starshipsFromPage];
                pageNumber++;
            } else {
                break; 
            }
        }
        return allStarships;
    }

    return {
        GetAll: getAllStarships,
    };
}
