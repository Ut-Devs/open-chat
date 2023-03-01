<template>
	<router-link to="chat" class="contact">
		<div class="contact__image">
			<img src="https://picsum.photos/200" alt="contact image" />
		</div>
		<div class="contact__info">
			<div class="contact__info__left">
				<h6 class="contact__info--name">John Doe</h6>
				<font-awesome-icon
					class="contact__info--status"
					icon="fa-solid fa-circle"
					color="#0f0"
					size="xs"
				/>
			</div>
			<p class="contact__last-message">last message text and now</p>
		</div>
		<span class="contact__last-message-time">10:34</span>
	</router-link>
</template>

<style src="./Contact.scss" lang="scss" scoped />
