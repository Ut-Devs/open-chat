import { defineStore } from 'pinia'
import { IMessage } from '@/models/Message.model'

export const ChatStore = defineStore('chat', {
	state: () => ({ messages: [] as IMessage[] }),
	actions: {
		sendMessage(message: IMessage) {
			this.messages.push(message)
		},
	},
})
