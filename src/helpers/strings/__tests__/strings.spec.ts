import { RemoveDuplicate } from '..'
import { describe, it, expect } from 'vitest'

describe('RemoveDuplicate', () => {
	it('should remove duplicate', () => {
		expect(RemoveDuplicate(['a', 'b', 'c', 'a'])).toStrictEqual(['a', 'b', 'c'])
	})
})
