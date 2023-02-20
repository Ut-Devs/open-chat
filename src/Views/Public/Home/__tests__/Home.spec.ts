import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import router from '@router/index'

import Home from '../Home.vue'

describe('Home.vue', () => {
	it('Should render Home view properly', () => {
		const wrapper = shallowMount(Home, {
			global: {
				plugins: [router],
			},
		})
		expect(wrapper.exists()).toBeTruthy()
	})
})
