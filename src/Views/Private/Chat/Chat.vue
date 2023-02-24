<template>
	<div :class="['view-container', { 'view-container--desktop': !isMobile }]">
		<ContactsList v-if="!isMobile" />
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
			<section class="chat__body">
				<template v-for="message in messages">
					<Message
						v-motion
						:initial="{
							scale: 0,
							opacity: 0,
						}"
						:enter="{
							scale: 1,
							opacity: 1,
						}"
						:message="message"
					/>
				</template>
			</section>
			<div class="chat__form">
				<SendMessageInput />
			</div>
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
import ContactsList from '../ContactsList/ContactsList.vue'

export default defineComponent({
	components: {
		SendMessageInput,
		Message,
		ChatHeader,
		ContactsList,
	},
	setup() {
		const chatStore = ChatStore()

		return {
			chatStore,
		}
	},
	watch: {
		messages(oldMessages, newMessages) {
			console.log(this.chatStore.messages, oldMessages, newMessages)
		},
	},
	computed: {
		messages(): IMessage[] {
			return this.chatStore.messages
		},
		isMobile(): boolean {
			return screen.width < 768
		},
	},
})
</script>

<styles src="./Chat.scss" lang="scss" />
