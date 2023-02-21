import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import Chat from '../Chat.vue'

describe('Chat.vue', () => {
	it('Should render Chat view properly', () => {
		const wrapper = shallowMount(Chat)
		expect(wrapper.exists()).toBeTruthy()
	})
})
