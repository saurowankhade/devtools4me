import axios from "axios";

const subscribeAPI = {
	create: async ({ email }) => {
	try{
		const response = await axios.post('/api/subscribe', { email });
		return response?.data;
	} catch{
		//
	}
	},
};

export {
    subscribeAPI
}