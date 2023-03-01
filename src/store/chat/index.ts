import { defineStore } from 'pinia'
import { IMessage } from '@/models/Message.model'

export const ChatStore = defineStore('chat', {
	state: () => ({
		messages: [] as IMessage[],
		selectedContact: null as number | null,
	}),
	actions: {
		sendMessage(message: IMessage) {
			this.messages.push(message)
		},
		setSelectedContact(user: number) {
			this.selectedContact = user
		},
	},
	getters: {
		getMessages(): IMessage[] {
			return this.messages
		},
		getSelectedContact(): number | null {
			return this.selectedContact
		},
	},
})
