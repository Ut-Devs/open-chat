<template>
	<div class="contacts-list">
		<ContactsListHeader />
		<section class="contacts-list__body">
			<template v-for="(contact, index) in contacts">
				<Contact
					v-motion
					@click="setSelectedContact(index)"
					:initial="{
						x: 100,
						opacity: 0,
					}"
					:enter="{
						x: 0,
						opacity: 1,
						transition: {
							delay: 100 * index,
						},
					}"
					class="conatcts-list__body__contact"
				/>
			</template>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contact from './components/Contact/Contact.vue'
import ContactsListHeader from './components/ContactsListHeader/ContactsListHeader.vue'
import { ChatStore } from '@/store/chat'

export default defineComponent({
	name: 'ContactsList',
	components: {
		Contact,
		ContactsListHeader,
	},
	setup() {
		const chatStore = ChatStore()

		return {
			chatStore,
		}
	},
	data: () => ({
		contacts: new Array(10),
	}),
	methods: {
		setSelectedContact(contact: number) {
			this.chatStore.setSelectedContact(contact)
		},
	},
})
</script>

<style lang="scss" src="./ContactsList.scss" scoped />
