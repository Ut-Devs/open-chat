<template>
	<div
		:class="[
			{ 'message__wrapper--sender': isSender },
			{ 'message__wrapper--recipient': !isSender },
		]"
		ref="message"
	>
		<div v-if="!isSender" class="message__wrapper__info">
			<div class="message__wrapper__info--image">
				<img src="https://picsum.photos/200" alt="user image" />
			</div>
			<span>Jhon Doe</span>
		</div>
		<div
			:class="[
				{ 'message__wrapper--sender-content': isSender },
				{ 'message__wrapper--recipient-content': !isSender },
			]"
		>
			<span>{{ message.content }}</span>
		</div>
		<span class="message__wrapper--date">{{ date }}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IMessage } from '@models/Message.model'
import { getFormatedDate } from '@/helpers/date'
import { UserStore } from '@/store/user'

export default defineComponent({
	name: 'Messages',
	props: {
		message: {
			type: Object as PropType<IMessage>,
			required: true,
		},
	},
	setup() {
		const userStore = UserStore()

		return {
			userStore,
		}
	},
	mounted() {
		const message = this.$refs.message as HTMLDivElement
		message.scrollIntoView({ behavior: 'smooth' })
	},
	computed: {
		isSender() {
			return this.message.sender === this.userStore.getSessionId
		},
		date() {
			return getFormatedDate(new Date(this.message.sendAt))
		},
	},
})
</script>

<style scoped lang="scss" src="./Message.scss" />
