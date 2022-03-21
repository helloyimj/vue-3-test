<template>
	<h1>{{ message }}</h1>
	<Hi />
</template>

<script>
// import Hi from './components/Hi' // tilde 사용가능
import Hi from '~/components/Hi'

export default {
	components: {
		Hi
	},
	data() {
		return {
			message: 'Hello Vue !!!'
		}
	}
}
</script>