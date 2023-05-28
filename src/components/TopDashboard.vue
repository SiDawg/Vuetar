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
						<v-btn value="b3" title="Note Number (standard: relative to root mode)" style="text-transform: none"> ♭3 </v-btn>
						<v-btn value="123" title="Alternate Note Number (index)"> 123 </v-btn>
						
					</v-btn-toggle>
				</div>

				
			</v-col>
			<v-col>				
				<div class="d-flex align-center flex-column mt-0">
					<div class="d-flex align-center mt-2">
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
					<v-btn class="mt-3" @click="handleReset" density="compact" color="#555555" icon="mdi-autorenew"></v-btn>
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
				btScales: "common",
				btLabels: "abc",
				btSpacing: WIDE,
				btOverlap: "discrete",
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
				var blOther = sid === 0;

				if (sid === 0) {
					if (this.dropDownSelected === '' ) return
					sid = this.scaleSelections.dropDown.find(dropDown => dropDown.name === this.dropDownSelected)?.sid;
				}

				if (!sid) return
				this.$emit('scale-clicked', {sid, blOther, scaleCircles: this.scaleCircles, scaleX, scaleY, clientX, clientY, type, touches});
				this.blHasDragged = true

			},
			settingsChange() {
				this.cookies.set("VuetarSettings", this.btSpacing + '|' + this.btLabels)
				this.$emit('settings-changed', {btSpacing: this.btSpacing, btLabels: this.btLabels});
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
					}
				}
				
			},
			handleReset() {
				this.cookies.remove("VuetarSettings");
				this.cookies.remove("VuetarColor");
				this.cookies.remove("VuetarFretboard");
				location.reload();
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
	}
</style>