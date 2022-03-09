<template>
	<div class="container">
		<EventCard v-for="event in events" :key="event.id" :event="event" />
	</div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
//import axios from 'axios'
export default {
	name: "CardList",
	components: {
		EventCard
	},
	data() {
		return {
			events: null
		};
	},
	created() {
		EventService.getEvents()
			.then((response) => {
				console.log("events:", response.data.results);
				this.events = response.data.results;
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
</script>

<style>
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
