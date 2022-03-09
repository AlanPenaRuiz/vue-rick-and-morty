import { createRouter, createWebHistory } from "vue-router";
import CardList from "../views/CardList.vue";
import EventDetails from "../views/EventDetails.vue";

const routes = [
	{
		path: "/",
		name: "CardList",
		component: CardList
	},
	{
		path: "/Character/:id",
		name: "EventDetails",
		props: true,
		component: EventDetails
	},
	{
		path: "/about",
		name: "about",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
