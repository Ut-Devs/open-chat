<template>
	<div class="chat">
		<nav class="chat__header">
			<ChatHeader
				v-motion
				:initial="{
					y: -100,
					opacity: 0,
				}"
				:enter="{
					y: 0,
					opacity: 1,
				}"
			/>
		</nav>
		<section ref="messages" class="chat__body">
			<template v-for="message in messages">
				<Message v-motion-pop-visible-once :message="message" />
			</template>
		</section>
		<div class="chat__form">
			<SendMessageInput />
		</div>
	</div>
</template>

<script lang="ts">
import Message from './components/Message/Message.vue'
import SendMessageInput from './components/SendMessageInput/SendMessageInput.vue'
import ChatHeader from './components/ChatHeader/ChatHeader.vue'
import { defineComponent } from 'vue'
import { ChatStore } from '@store/chat'
import { IMessage } from '@models/Message.model'

export default defineComponent({
	components: {
		SendMessageInput,
		Message,
		ChatHeader,
	},
	setup() {
		const chatStore = ChatStore()

		return {
			chatStore,
		}
	},
	computed: {
		messages(): IMessage[] {
			return this.chatStore.messages
		},
	},
})
</script>

<styles src="./Chat.scss" lang="scss" />
