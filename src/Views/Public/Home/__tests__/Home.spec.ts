import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

import Home from '../Home.vue'

describe('Home.vue', () => {
	it('Should render Home view properly', () => {
		const wrapper = mount(Home, {
			stubs: ['router-link'],
		})
		expect(wrapper.exists()).toBeTruthy()
	})
})
