import { defineStore } from 'pinia'

export const UserStore = defineStore('user', {
	state: () => ({
		sessionId: '',
		selectedContact: null as number | null,
	}),
	actions: {
		setSessionId(id: string) {
			this.sessionId = id
		},
	},
	getters: {
		getSessionId(): string {
			return this.sessionId
		},
	},
})
