<template>
	<div
		:class="[
			{ 'message__wrapper--sender': isSender },
			{ 'message__wrapper--recipient': !isSender },
		]"
	>
		<span>{{ message.content }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMessage } from '@/models/Message.model'

export default defineComponent({
	name: 'Messages',
	props: {
		message: {
			type: Object as PropType<IMessage>,
			required: true,
		},
	},
	computed: {
		isSender() {
			if (this.message.sender === 13) {
				return true
			} else {
				return false
			}
		},
	},
})
</script>

<style scoped lang="scss" src="./Messages.scss" />
