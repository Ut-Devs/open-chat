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
				{{ selectedContact }}
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
import { UserStore } from '@/store/user'
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
		const userStore = UserStore()

		return {
			chatStore,
			userStore,
		}
	},
	sockets: {
		connect: function () {
			console.log('socket connected')
		},
		session: function (session: { id: string }) {
			this.userStore.setSessionId(session.id)
			console.log('session', this.userStore.getSessionId)
		},

		messageReceived(message: IMessage) {
			console.log('message received', message)
			this.chatStore.sendMessage(message)
		},
	},
	computed: {
		messages(): IMessage[] {
			return this.chatStore.getMessages
		},
		isMobile(): boolean {
			return screen.width < 768
		},
		selectedContact(): number | null {
			return this.chatStore.getSelectedContact
		},
	},
})
</script>

<styles src="./Chat.scss" lang="scss" scoped />
