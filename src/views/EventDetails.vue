<template>
	<div class="container">
		<div class="event-card">
			<h4>{{ event ? event.name : "" }}</h4>
			<div class="status">
				<span
					:class="
						statusColor == 'Unknow'
							? ''
							: statusColor == 'Alive'
							? 'statusGreen'
							: 'statusRed'
					"
				></span>
				<span>Status: {{ event ? event.status : "" }}</span>
			</div>
			<img :src="event ? event.image : ''" />
		</div>
	</div>
</template>
<script>
import EventService from "@/services/EventService.js";
export default {
	props: ["id"],
	data() {
		return {
			event: null,
			statusColor: null
		};
	},
	created() {
		EventService.getEvent(this.id)
			.then((response) => {
				this.event = response.data;
				this.statusColor = this.event.status;
				//console.log(this.event.status);
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
</script>

<style scope>
.event-card {
}
.statusGreen,
.statusRed {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: rgb(214, 61, 46);
	border-radius: 50%;
}
.statusGreen {
	background: rgb(92 199 12);
}
</style>
