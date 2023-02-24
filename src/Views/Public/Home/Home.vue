<template>
	<main class="home">
		<router-link to="/chat">Go to Chat</router-link>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Home',
	computed: {
		isMobile(): boolean {
			return screen.width < 768
		},
	},
	mounted() {
		this.isMobile && this.$router.removeRoute('contacts')
	},
})
</script>

<style lang="scss" src="./Home.scss" scoped />
