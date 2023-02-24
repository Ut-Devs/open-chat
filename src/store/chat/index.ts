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

export const ScreenStore = defineStore('screen', {
	state: () => ({ width: 0 }),
	actions: {
		setScreenSize(width: number) {
			this.width = width
		},
	},
})
