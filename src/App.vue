<template>
	<v-app>
		<v-container fluid >
			<v-row >
				<!-- <VuetifyAll/> -->
				<TopDashboard @scale-clicked="startDragging" @settings-changed="changeSettings" @mousedown.prevent/>
			</v-row>
			<v-row  >
				<FretBoard             
				:ndX="ndX"
				:ndY="ndY"
				:ndScaleID="ndScaleID"
				:isDragging="isDragging"
				:isMobile="isMobile"
				:scColor="scColors[colIndex]"
				:btSpacing="btSpacing"
				:btLabels="btLabels"
				/>
			</v-row>

			<!-- <div style="pointer-events: none; position: absolute; top: 0; left: 0; z-index: 10; height: 100%; width: 100%;"> -->

				<!-- {{ this.ndX + ' ' + this.ndY }}<br> -->
				<!-- {{ this.ndOffX + ' ' + this.ndOffY }}<br> -->

				<!-- </div> -->
		</v-container>
		<svg v-if="isDragging" :width="noteCircles * 2" :height="noteCircles * 2" 
			:style="`pointer-events: none; position: absolute; z-index: 10; transform: translate(${ndX - noteCircles}px, ${ndY - noteCircles}px)`">
			<circle :cx="noteCircles" :cy="noteCircles" :r="noteCircles" :fill="scColors[colIndex]"/>
		</svg>
	</v-app>
</template>

<script>
	/* eslint-disable */
	import TopDashboard from './components/TopDashboard.vue'
	import FretBoard from './components/FretBoard.vue'
	// import VuetifyAll from './components/VuetifyAll.vue'

	export default {
		data() {
			return {
				noteCircles: 15,
				ndX: 40,
				ndY: 40,
				isDragging: false,
				ndScaleID: 0, 
				ndOffX: 10,
				ndOffY: 10,
				isMobile: false,
				scColors: ['#FF9F1C','#1A91FF', '#8AC926','#E72AB2','#1BD9E5'],
				colIndex: 0,
				btSpacing: '5',
				btLabels: 'abc',

			}
		},

		components: {
			TopDashboard,
			FretBoard,
			// VuetifyAll,
		},
		
		methods: {
			startDragging(event) {        
				this.isDragging = true;
				this.ndOffX = this.clientX(event) - event.scaleCircles - event.scaleX
				this.ndOffY = this.clientY(event) - event.scaleCircles - event.scaleY 
				this.ndX = this.clientX(event) - this.ndOffX
				this.ndY = this.clientY(event) - this.ndOffY + window.scrollY;
				this.ndScaleID = event.sid;

			},

			changeSettings(event) {				
				this.btSpacing = event.btSpacing;
				this.btLabels = event.btLabels;
			},

			dragging(event) {
				if (this.isDragging) {
					this.ndX = this.clientX(event) - this.ndOffX;
					this.ndY = this.clientY(event) - this.ndOffY + window.scrollY;
				}
			},

			stopDragging() {
				if (this.isDragging === true) {
					this.colIndex++;
					if (this.colIndex >= this.scColors.length) this.colIndex = 0;
					this.isDragging = false;
				}
				
			},

			clientX(event) {
				if (event.type.startsWith("touch")) {
					this.isMobile = true;
					return event.touches[0].clientX;
				} else {
					this.isMobile = false;
					return event.clientX;
				}
			},

			clientY(event) {
				if (event.type.startsWith("touch")) {
					return event.touches[0].clientY;
				} else {
					return event.clientY;
				}
			},
		},
		mounted() {
			window.addEventListener('mousemove', this.dragging, {passive: true});
			window.addEventListener('touchmove', this.dragging, {passive: true});
			window.addEventListener('mouseup', this.stopDragging, {passive: true});
			window.addEventListener('touchend', this.stopDragging, {passive: true});
		},
		beforeUnmount() {
			window.removeEventListener('mousemove', this.dragging, {passive: true});
			window.removeEventListener('touchmove', this.dragging, {passive: true});
			window.removeEventListener('mouseup', this.stopDragging, {passive: true});
			window.removeEventListener('touchend', this.stopDragging, {passive: true});

		}
	}
</script>

<style>
	.app {
		display: flex;
		justify-content: center;
		height: 100vh;
		align-items: center;
		border: 1px solid #888888;
		border-radius:10px;
		background-color: #43485E;
		margin: 10px;

	}

	.menuArea {
		display: flex;
		justify-content: center;
		height: 100px;
		align-items: center;
		margin: 10px;
/*  border: 1px solid #888888;*/
/*  border-radius:10px;*/
/*  background-color: #505560;  */
}

body {
	background-color: ##121212 !important;
/*  margin: 8px !important;*/
overflow: hidden;
}

</style>
