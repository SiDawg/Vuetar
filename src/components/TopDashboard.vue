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
			<v-btn :width="scaleBoxWidth / 3" value="common">Common</v-btn>
			<v-btn :width="scaleBoxWidth / 3" value="modes">Modes</v-btn>
			<v-btn :width="scaleBoxWidth / 3" value="other">Other</v-btn>
		</v-btn-toggle><br>
		
		<v-card-text no-gutters justify-center align-center style="padding: 0px 0px;">

				<svg 
					:width="scaleBoxWidth" 
					:height="dashboardHeight" 
					:viewBox="
					`${-scStroke / 2}, 
					${-scStroke / 2}, 
					${scaleBoxWidth}, 
					${dashboardHeight}`"

				>

					<g v-for="(scales, rowIndex) in scaleButtons.find(group => group.group === btScales).rows" :key="rowIndex">
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

		</v-card-text>
	</v-card>
	<v-card  elevation="2" :height="dashboardHeight" class="rounded-lg mx-1" >
		<v-row class="ma-2">
			<v-col >
				<div class="d-flex align-center flex-column ">
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
				<div class="d-flex align-center flex-column mt-5">
					<div class="mt-0 text-subtitle-2">Overlap</div>
					<v-btn-toggle
					v-model="btOverlap"
					variant="outlined"
					@click="settingsChange"
					divided
					>
						<v-btn value="overlap" title="Overlapped">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 20" width="25" height="20">
								<circle :style="{fill: 'none', stroke: `rgba(var(--v-theme-on-surface))`, 'stroke-width': '2px'}" cx="10" cy="9" r="7"/>
								<circle :style="{fill: 'none', stroke: `rgba(var(--v-theme-on-surface))`, 'stroke-width': '2px'}" cx="17" cy="9" r="7"/>
							</svg>
						</v-btn>
						<v-btn value="discrete" title="Discrete">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
								<circle :style="{fill: 'none', stroke: `rgba(var(--v-theme-on-surface))`, 'stroke-width': '2px'}" cx="8" cy="9" r="6"/>
								<circle :style="{fill: 'none', stroke: `rgba(var(--v-theme-on-surface))`, 'stroke-width': '2px'}" cx="23" cy="9" r="6"/>
							</svg>
						</v-btn>
					</v-btn-toggle>
				</div>
				
			</v-col>
			<v-col>
				<div class="d-flex align-center flex-column ">
					<div class="mt-0 text-subtitle-2">Alignment</div>
					<v-btn-toggle
					v-model="btAlign"
					variant="outlined"
					@click="settingsChange"
					divided
					>
						<v-btn value="column" title="Locked to columns">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 20" width="25" height="20">
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="3" cy="3" r="3"/>
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="12" cy="3" r="3"/>
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="21" cy="3" r="3"/>
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="3" cy="12" r="3"/>
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="21" cy="12" r="3"/>
							</svg>
						</v-btn>
						<v-btn value="centre" title="Centre between frets">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20" width="30" height="20">
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="7" cy="3" r="3"/>
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="17" cy="3" r="3"/>
								<circle :style="{fill: `rgba(var(--v-theme-on-surface))`, stroke: 'none', 'stroke-width': '2px'}" cx="12" cy="12" r="3"/>
							</svg>
						</v-btn>
					</v-btn-toggle>
				</div>
				
				<div class="d-flex align-center flex-column mt-5">
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
				</div>
			</v-col>					
		</v-row>
	</v-card>
	</v-container>

</template>

<script>
	import scaleButtons from './scaleButtons.json'
	export default {
	name: 'TopDashboard',
	

		data() {
			return {

				tickLabels: {
					0: 'A B C',
					1: '1 2 3',
					2: '1 2 b3'
				},
				dashboardHeight: 200,    
				btScales: "common",
				btLabels: "abc",
				btAlign: "column",
				btOverlap: "discrete",
				scaleButtons: scaleButtons,
				scaleCircles: 20,
				itemsPerGroup: 7,
				scalePadding: 15, 
				scStroke: 3,     
			}
		},
		methods: {
			startDragging(event, sid) {
				const { type, touches, clientX, clientY } = event
				const scaleX = event.target.getBoundingClientRect().left 
				const scaleY = event.target.getBoundingClientRect().top
				this.$emit('scale-clicked', {sid, scaleCircles: this.scaleCircles, scaleX, scaleY, clientX, clientY, type, touches});
			},
			settingsChange() {
				this.$emit('settings-changed', {btAlign: this.btAlign, btLabels: this.btLabels});
			}
		},

		computed: {
			scaleBoxWidth() {
			return (this.scaleCircles * 2) * this.itemsPerGroup + (this.scalePadding * (this.itemsPerGroup + 1) + (this.scStroke / 2));
		},

		groupScales() {
			const scaleGroups = [];

			for (let i = 0; i < scaleButtons.length; i++) {

				if (i % this.itemsPerGroup === 0) {
					scaleGroups.push([]);
				}

				const groupIndex = Math.floor(i / this.itemsPerGroup);
				scaleGroups[groupIndex].push(this.scaleButtons[i]);
			}

			return scaleGroups;
		}
	},

};
</script>
<style>
	.scaleCircle {
		fill: rgba(var(--v-theme-surface)); 
		stroke: rgba(var(--v-theme-surface-variant),.3); 
		/*stroke: white; */
		stroke-width: 3;
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