<template>
	<v-container class="bg-background d-flex justify-center flex-shrink-0">
		<v-card :width="scaleBoxWidth" :min-width="scaleBoxWidth" :height="dashboardHeight" elevation="2"  class="rounded-lg mx-1">
			<v-btn-toggle
				v-model="btScales"
				class="rounded-t-lg rounded-b-0"
				divided
				elevation="2"  
				density="compact" 
				mandatory="force"
				>
				<v-btn style="text-transform: none" :width="scaleBoxWidth / 3" value="common">Common</v-btn>
				<v-btn style="text-transform: none" :width="scaleBoxWidth / 3" value="modes">Modes</v-btn>
				<v-btn style="text-transform: none" :width="scaleBoxWidth / 3" value="other">Other</v-btn>

			</v-btn-toggle><br>
		
		<v-card-text no-gutters justify-center align-center class="d-flex justify-center ma-0 pa-0">
				<div v-if="btScales !== 'other'">
					<svg 
					:width="groupWidth" 
					:height="dashboardHeight" 
					:viewBox="`0, 0, ${groupWidth}, ${dashboardHeight}`"
					align="center"			
					>
						<g v-for="(scales, rowIndex) in scaleSelections.buttons.find(group => group.group === btScales).rows" :key="rowIndex">

							<g v-for="(scale, itemIndex) in scales" :key="itemIndex">

								<circle 
									:cx="`${itemIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (itemIndex + 1))}`" 
									:cy="`${rowIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (rowIndex + 1))}`" 
									:r="scaleCircles" 
									class="scaleCircle"
									:id="scale.sid"
									@mousedown.prevent="startDragging($event, scale.sid)" 
									@touchstart.prevent="startDragging($event, scale.sid)" >
								
								<title>{{ scale.name }}</title>
								</circle>
								
								<text 
									:x="`${itemIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (itemIndex + 1))}`" 
									:y="`${rowIndex * (scaleCircles * 2) + scaleCircles + (scalePadding * (rowIndex + 1))}`" 
									class="scaleText"
									pointer-events="none"
								>
								{{ scale.shortname }}
								</text>
								
							</g>

						</g>
					</svg>
				</div>
				<div v-if="btScales == 'other'" 
					class="d-flex flex-grow-1 flex-column ma-0 pa-0">
					<v-select				
						class="mt-5 mx-5"
						:items="dropDownOptions"
						v-model="dropDownSelected"
						variant="outlined"	
						label="Select then drag below"
						single-line />
					
					<svg 
						x="0" y="0"
						class="align-self-center"
						:width="scaleCircles * 2 + 4"
						:height="scaleCircles * 2 + 4"								
						:viewBox="`0, 0, ${scaleCircles * 2 + 4}, ${scaleCircles * 2 + 4}`">
						<circle 
							:cx="scaleCircles + 2 " 
							:cy="scaleCircles +  2"
							:r="scaleCircles" 
							class="scaleCircle"
							@mousedown.prevent="startDragging($event, 0)" 
							@touchstart.prevent="startDragging($event, 0)" >
								
							<title>Other</title>
						</circle>
						<text 
							:x="scaleCircles + 2" 
							:y="scaleCircles +  2"
							class="scaleText"
							pointer-events="none">
							{{scaleByDropDownName(dropDownSelected).shortname}}
						</text>
					</svg>
					
					
				</div>
				<text :style="{ position: 'absolute', bottom: '3px' , left: '65px' , color: `rgba(var(--v-theme-on-surface),0.5)`}" v-if="!blHasDragged" >
					Drag-and-drop scales above to fretboard</text>				
		</v-card-text>
	</v-card>
	<v-card  elevation="2" :height="dashboardHeight" class="rounded-lg mx-1" >
		<v-row class="ma-2">
			<v-col >
				<div class="d-flex align-center flex-column ">
					<div class="text-subtitle-2">Spacing</div>
					<v-btn-toggle
						v-model="btSpacing"
						variant="outlined"
						@click="settingsChange"
						divided
						mandatory
						>
						<v-btn :value="WIDE" title="Comfortable">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
								<rect :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" 
									x="0" y="0" width="2" height="20"/>
								<circle :style="{fill: 'none', stroke: `rgba(var(--v-theme-on-surface))`, 'stroke-width': '2px'}" cx="15" cy="9" r="6"/>
								<rect :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" 
									x="28" y="0" width="2" height="20"/>

							</svg>
						</v-btn>
						<v-btn :value="NARROW" title="Tight">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
								<rect :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" 
									x="6" y="0" width="2" height="20"/>
								<circle :style="{fill: 'none', stroke: `rgba(var(--v-theme-on-surface))`, 'stroke-width': '2px'}" cx="15" cy="9" r="6"/>
								<rect :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" 
									x="22" y="0" width="2" height="20"/>

							</svg>
						</v-btn>
					</v-btn-toggle>
				</div>
				<div class="d-flex align-center flex-column mt-3">
					<div class="mt-0 text-subtitle-2">Labels</div>
					<v-btn-toggle
					v-model="btLabels"
					variant="outlined"
					@click="settingsChange"
					divided
					mandatory
					>
						<v-btn value="abc" title="Note Name"> ABC </v-btn>
						<v-btn value="b3" title="Degrees (relative to parallel-Major)" style="text-transform: none"> b3 </v-btn>
						<v-btn value="123" title="Index"> 123 </v-btn>
						
					</v-btn-toggle>
				</div>				
			</v-col>
			<v-col>				
				<div class="d-flex align-center flex-column ">
					<div class="text-subtitle-2">Enharmonics</div>
					<v-btn-toggle
						v-model="btEnharmonics"
						variant="outlined"
						@click="settingsChange"
						divided
						mandatory
						>
						<v-btn value="manual" title="Manual: based on drop area">
							<svg viewBox="0 0 30 20" width="30" height="20" xmlns="http://www.w3.org/2000/svg">
								<rect x="0" y="0" width="2" height="20" :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" />
								<rect x="28" y="0" width="2" height="20" :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" />
								<path :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}"  d="M 4.346 4.986 L 4.346 4.521 Q 5.964 4.023 7.06 3.417 L 7.276 3.608 Q 7.052 5.243 7.052 8.506 L 7.06 9.211 Q 8.305 7.908 8.679 7.696 Q 9.052 7.485 9.725 7.485 Q 10.513 7.485 11.202 7.866 Q 11.891 8.248 12.261 9.045 Q 12.63 9.842 12.63 10.913 Q 12.63 12.988 11.244 14.403 Q 9.858 15.819 7.907 15.819 Q 6.828 15.819 5.641 15.246 Q 5.765 12.415 5.765 7.875 L 5.749 6.19 L 5.749 5.808 Q 5.749 5.235 5.624 5.061 Q 5.5 4.886 5.259 4.886 Q 5.002 4.886 4.346 4.986 Z M 7.06 14.482 Q 7.84 14.93 8.637 14.93 Q 9.758 14.93 10.468 14.113 Q 11.177 13.295 11.177 11.635 Q 11.177 10.182 10.592 9.46 Q 10.007 8.738 9.185 8.738 Q 8.679 8.738 8.231 9.004 Q 7.782 9.269 7.479 9.717 Q 7.176 10.166 7.102 10.589 Q 7.06 10.838 7.06 11.892 Z" style="white-space: pre;"/>
								<path :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}"  d="M 16.304 7.731 L 18.691 7.731 L 19.321 4.765 L 20.222 4.765 L 19.592 7.731 L 22.668 7.731 L 23.291 4.765 L 24.192 4.765 L 23.569 7.731 L 25.005 7.731 L 25.005 8.624 L 23.379 8.624 L 22.829 11.342 L 25.005 11.342 L 25.005 12.243 L 22.646 12.243 L 22.016 15.187 L 21.116 15.187 L 21.745 12.243 L 18.655 12.243 L 18.032 15.187 L 17.131 15.187 L 17.754 12.243 L 16.304 12.243 L 16.304 11.342 L 17.944 11.342 L 18.508 8.624 L 16.304 8.624 Z M 19.409 8.624 L 18.838 11.342 L 21.929 11.342 L 22.485 8.624 Z" style="white-space: pre;"/>
							</svg>
						</v-btn>						
						<v-btn value="auto" title="Auto: minimum symbols" >
							<svg viewBox="0 0 30 20" width="30" height="20" xmlns="http://www.w3.org/2000/svg">
								<path :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" d="M 13.732 14.929 L 3.499 10.652 L 3.499 9.103 L 13.732 4.816 L 13.732 6.672 L 5.828 9.873 L 13.732 13.073 Z" style="white-space: pre;"/>
								<path :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none'}" d="M 16.769 7.935 L 19.156 7.935 L 19.786 4.969 L 20.687 4.969 L 20.057 7.935 L 23.133 7.935 L 23.756 4.969 L 24.657 4.969 L 24.034 7.935 L 25.47 7.935 L 25.47 8.828 L 23.844 8.828 L 23.294 11.546 L 25.47 11.546 L 25.47 12.447 L 23.111 12.447 L 22.481 15.391 L 21.581 15.391 L 22.21 12.447 L 19.12 12.447 L 18.497 15.391 L 17.596 15.391 L 18.219 12.447 L 16.769 12.447 L 16.769 11.546 L 18.409 11.546 L 18.973 8.828 L 16.769 8.828 Z M 19.874 8.828 L 19.303 11.546 L 22.394 11.546 L 22.95 8.828 Z" style="white-space: pre;"/>
							</svg>
						</v-btn>
						<v-btn value="major" title="From parallel Major" style="text-transform: none"> Maj </v-btn>
					</v-btn-toggle>

					<div class="d-flex align-center mt-7">
						<svg viewBox="0 0 500 500" width="50" height="50" x="0" y="0" xmlns="http://www.w3.org/2000/svg">
							<path style="stroke-linecap: round; stroke-miterlimit: 1; stroke-linejoin: round; stroke: rgb(52, 73, 94); fill: rgb(52, 73, 94); stroke-width: 0px;" d="M 186.187 249.516 L 193.452 193.583 L 341.263 19.193 L 421.911 15.613 L 424.673 49.162 L 361.956 56.584 L 239.344 224.402 L 186.187 249.516 Z">
							</path>
							<g transform="matrix(1.542338, 1.120596, 1.120596, -1.542338, -303.13028, 417.528931)" style="">
								<g transform="translate(178.06 235.01)">
									<path d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z" fill="#41b883"/>
								</g>
								<g transform="translate(178.06 235.01)">
									<path d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z" fill="#34495e"/>
								</g>
							</g>
						</svg>
						<text :style="{fill: `rgba(var(--v-theme-on-surface))`}">Vuetar</text>
					</div>
					

				</div>
			</v-col>					
		</v-row>

	</v-card>
	</v-container>

</template>

<script>
	import scaleSelections from './scaleSelections.json'
	import { useCookies } from "vue3-cookies";


	const dropDownOptions = scaleSelections.dropDown.flatMap(dropDown => dropDown.name);

	const WIDE = '20';
	const NARROW = '5';

	export default {
	name: 'TopDashboard',	

		data() {
			return {
				COOKIE_SCALES: 0,
				COOKIE_TUNING: 1,
				COOKIE_COLOR: 2,
				COOKIE_SPACING: 3,
				COOKIE_LABELS: 4,

				WIDE,
				NARROW,
				dashboardHeight: 200,    
				btScales: 'common',
				btLabels: 'abc',
				btSpacing: WIDE,
				btOverlap: 'discrete',
				btEnharmonics: 'auto',
				scaleSelections: scaleSelections,
				scaleCircles: 20,
				itemsPerGroup: 7,
				scalePadding: 15, 
				scStroke: 3,   
				dropDownOptions: dropDownOptions,
				dropDownSelected: "",
				blHasDragged: false,
			}
		},
		setup() {
			const { cookies } = useCookies();
			return { cookies };
		},
		mounted() {
			this.readCookie(this.cookies.get("VuetarSettings"));
			this.settingsChange();

		},

		updated() {

		},

		computed: {
			maxNumberOfButtons() {
				let maxItemCount = 0;

				scaleSelections.buttons.forEach((group) => {
					group.rows.forEach((row) => {
						if (row.length > maxItemCount) {
						maxItemCount = row.length;
						}
					});
				});
				return maxItemCount;
			},
			groupWidth() {
				var maxButtons = 0;
				scaleSelections.buttons.find(group => group.group === this.btScales).rows.forEach((row,i) => {
					if (row.length > maxButtons) maxButtons = row.length;
				});
				return (this.scaleCircles * 2) * maxButtons + (this.scalePadding * (maxButtons + 1) + (this.scStroke / 2));
			},

			scaleBoxWidth() {
				return (this.scaleCircles * 2) * this.maxNumberOfButtons + (this.scalePadding * (this.maxNumberOfButtons + 1) + (this.scStroke / 2));
			},

			
		},

		methods: {
			startDragging(event, sid) {
				const { type, touches, clientX, clientY } = event
				const scaleX = event.target.getBoundingClientRect().left 
				const scaleY = event.target.getBoundingClientRect().top
				var other = sid === 0;

				if (sid === 0) {
					if (this.dropDownSelected === '' ) return
					sid = this.scaleSelections.dropDown.find(dropDown => dropDown.name === this.dropDownSelected)?.sid;
				}

				if (!sid) return
				this.$emit('scale-clicked', {sid, other, scaleCircles: this.scaleCircles, scaleX, scaleY, clientX, clientY, type, touches});
				this.blHasDragged = true

			},
			settingsChange() {
				this.cookies.set("VuetarSettings", this.btSpacing + '|' + this.btLabels + '|' + this.btEnharmonics)
				this.$emit('settings-changed', {spacing: this.btSpacing, labels: this.btLabels, enharmonics: this.btEnharmonics});
			},
			scaleByDropDownName(dropDownName) {
				var scObj;
				scObj = scaleSelections.dropDown.find(dropDown => dropDown.name === dropDownName)
				if (scObj) {
					return scObj;
				} else {
					return {
						name: '',
						shortname: '',
						scaleType: '',
						mode: -1,
						scaleTheme: -1,
						sid : -1}
				}
			},
			readCookie(clientcookie) {
				if (clientcookie) {
					var cookieBites = clientcookie.split("|")	
					this.blHasDragged = true
					if (cookieBites[0].length !== 0 && cookieBites[1] !== 0 ) {
						this.btSpacing 	= cookieBites[0]
						this.btLabels 	= cookieBites[1]
						this.btEnharmonics = cookieBites[2]
					}
				}
				
			}

		}

};
</script>
<style>
	.scaleCircle {
		fill: rgba(var(--v-theme-surface)); 
		stroke: rgba(var(--v-theme-surface-variant),.3); 
		/*stroke: white; */
		stroke-width: 3;
		cursor: grab;
		cursor: -webkit-grab;
	}

	.three-slide >>> .v-slider {
		height: 10px !important; /* Set the height of the slider thumb */
		width: 10px !important;
	}

	.three-slide >>> .v-slider__track-container {
		height: 10px !important; /* Set the height of the slider track */
		width: 10px !important;
	}

	.three-slide >>> .v-slider__container {
		height: 10px !important; /* Set the height of the slider track */
		width: 10px !important;
	}

	.three-slide .v-slider__vertical-min-height {
		height: 10px !important; /* Set the height of the slider thumb */
		width: 10px !important;
	}

	.scaleText {
		dominant-baseline: middle;
		fill: rgba(var(--v-theme-on-surface));
		text-anchor: middle;
		text-shadow: 1px 1px 1px #000000;
		pointer-events: none;
		user-select: none;
	}

	.noteCircle {
		fill: rgba(var(--v-theme-surface)); 
		stroke: rgba(var(--v-theme-surface-variant),.3); 
		/*stroke: white; */
		stroke-width: 3;
		cursor: grab;
		cursor: -webkit-grab;
		pointer-events: none;
	}

	.noteLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		text-shadow: 1px 1px 1px #000000;
		pointer-events: none;
		user-select: none;
	}
</style>