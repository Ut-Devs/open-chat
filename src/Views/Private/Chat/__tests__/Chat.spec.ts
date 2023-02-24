import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { createTestingPinia } from '@pinia/testing'
import Chat from '../Chat.vue'

describe('Chat.vue', () => {
	it('Should render Chat view properly', () => {
		const wrapper = shallowMount(Chat, {
			global: {
				plugins: [createTestingPinia()],
			},
		})
		expect(wrapper.exists()).toBeTruthy()
	})
})
