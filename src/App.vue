<template>
	<v-app>		
		<v-container fluid >
			<v-row >
				<!-- <VuetifyAll/> -->
				<TopDashboard @scale-clicked="startDragging" @settings-changed="changeSettings" :version="VERSION"/>
			</v-row>
			<v-row  >
				<FretBoard             
					:ndX="ndX"
					:ndY="ndY"
					:ndScaleID="ndScaleID"
					:isDragging="isDragging"
					:isMobile="isMobile"
					:scColor="scColors[colIndex]"
					:spacing="spacing"
					:labels="labels"
					:enharmonics="enharmonics"
					:other="other"
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
	import { useCookies } from "vue3-cookies";

	export default {
		data() {
			return {
				VERSION: 1.3,
				noteCircles: 15,
				ndX: 40,
				ndY: 40,
				other: false,
				isDragging: false,
				ndScaleID: 0, 
				ndOffX: 10,
				ndOffY: 10,
				isMobile: false,
				scColors: ['#FF9F1C','#1A91FF', '#8AC926','#E72AB2','#1BD9E5'],
				colIndex: 0,
				spacing: '',
				labels: '',
				enharmonics: '',

			}
		},
		
		setup() {
			const { cookies } = useCookies();
			return { cookies };
		},

		components: {
			TopDashboard,
			FretBoard,
			// VuetifyAll,
		},
		mounted() {
			window.addEventListener('mousemove', this.dragging, {passive: true});
			window.addEventListener('touchmove', this.dragging, {passive: true});
			window.addEventListener('mouseup', this.stopDragging, {passive: true});
			window.addEventListener('touchend', this.stopDragging, {passive: true});
			this.readCookies();
		},
		beforeUnmount() {
			window.removeEventListener('mousemove', this.dragging, {passive: true});
			window.removeEventListener('touchmove', this.dragging, {passive: true});
			window.removeEventListener('mouseup', this.stopDragging, {passive: true});
			window.removeEventListener('touchend', this.stopDragging, {passive: true});

		},
		updated() {
			
		},
		methods: {
			startDragging(event) {        
				this.isDragging = true;
				this.ndOffX = this.clientX(event) - event.scaleCircles - event.scaleX
				this.ndOffY = this.clientY(event) - event.scaleCircles - event.scaleY 
				this.ndX = this.clientX(event) - this.ndOffX
				this.ndY = this.clientY(event) - this.ndOffY + window.scrollY;
				this.ndScaleID = event.sid;
				this.other = event.other;

			},

			changeSettings(event) {	
				this.spacing = event.spacing;
				this.labels = event.labels;
				this.enharmonics = event.enharmonics;
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

					this.cookies.set("VuetarColor", this.colIndex.toString())

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
			
			reset() {
				this.cookies.remove("VuetarScales");
				this.cookies.remove("VuetarTuning");
				this.cookies.remove("VuetarFretboard");
				this.cookies.remove("VuetarColor");
				this.cookies.remove("VuetarSettings")
				location.reload();
			},

			acceptsCookies() {
				this.cookies.set("VuetarTest","test")
				var test = this.cookies.get("VuetarTest","test")
				this.cookies.remove("VuetarTest")

				return test;
			},

			readCookies() {
				var cookieColor = this.cookies.get("VuetarColor")
				var cookieVersion = this.cookies.get("VuetarVersion")
				
				if (cookieVersion !== this.VERSION.toString() && this.acceptsCookies()) {
					this.cookies.set("VuetarVersion", this.VERSION.toString())
					this.reset()
				}

				if (cookieColor) {
					if (cookieColor.length !== 0) {
						var newIndex = Number(cookieColor)
						if (newIndex < 0 || newIndex >= this.scColors.length ) newIndex = 0;
						this.colIndex = newIndex
					}
				}					
			}
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

}

body {
	background-color: ##121212 !important;
/*  margin: 8px !important;*/
overflow: hidden;
}

  .grab-cursor {
    cursor: grab;
    cursor: -webkit-grab;
  }

  .point-cursor {
    cursor: pointer;
    cursor: -webkit-pointer;
  }
</style>
