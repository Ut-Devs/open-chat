import Messages from '../Message.vue'

import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'

describe('Messages.vue', () => {
	it('Should render Messages component properly', async () => {
		const wrapper = mount(Messages, {
			props: {
				message: {
					id: 1,
					content: 'string',
					sendAt: new Date(),
					recipient: 32,
					sender: 13,
				},
			},
		})
		expect(wrapper.vm.isSender).toBeTruthy()
	})
})
