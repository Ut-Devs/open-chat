import Messages from '../Message.vue'

import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'

describe('Messages.vue', () => {
	window.HTMLElement.prototype.scrollIntoView = vi.fn()
	it('Should render Messages component properly', async () => {
		const wrapper = mount(Messages, {
			props: {
				message: {
					id: 1,
					content: 'string',
					sendAt: new Date(),
					recipient: 2,
					sender: 1,
				},
			},
		})
		expect(wrapper.exists()).toBeTruthy()
		expect(wrapper.vm.isSender).toBeTruthy()
	})
})
