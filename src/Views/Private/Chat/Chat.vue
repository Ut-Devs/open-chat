import SendMessageInput from
'./components/SendMessageInput/SendMessageInput.vue';

<template>
	<div class="chat">
		<nav class="chat__header"></nav>
		<section class="chat__body"></section>
		<div class="chat__form">
			<SendMessageInput />
		</div>
	</div>
</template>

<script lang="ts">
import SendMessageInput from './components/SendMessageInput/SendMessageInput.vue'
import { defineComponent } from 'vue'

export default defineComponent({
	components: {
		SendMessageInput,
	},
})
</script>

<styles src="./Chat.scss" lang="scss" />
