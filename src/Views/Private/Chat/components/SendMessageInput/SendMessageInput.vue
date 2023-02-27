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

export default defineComponent({
	name: 'SendMessageInput',
	setup() {
		const chatStore = ChatStore()

		return {
			chatStore,
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
			const message = (this.$refs.input as HTMLTextAreaElement).value
			this.chatStore.sendMessage({
				id: Math.random(),
				content: message,
				sendAt: new Date(),
				recipient: Math.random() > 0.5 ? 1 : 2,
				sender: Math.random() > 0.5 ? 1 : 2,
			})
			const form = this.$refs.input as HTMLTextAreaElement
			form.value = ''
		},
	},
})
</script>

<style scoped lang="scss" src="./SendMessageInput.scss" />
