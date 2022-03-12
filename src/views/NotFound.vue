<template>
	<h1>Oops!</h1>
	<h3>The {{ resource }} you're looking for is not here.</h3>
	<router-link :to="{ name: 'CardList' }">Back to home</router-link>
</template>
<script>
export default {
	props: {
		resource: {
			type: String,
			requires: true,
			default: "page"
		}
	}
};
</script>
