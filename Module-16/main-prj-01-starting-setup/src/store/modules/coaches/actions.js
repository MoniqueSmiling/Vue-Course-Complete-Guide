export default {
    async registerCoach(context, data) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };
        // Sends put request to url with coach data
        const response = await fetch(`https://module16-30b81-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
            method: 'PUT', // Put request overwrites existing data and makes new entry if one doesn't exist
            body: JSON.stringify(coachData)
        });

        // const responseData = await response.json();

        if(!response.ok) {
            // Error
        }

        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    async loadCoaches(context, payload) {
        if(!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

        const response = await fetch(`https://module16-30b81-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`);
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch');
            throw error;
        }

        // Transform data
        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };

            coaches.push(coach);
        }

        context.commit('setCoaches',coaches);
        context.commit('setFetchTimestamp'); 
    }
};