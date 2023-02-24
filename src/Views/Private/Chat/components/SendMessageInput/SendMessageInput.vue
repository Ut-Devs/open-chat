<template>
	<form ref="sendMessagesForm" class="wrapper">
		<textarea
			rows="1"
			ref="input"
			placeholder="type something..."
			class="wrapper__input"
		/>
		<button type="submit" class="wrapper__button">
			<font-awesome-icon icon="fa-regular fa-paper-plane" />
		</button>
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChatStore } from '@/store/chat'

export default defineComponent({
	name: 'SendMessageInput',
	setup() {
		const chatStore = ChatStore()

		return {
			chatStore,
		}
	},
	mounted() {
		const form = this.$refs.sendMessagesForm as HTMLFormElement
		form.addEventListener('submit', (e) => {
			e.preventDefault()
			this.sendMessage()
		})
	},
	methods: {
		sendMessage() {
			const message = (this.$refs.input as HTMLTextAreaElement).value
			!!message &&
				this.chatStore.sendMessage({
					id: Math.random(),
					content: message,
					sendAt: new Date(),
					recipient: Math.random() > 0.5 ? 1 : 2,
					sender: Math.random() > 0.5 ? 1 : 2,
				})
		},
	},
})
</script>

<style scoped lang="scss" src="./SendMessageInput.scss" />
