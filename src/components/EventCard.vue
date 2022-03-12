<template>
	<router-link
		class="event-link"
		:to="{
			name: 'EventDetails',
			params: { id: event.id }
		}"
	>
		<div class="event-card">
			<h4>{{ event.name }}</h4>
			<div class="status">
				<span v-if="statusColorR" class="status-icon-r"></span>
				<span v-else-if="statusColorG" class="status-icon-g"></span>
				<span>Status: {{ event.status }}</span>
			</div>
			<img :src="event.image" />
		</div>
	</router-link>
</template>

<script>
export default {
	props: {
		event: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			status: this.event.status
		};
	},
	computed: {
		statusColorR() {
			if (this.status === "Dead") {
				return 1;
			} else return 0;
		},
		statusColorG() {
			if (this.status === "Alive") {
				return 1;
			} else return 0;
		}
	}
};
</script>

<style>
.event-card {
	width: 320px;
	height: auto;
	min-height: 450px;
	background: rgb(60, 62, 68);
	border-radius: 20px;
	overflow: hidden;
	padding: 10px 15px;
	margin-bottom: 24px;
	margin-right: 10px;
	transition: all 0.2s linear;
	cursor: pointer;
	color: white;
}
.status {
	display: flex;
	justify-content: center;
}
.status-icon-r,
.status-icon-g {
	margin: auto 0;
	height: 0.5rem;
	width: 0.5rem;
	margin-right: 0.375rem;
	background: rgb(214, 61, 46);
	border-radius: 50%;
}
.status-icon-g {
	background: rgb(92 199 12);
}
img {
	margin-top: 5%;
}
.event-card:hover {
	transform: scale(1.01);
	box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2),
		0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
	margin: 0;
}
.event-link {
	color: black;
	text-decoration: none;
	font-weight: 100;
}
</style>
