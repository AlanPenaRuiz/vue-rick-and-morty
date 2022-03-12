<template>
	<p>Especie: {{ event ? event.species : "" }}</p>
	<p>Origin: {{ event ? event.origin.name : "" }}</p>
</template>
<script>
export default {
	props: ["event"]
};
</script>
