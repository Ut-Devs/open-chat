<template>
	<div class="wrapper">
		<textarea
			rows="1"
			ref="input"
			placeholder="type something..."
			class="wrapper__input"
		/>
		<button
			v-motion
			:initial="{
				scale: 1,
			}"
			:hovered="{
				scale: 1.1,
			}"
			:enter="{
				scale: 1,
			}"
			@click="sendMessage"
			class="wrapper__button"
		>
			<font-awesome-icon icon="fa-regular fa-paper-plane" />
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ChatStore } from '@/store/chat'
import { UserStore } from '@/store/user'

export default defineComponent({
	name: 'SendMessageInput',
	setup() {
		const chatStore = ChatStore()
		const userStore = UserStore()

		return {
			chatStore,
			userStore,
		}
	},
	mounted() {
		const form = this.$refs.input as HTMLTextAreaElement
		form.addEventListener('keypress', (e) => {
			if (e.key === 'Enter' && !e.shiftKey) {
				e.preventDefault()
				!!form.value && this.sendMessage()
			}
		})
	},
	methods: {
		sendMessage() {
			const messageContent = (this.$refs.input as HTMLTextAreaElement).value
			const message = {
				id: Math.random().toString(36).slice(2, 9),
				content: messageContent,
				sendAt: new Date(),
				recipient: 'all',
				sender: this.userStore.getSessionId,
			}
			this.$socket.emit('sendMessage', JSON.stringify(message))
			const form = this.$refs.input as HTMLTextAreaElement
			form.value = ''
		},
	},
})
</script>

<style scoped lang="scss" src="./SendMessageInput.scss" />
