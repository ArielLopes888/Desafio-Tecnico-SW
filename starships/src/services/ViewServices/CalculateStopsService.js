export default {

    calculateStops(distance, starshipData) {
        const consumablesInHours = this.convertConsumablesToHours(starshipData.consumables);
        const distanceInMGLT = parseFloat(starshipData.MGLT);

        const stops = distance / (distanceInMGLT * consumablesInHours);
        return Math.floor(stops);
    },


    convertConsumablesToHours(consumables) {
        if (!consumables) {
            console.error("Consumables data is missing.");
            return 0;
        }

        const [amount, unit] = consumables.split(' ');
        const amountNumeric = parseInt(amount);

        if (isNaN(amountNumeric)) {
            console.error("Invalid numeric value in consumables:", amount);
            return 0;
        }

        if (!unit) {
            console.error("Unit is missing in consumables:", consumables);
            return 0;
        }

        switch (unit.toLowerCase()) {
            case 'year':
            case 'years':
                return amountNumeric * 365 * 24;
            case 'month':
            case 'months':
                return amountNumeric * 30 * 24;
            case 'week':
            case 'weeks':
                return amountNumeric * 7 * 24;
            case 'day':
            case 'days':
                return amountNumeric * 24;
            default:
                console.error("Invalid unit in consumables:", unit);
                return 0;
        }
    },

};
