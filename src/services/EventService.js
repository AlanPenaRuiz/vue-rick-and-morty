import axios from "axios";

const apiClient = axios.create({
	baseURL: "https://rickandmortyapi.com/api/character",
	withCredentials: false,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	}
});

export default {
	getEvents() {
		return apiClient.get("/");
	},
	getEvent(id) {
		return apiClient.get("/" + id);
	}
};
