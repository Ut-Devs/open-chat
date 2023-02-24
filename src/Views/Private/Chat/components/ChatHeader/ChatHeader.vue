<template>
	<nav class="header__wrapper">
		<div v-if="isMobile" class="header__wrapper--left">
			<router-link to="contacts">
				<font-awesome-icon icon="fa-solid fa-chevron-left" />
			</router-link>
		</div>
		<div class="header__wrapper--center">
			<div class="header__wrapper--center__image">
				<img src="https://picsum.photos/200" alt="user image" />
			</div>
			<div class="header__wrapper--center__info">
				<span class="header__wrapper--center__info--name">John Doe</span>
				{{ ' ' }}
				<span class="header__wrapper--center__info--status"
					>online
					<font-awesome-icon
						class="header__wrapper--center__info--status--icon"
						icon="fa-solid fa-circle"
				/></span>
			</div>
		</div>
		<div class="header__wrapper--right">
			<font-awesome-icon icon="fa-solid fa-video" />
			<font-awesome-icon icon="fa-solid fa-phone-alt" />
			<font-awesome-icon icon="fa-solid fa-ellipsis-v" />
		</div>
	</nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'ChatHeader',
	computed: {
		isMobile() {
			return window.innerWidth < 768
		},
	},
})
</script>

<styles src="./ChatHeader.scss" lang="scss" />
