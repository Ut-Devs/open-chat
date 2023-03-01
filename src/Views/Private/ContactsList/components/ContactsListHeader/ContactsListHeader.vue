<template>
	<nav class="contacts-list-header">
		<h2>Contacts</h2>
		<div id="search_input"></div>
		<div v-if="isMounted" class="contacts-list-header__actions">
			<teleport to="#search_input" :disabled="!isMobile">
				<Input label="teste" type="text">
					<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
				</Input>
			</teleport>
			<font-awesome-icon icon="fa-solid fa-ellipsis-v" />
		</div>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Input from '@components/Input/Input.vue'

export default defineComponent({
	name: 'ContactsListHeader',
	components: {
		Input,
	},
	data: () => ({
		isMounted: false,
	}),
	computed: {
		isMobile() {
			return window.innerWidth < 768
		},
	},
	mounted() {
		this.isMounted = true
	},
})
</script>

<style lang="scss" src="./ContactsListHeader.scss" scoped />
