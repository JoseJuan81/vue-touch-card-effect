<template>
  <div id="app">
	<div v-touch-card="15" class="card"></div>
  </div>
</template>

<script>

export default {
	name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.card {
	background-color: #2c3e50;
	border-radius: 8px;
	height: 450px;
	margin: auto;
	width: 200px;
}
</style>
