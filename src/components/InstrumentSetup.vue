<template>
	<v-card class="d-flex modal-container rounded-lg flex-shrink-1" elevation="4" width="auto" height="auto">
		<div class="d-flex flex-column justify-center">
			<div class="d-flex">
				<v-btn class="settingButton align-self-center" color="#777777" density="compact" icon="mdi-plus" @click="changeStrings('left','add')"></v-btn>
				<v-btn class="settingButton align-self-center" color="#777777" density="compact" icon="mdi-minus" @click="changeStrings('left','remove')"></v-btn>

				<div v-for="(number, index) in tuningCopy" :key="index" class="d-flex flex-column mx-2 align-self-center">
					<v-btn  density="compact" color="#777777" variant="plain" icon="mdi-menu-up" @click="increaseNumber(index)"></v-btn>
					<text class="align-self-center" style="color: black">{{number}}</text>
					<v-btn  density="compact" color="#777777" variant="plain" icon="mdi-menu-down" @click="decreaseNumber(index)"></v-btn>
				</div>
				<v-btn class="settingButton align-self-center" color="#777777" density="compact" icon="mdi-minus" @click="changeStrings('right','remove')"></v-btn>
				<v-btn class="settingButton align-self-center" color="#777777" density="compact" icon="mdi-plus" @click="changeStrings('right','add')"></v-btn>
			</div>
			<div class="d-flex justify-center align-self-center mt-8">			
				<v-btn @click="handleOK" style="text-transform: none" color="#41b883" class="settingButton  align-self-center mx-1">OK</v-btn>
				<v-btn @click="handleCancel" style="text-transform: none" color="#777777" class="settingButton  align-self-center  mx-1">Cancel</v-btn>
			</div>
		</div>
	</v-card>

</template>

<script>
	import * as Scales from '../scales.js'

	export default {			
		props: {
			tuning: {
				type: Array,
				required: true,
			},
		},
		data() {
			return {
				tuningCopy: this.tuning.slice().reverse()
			}
		},

		methods: {
			increaseNumber(index) {
				this.tuningCopy[index] = Scales.noteName(Scales.noteAdd(Scales.noteNum(this.tuningCopy[index]),1));
				// console.log(this.tuningCopy)
			},
			decreaseNumber(index) {
				this.tuningCopy[index] = Scales.noteName(Scales.noteAdd(Scales.noteNum(this.tuningCopy[index]),-1));
				// console.log(this.tuningCopy)
			},
			handleOK() {
				this.$emit('update-tuning', {blOK: true, newTuning: this.tuningCopy.slice().reverse()});
			},
			handleCancel() {
				this.$emit('update-tuning', {blOK: false, newTUning: undefined});
			},
			changeStrings(end, action) {
				switch (end) {
					case 'left':
						switch (action) {
							case 'add':
								this.tuningCopy.unshift(Scales.noteName(Scales.noteAdd(Scales.noteNum(this.tuningCopy[0]),7)));
								break;
							case 'remove':
								this.tuningCopy.shift();
								break;
						}
						break;
					case 'right':
						switch (action) {
							case 'add':
								this.tuningCopy.push(Scales.noteName(Scales.noteAdd(Scales.noteNum(this.tuningCopy[this.tuningCopy.length - 1]),5)));
								break;
							case 'remove':
								this.tuningCopy.pop();
								break;
						}
						break;
				}
			}		
		},
	};
</script>
<style>
	.modal-container {
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -15%);
		z-index: 9999; /* Ensure the modal appears on top of other elements */
		padding: 20px;
		background: rgba(var(--v-theme-surface-variant),1); 
	},
	.settingButton {
		background: rgba(var(--v-theme-on-surface))
	}
</style>