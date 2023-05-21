<template>
	<v-card class="d-flex justify-center modal-container rounded-lg" width="800px" height="200px">
			<v-btn class="settingButton align-self-center" density="compact" icon="mdi-plus" @click="increaseNumber(index)"></v-btn>
			<div v-for="(number, index) in numbersCopy" :key="index" class="d-flex flex-column mx-2 align-self-center">
				<v-btn class="settingButton" density="compact" icon="mdi-plus" @click="decreaseNumber(index)"></v-btn>
				<text class="align-self-center" style="color: black">{{number}}</text>
				<v-btn class="settingButton" density="compact" icon="mdi-minus" @click="increaseNumber(index)"></v-btn>
			</div>
			<v-btn class="settingButton align-self-center" density="compact" icon="mdi-minus" @click="decreaseNumber(index)"></v-btn>
			<v-btn @click="handleOK" class="settingButton align-self-center ml-10">OK</v-btn>

				
	</v-card>

</template>

<script>
	export default {
		props: {
			numbers: {
				type: Array,
				required: true,
			},
		},
		computed: {
			numbersCopy: {
				get() {
				return [...this.numbers.slice().reverse()];
				},
				set(value) {
				this.$emit('update:numbers', value);
				},
			},
		},
		methods: {
			increaseNumber(index) {
				this.numbersCopy[index]++;
			},
			decreaseNumber(index) {
				this.numbersCopy[index]--;
			},
			handleOK() {
				this.$emit('update:numbers', this.numbersCopy);
			},
		},
	};
</script>
<style>
	.modal-container {
		position: absolute;
		top: 10%;
		left: 50%;
		transform: translate(-50%, -10%);
		width: 500px; /* Adjust the width as needed */
		z-index: 9999; /* Ensure the modal appears on top of other elements */
		padding: 20px;
		background: rgba(var(--v-theme-surface-variant),.8); 
	},
	.settingButton {
		background: rgba(var(--v-theme-on-surface));
	}
</style>