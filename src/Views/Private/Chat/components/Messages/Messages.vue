<template>
	<div
		:class="[
			{ 'message__wrapper--sender': isSender },
			{ 'message__wrapper--recipient': !isSender },
		]"
	>
		<div
			:class="[
				{ 'message__wrapper--sender-content': isSender },
				{ 'message__wrapper--recipient-content': !isSender },
			]"
		>
			<span>{{ message.content }}</span>
		</div>
		<span>{{ date }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMessage } from '@/models/Message.model'
import { getFormatedDate } from '@/helpers/date'

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
		date() {
			return getFormatedDate(this.message.sendAt)
		},
	},
})
</script>

<style scoped lang="scss" src="./Messages.scss" />
