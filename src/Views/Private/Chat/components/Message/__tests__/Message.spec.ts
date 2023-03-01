import Message from '../Message.vue'

import { describe, it, expect, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

import { mount } from '@vue/test-utils'

describe('Messages.vue', () => {
	window.HTMLElement.prototype.scrollIntoView = vi.fn()
	it('Should render Messages component properly', async () => {
		const wrapper = mount(Message, {
			props: {
				message: {
					id: '',
					content: 'string',
					sendAt: new Date(),
					recipient: 'asdasdas',
					sender: '',
				},
			},
			global: {
				plugins: [createTestingPinia()],
			},
		})
		expect(wrapper.exists()).toBeTruthy()
		expect(wrapper.vm.isSender).toBeTruthy()
	})
})
