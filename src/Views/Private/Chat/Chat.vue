<template>
	<div class="chat">
		<nav class="chat__header"></nav>
		<section class="chat__body">
			<template v-for="message in messages">
				<Messages :message="message" />
			</template>
		</section>
		<div class="chat__form">
			<SendMessageInput />
		</div>
	</div>
</template>

<script lang="ts">
import Messages from './components/Messages/Messages.vue'
import SendMessageInput from './components/SendMessageInput/SendMessageInput.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	components: {
		SendMessageInput,
		Messages,
	},
	data: () => {
		return {
			messages: [
				{
					id: 1,
					content: 'Somos niggas',
					sendAt: new Date(),
					recipient: 13,
					sender: 12,
				},
				{
					id: 2,
					content: 'Somos negs',
					sendAt: new Date(),
					recipient: 12,
					sender: 13,
				},
				{
					id: 3,
					content: 'Somos branquelos',
					sendAt: new Date(),
					recipient: 12,
					sender: 13,
				},
			],
		}
	},
})
</script>

<styles src="./Chat.scss" lang="scss" />
