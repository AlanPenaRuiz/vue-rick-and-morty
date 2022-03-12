<template>
	<p>{{ event ? event.location.name : "" }}</p>
</template>

<script>
export default {
	props: ["event"]
};
</script>
