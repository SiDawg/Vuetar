<template>
	<div v-if="showSettings" ><InstrumentSetup :tuning="tuning" @update-tuning="handleUpdatedTuning" /></div>
	<v-container ref="dropArea" @mouseup="handleNoteDrop"  @touchend="handleNoteDrop" @scroll="handleScroll" fluid style="overflow-x: auto; ">		
		<svg :width="this.width" :height="(stringGap * strings) + TOPFRETBOARDGAP">
			<rect :width="this.width - fretGap" :height="stringGap * strings" :x="LEFTFRETBOARDGAP + fretGap" :y="TOPFRETBOARDGAP" :style="{fill: `rgba(var(--v-theme-surface))`}"/>			
			
			<!-- Draw Frets -->
			<g v-for="(i,index) in frets" :key="index">
				<line 
					:x1="(i * fretGap) + LEFTFRETBOARDGAP" 
					y1="40"
					:x2="(i * fretGap) + LEFTFRETBOARDGAP" 
					:y2="stringGap * strings + TOPFRETBOARDGAP" 
					:style="{stroke: (index === 0 || index == 12) ? `rgba(var(--v-theme-on-surface), 1)` : `rgba(var(--v-border-color), var(--v-border-opacity))`, strokeWidth: '5'}" />
				<text
					v-if="[3, 5, 7, 9, 12, 15, 17, 19].includes(index)"
					:x="(i * fretGap) - 2.5 - (fretGap / 2) + LEFTFRETBOARDGAP"
					y="30"
					text-anchor="middle"
					fill="white"
					style="user-select: none"  >
					{{ index }}
				</text>

			</g>
			<!-- Draw Strings -->
			<g v-for="(i,index) in strings" :key="index">
				<line 
					x1="0" 
					:y1="index * stringGap + stringGap / 2  + TOPFRETBOARDGAP" 
					:x2="neckLength + LEFTFRETBOARDGAP" 
					:y2="index * stringGap + stringGap / 2  + TOPFRETBOARDGAP" 
					:style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`}" />

			</g>		
		
			<!-- Draw Tuning -->
<!-- 			<svg viewBox="0 0 500 500" fill="white" :x="LEFTFRETBOARDGAP - 11" :y="TOPFRETBOARDGAP - 20" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
				<path style="" d="M 328.895 91.935 L 13.754 407.076 L 13.754 488.771 L 86.541 488.771 L 407.043 169.882 L 328.895 91.935 Z"/>
				<path style="" d="M 356.952 64.584 L 408.995 12.541 C 447.935 -20.914 518.883 63.596 487.238 90.784 L 435.295 142.727 L 356.952 64.584 Z"/>
			</svg> -->
			<svg @click="showSettings = !showSettings" viewBox="0 0 500 500" class="point-cursor" width="20" fill="#41b883" :x="5" :y="TOPFRETBOARDGAP - 20" height="20" xmlns="http://www.w3.org/2000/svg">
				<path d="M 31.872 45.995 C 77.157 -7.041 428.541 -3.2 466.463 45.995 C 505.76 98.049 494.66 219.057 466.463 268.59 C 435.753 314.777 72.078 322.402 31.872 268.59 C 0 219.243 -1.92 92.26 31.872 45.995 Z" style=""/>
				<rect x="350.186" y="268.58" width="111.604" height="180.191" style="" transform="matrix(0.999965, 0.008418, 0, 1.000035, -158.457766, 17.411698)"/>
			</svg>
			<g v-for="(string,i) in this.tuning" :key="i">
				<text
					x="15"
					:y="i * stringGap + stringGap / 2  + TOPFRETBOARDGAP + 4"
					text-anchor="middle"
					fill="white"
					style="user-select: none " >
					{{ string }}
				</text>
			</g>

			<!-- Draw all notes from all scales (using pre computed object 'fretboard', which reads the 'scales' object) -->
			<g v-for="pos in this.fretboard" :key="pos">
				<circle v-if="pos.note.ntShow"
					:cx="pos.fret * this.fretGap + LEFTFRETBOARDGAP
						+ (this.fretGap / 2)
						+ this.noteR
						+ (pos.scIndex * (this.noteDiameter + this.noteGapBetween))
						- (((scales.length * this.noteDiameter) + (this.noteGapBetween * (scales.length - 1))) / 2)"

					:cy="(pos.string * this.stringGap) + (stringGap / 2) + TOPFRETBOARDGAP" :r="this.noteR" 
					:fill="pos.fillc" 
					:fill-opacity="pos.note.ntOpacity"
					:stroke="pos.note.ntStroke ? pos.fillc : 'none'"
					:stroke-width="pos.note.ntStroke ? 2 : 0"
					:stroke-opacity="pos.note.ntStroke ? 1 : 0"
				/>

				<text v-if="pos.note.ntShow"
					class="scaleText" 
					:x="pos.fret * this.fretGap + LEFTFRETBOARDGAP
						+ (this.fretGap / 2)
						+ this.noteR
						+ (pos.scIndex * (this.noteDiameter + this.noteGapBetween))
						- (((scales.length * this.noteDiameter) + (this.noteGapBetween * (scales.length - 1))) / 2)"
					:y="pos.string * this.stringGap + 56" :r="this.noteR"
					fill="`rgba(var(--v-theme-surface))`">

					<template v-if="this.btLabels === '123'">
						{{pos.note.ntScaleNum}}
						<!-- {{pos.ntIndex}} -->
					</template>

					<template v-else-if="this.btLabels === 'b3'">
						{{pos.note.ntMajorRelNum}}
					</template>

					<template v-else>
						{{pos.note.ntName}}
					</template>
					

				</text>
			</g>

			<g  v-if="isDragging" >		
				<!-- <text :x="hoverX" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{Math.floor(hoverX)}}</text> -->
				<text :x="hoverX + LEFTFRETBOARDGAP" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{noteName(hoverNote)}}</text>
				<!-- <text :x="hoverX" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{noteName(hoverNote)}}</text> -->
			</g>
		</svg>		
	</v-container>
	<!-- Draw a list of scales that are currently dropped -->
	<v-container fluid style="padding: 15px;">
		<svg :width="this.width" :height="this.scales.length * (this.noteDiameter + this.noteGapBetween)">
			<g v-for="(scale, index) in this.scales" :key="index">
				<circle 
					:cx="this.noteR + this.noteGapBetween" 
					:cy="(index * (this.noteR * 2 + this.noteGapBetween)) + this.noteR"
					:fill="scale.scColor"
					fill-opacity="1"
					:r="this.noteR"
					@click="removeScale(index)"

				/>

				<text dominant-baseline="middle" alignment-baseline="middle" :x="this.noteDiameter + 10" 
					:y="(index * (this.noteDiameter + this.noteGapBetween)) + this.noteR"
					fill="white">
					{{noteName(scale.tonic) + ' ' + scale.scName}}
				</text>

				<svg xmlns="http://www.w3.org/2000/svg" 
					:x="4" 
					:y="(index * (this.noteDiameter + this.noteGapBetween)) + 1"
					:height="noteR * 2"
					:width="noteR * 2"
					style="pointer-events: none;"
					fill="#FFFFFF">
					<path d="M0 0h24v24H0V0z" fill="none"/>
					<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/>
				</svg>
				

			</g>			
		</svg>
	</v-container>
<!-- 	<v-container>
		<text y="0" fill="white">{{this.fretGap}}</text><br>
		<text y="40" fill="white">{{this.fretGap / 2}}</text><br>
		<text y="80" fill="white">{{this.scales.length}}</text><br>
		<text y="120" fill="white">{{this.noteDiameter}}</text><br> -->
		<!-- <text y="160" fill="white">{{(((scales.length * this.noteDiameter) + (this.noteGapBetween * (scales.length - 1))) / 2)}}</text> -->
	<!-- </v-container> -->
</template>

<script>
	import * as Scales from '../scales.js'
	import scaleSelections from './scaleSelections.json';
	import {watch} from 'vue';
	import InstrumentSetup from './InstrumentSetup.vue';

	const scaleButtons = scaleSelections.buttons.flatMap(group => group.rows).flat();
	const TOPFRETBOARDGAP = 40;
	const LEFTFRETBOARDGAP = 20;

	export default {
		components: {
			InstrumentSetup,
		},
		name: "FretBoard",
		props: {
			ndScaleID: Number,
			ndX: Number,
			ndY: Number,
			ndOther: Boolean,
			isDragging: Boolean,
			isMobile: Boolean,
			scColor: String,
			btSpacing: String,
			btLabels: String,
		},

		// setup(props) {
		// 	watch(() => props.btSpacing, this.handleResize())
		// },

		data() {
			return {
				TOPFRETBOARDGAP,
				LEFTFRETBOARDGAP,

				tuning: ['E','B','G','D','A','E'],
				width: 300,
				height: 150,
				frets: 21,
				strings: 6,
				fretGap: 20, 
				stringGap: 30,
				noteR: 14,
				noteGapBetween: 2,
				neckLength: 1200,
				dropX: 0,
				dropY: 0,
				neckX: 0,
				neckY: 0,
				scales: [],
				fretboard: [],
				scrollPos: 0,
				showSettings: false,
			};
		},

		computed: {
			noteStart() {
				return this.noteR + this.noteGapSides;
			},
			
			noteGapSides() {	
				// console.log('noteGapSides')			
				return Number(this.btSpacing);
			},

			noteDiameter() {
				return this.noteR * 2
			},

			minFretGap() {
				var numScales = this.scales.length;
				if (numScales === 0) numScales = 1;
				// console.log('minFretGap')
				return this.noteGapSides + (numScales * this.noteDiameter) + ((numScales - 1) * this.noteGapBetween) + this.noteGapSides;
			},

			hoverX() {
				
				// console.log(dropArea.$el.scrollLeft);
				// console.log(this.scrollPos);
				return (this.ndX - this.neckX - 15 - LEFTFRETBOARDGAP + this.scrollPos);

			},

			hoverFret() {
				// console.log('hoverFret:' + this.hoverFret);
				return Math.floor(this.hoverX / this.fretGap );				

			},
			hoverString() {
				return (Math.floor((this.ndY - this.neckY - 25) / this.stringGap) - 1);
			},

			hoverNote() {
				if (this.hoverFret < 0 || this.hoverFret > this.frets - 1 || this.hoverString < 0 || this.hoverString > this.strings - 1) {
					return undefined
				} else {
					return Scales.noteAdd(Scales.noteNum(this.tuning[this.hoverString]), this.hoverFret);
				}							
			}
		},
		mounted() {
			
			window.addEventListener('resize', this.handleResize);
			window.addEventListener('touchend', this.handleNoteDrop);

			this.handleResize();

			const dropArea = this.$refs.dropArea;
			this.neckX = dropArea.$el.getBoundingClientRect().left;
			this.neckY =  dropArea.$el.getBoundingClientRect().top;

			},
		updated() {
			this.setScrollPos(this.scrollPos);	
			// console.log('handling it');
			this.handleResize();		
		},

		beforeUnmount() {
			window.removeEventListener('resize', this.handleResize);
		},

		methods: {
			notePos(index) {
				return ((index * (this.noteDiameter + this.noteGapBetween)))
			},

			noteName(number) {
				return Scales.noteName(number);
			},

			noteNum(name) {
				return Scales.noteNum(name);
			},

			handleScroll() {							
				const dropArea = this.$refs.dropArea;
				this.scrollPos = dropArea.$el.scrollLeft;
			},

			handleResize() {
				var minLength = this.minFretGap * this.frets;

				if ((document.documentElement.clientWidth - 40) <= minLength) {
					this.width = minLength;					
				} else { 
					this.width = document.documentElement.clientWidth - 40
				}
				this.neckLength = (this.width - LEFTFRETBOARDGAP);
				this.fretGap = (this.neckLength / this.frets);
				// console.log('handleResize')
			},
			handleNoteDrop() {
				this.dropX = this.ndX - this.neckX;
				this.dropY = this.ndY - this.neckY;
				const dropFret = this.hoverFret;
				const dropNote = this.hoverNote;
				var sel;

				if (dropNote === undefined || !this.isDragging) { return }
				if (this.scales.length >= 5) return;

				if (this.ndOther) {
					sel = scaleSelections.dropDown.find(dropDown => dropDown.sid === this.ndScaleID);
				} else {
					sel = scaleButtons.find(selections => selections.sid === this.ndScaleID);
				}				

				if (!sel) {
					console.log('Scale not found ' + this.ndScaleID)

				} else {
					this.scales.push(new Scales.ScaleInstance(
						sel.scaleType,
						dropNote,
						sel.mode,
						this.scColor,
						sel.scaleTheme,
						sel.name,
						));

					this.buildFretboard();
					this.handleResize();	
					
					const noteX = (this.noteStart + this.notePos(this.scales.length) + LEFTFRETBOARDGAP);
					const newFretX = (dropFret * this.fretGap) ;
					const totalX = (noteX + newFretX);
					
					// Holy crap I know that's just simple maths but that did my head in...
					// Plus you can't set the scroll position directly because the element this event
					// is called from needs to redraw (or some shit?) so i set the variable, and rely
					// on 'updated' event to fire to set the new scroll pos
					this.scrollPos = (totalX - this.dropX - 15)
					if (this.scrollPos < 0) {this.scrollPos = 0}
				}
			},
			buildFretboard() {
				this.fretboard.length = 0;
				for (let freti = 0; freti < this.frets; freti++) {
					for (let stringi = 0; stringi < this.strings; stringi++) {
						let checkNoteNum = Scales.noteAdd(Scales.noteNum(this.tuning[stringi]), freti)
						let noteCount = this.scales.filter(scale => scale.notes.some(note => note.ntChromaNum === checkNoteNum)).length;
						let ntIndex = 0;
						this.scales.forEach((scObj, i) => {
							let noteObj = scObj.getNote(checkNoteNum);
							if (noteObj !== undefined) {
								this.fretboard.push({noteCount: noteCount, ntIndex: ntIndex, scIndex: i, fret: freti, string: stringi, note: noteObj, fillc: scObj.scColor, desc: scObj.scName});
								ntIndex++;
							}
						})
					}
				}
			},

			setScrollPos(pixels) {
				const dropArea = this.$refs.dropArea;
				dropArea.$el.scrollLeft = pixels;
			},

			removeScale(scaleID) {
				const oldCentre = ((document.documentElement.clientWidth) / 2) + this.scrollPos
				const centreFret = Math.floor((oldCentre - 20) / this.fretGap);	
				const offsetX = oldCentre % this.fretGap
				const percX = offsetX / this.fretGap

				this.scales.splice(scaleID,1);

				this.buildFretboard();
				this.handleResize();

				const newCentreX = (centreFret * this.fretGap) + (percX * this.fretGap)
				const newScroll = newCentreX - (document.documentElement.clientWidth / 2)
		
				this.scrollPos = newScroll;
				if (this.scrollPos < 0) {this.scrollPos = 0}
				this.setScrollPos(newScroll);

			},
			handleUpdatedTuning(event) {
				this.showSettings = false

				if (event.blOK) {
					this.tuning = event.newTuning
					this.strings = event.newTuning.length
					this.buildFretboard()
				}
				
			},			
		}
	}

</script>

<style scoped>

</style>

