<template>
	<div class="btn-container">
		<button v-on:click="prevPage"></button>
		<button v-on:click="nextPage"></button>
	</div>
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
	//props: ["page"],
	name: "CardList",
	components: {
		EventCard
	},
	data() {
		return {
			events: null,
			page: 1
		};
	},
	created() {
		EventService.getEvents()
			.then((response) => {
				//console.log("events:", response.data.results);
				this.events = response.data.results;
			})
			.catch((error) => {
				console.log(error);
			});
	},
	methods: {
		nextPage: function () {
			this.page++;
			this.getPage();
		},
		prevPage: function () {
			this.page < 2 ? this.page : this.page--;
			this.getPage();
		},
		getPage: function () {
			EventService.getEventsPage(this.page)
				.then((response) => {
					//console.log("events:", response.data.results);
					this.events = response.data.results;
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
};
</script>

<style lang="scss">
@import "../assets/styles.scss";
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
</style>
