export default {
    async contactCoach(context, payload) {
        const newRequest = {
            //dummy id
            // id: new Date().toISOString(),
            // coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        }
        // Request node
        const response = await fetch(`https://module16-30b81-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            // send new request every time
            method: 'POST',
            // Returns a promise
            body: JSON.stringify(newRequest)
        });
        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request');
            throw error;
        }
        // Adds a new property tp newRequests with the autogenterate name property from firebase
        newRequest.id = responseData.name;
        // Only have it in local data, not server
        newRequest.coachId = payload.coachId; 
        
        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;

        const response = await fetch(`https://module16-30b81-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch request');
            throw error;
        }

        const requests = [];

        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            };

            requests.push(request);
        }
        console.log(requests.length);
        context.commit('setRequests',requests);
    }
};