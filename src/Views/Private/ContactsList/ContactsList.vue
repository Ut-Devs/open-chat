<template>
	<div class="contacts-list">
		<nav class="contacts-list__header">
			<!-- <ContactsListHeader /> -->
		</nav>
		<section class="contacts-list__body">
			<template v-for="contact in contacts">
				<Contact
					v-motion
					:initial="{
						x: 100,
						opacity: 0,
					}"
					:enter="{
						x: 0,
						opacity: 1,
					}"
				/>
			</template>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contact from './components/Contact/Contact.vue'

export default defineComponent({
	name: 'ContactsList',
	components: {
		Contact,
	},
	data: () => ({
		contacts: new Array(10),
	}),
})
</script>

<style lang="scss" src="./ContactsList.scss" />
