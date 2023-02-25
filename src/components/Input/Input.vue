<template>
	<div class="input-wrapper">
		<input
			id="input-text"
			:autocomplete="isMobile ? 'off' : 'on'"
			type="text"
			v-model="text"
		/>
		<label
			for="input-text"
			:class="[
				{ 'input-wrapper--not-empty': !isEmpty },
				{ 'input-wrapper--float': float },
			]"
		>
			<slot
		/></label>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'Input',
	props: {
		float: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		isEmpty() {
			return this.text === ''
		},
		isMobile() {
			return window.innerWidth < 500
		},
	},
	data: () => ({
		text: '',
	}),
})
</script>

<style lang="scss" src="./Input.scss" scoped />
