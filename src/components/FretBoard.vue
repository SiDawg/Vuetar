<template>
	<v-container ref="dropArea" @mouseup="handleNoteDrop" @touchend="handleNoteDrop" @scroll="handleScroll" fluid style="overflow-x: auto; padding: 15px;">
		<svg  
			:width="this.width" 
			:height="stringGap * strings" 
			:style="{background: `rgba(var(--v-theme-surface))`}"
			
			> 
			<!-- Draw Strings and frets -->
			<g v-for="(i,index) in frets" :key="index">
				<line 
					:x1="(i * fretGap) - 2.5" 
					y1="0"
					:x2="(i * fretGap) - 2.5" 
					:y2="stringGap * strings" 
					:style="{stroke: index === 0 ? `rgba(var(--v-theme-on-surface), 1)` : `rgba(var(--v-border-color), var(--v-border-opacity))`, strokeWidth: '5'}" />
			</g>

			<g v-for="(i,index) in strings" :key="index">
				<line 
					x1="0" 
					:y1="index * stringGap + stringGap / 2" 
					:x2="neckLength" 
					:y2="index * stringGap + stringGap / 2" 
					:style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`}" />

			</g>		
		
						<!-- 	:cx = "pos.fret * this.fretGap 
						+ this.noteR + (this.noteGapX * 3) 
						+ ((pos.scIndex * ((this.noteR * 2) 
						+ this.noteGapX)))" 
						-->
			<!-- Draw all notes from all scales (using pre computed object 'fretboard', which reads the 'scales' object) -->
			<g v-for="pos in this.fretboard" :key="pos">
				<circle
					:cx="pos.fret * this.fretGap
						+ this.noteStart
						+ this.notePos(pos.scIndex)"

					:cy="pos.string * this.stringGap + 15" :r="this.noteR" 
					:fill="pos.fillc" 
					:fill-opacity="pos.note.ntOpacity"
					:stroke="pos.note.ntStroke ? pos.fillc : 'none'"
					:stroke-width="pos.note.ntStroke ? 2 : 0"
					:stroke-opacity="pos.note.ntStroke ? 1 : 0"

				/>	
				<text class="scaleText" 
					:x = "pos.fret * this.fretGap 
						+ this.noteR + (this.noteGapX * 3) 
						+ ((pos.scIndex * ((this.noteR * 2) 
						+ this.noteGapX)))" 
					:y="pos.string * this.stringGap + 16" :r="this.noteR"
					fill="white">

					{{pos.note.ntName}}
					<!-- {{pos.desc}} -->

				</text><br>
			</g>

			<g  v-if="isDragging" >		
				<text :x="hoverX" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{noteName(hoverNote)}}</text>
			</g>
		</svg>		
		
	</v-container>

	<!-- Draw all the scales that are currently drawn -->
	<v-container fluid style="padding: 15px;">
		<svg :width="this.width" :height="this.scales.length * (this.noteR * 2 + this.noteGapX * 5)">
			<g v-for="(scale, index) in this.scales" :key="index">
				<circle 
					:cx="this.noteR + this.noteGapX" 
					:cy="(index * (this.noteR * 2 + this.noteGapX * 5)) + this.noteR"
					:fill="scale.scColor"
					fill-opacity="1"
					:r="this.noteR"
					@click="removeScale(index)"

				/>

				<text dominant-baseline="middle" alignment-baseline="middle" :x="noteR + noteR + noteGapX + 3" 
					:y="(index * (this.noteR * 2 + this.noteGapX * 5)) + this.noteR"
					fill="white">
					{{noteName(scale.tonic) + ' ' + scale.scName}}
				</text>

				<svg xmlns="http://www.w3.org/2000/svg" 
					:x="3" 
					:y="(index * (this.noteR * 2 + this.noteGapX * 5)) + 1"
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
</template>

<script>
	import * as ScaleClasses from '../scales.js'

	// 0: Tonic only
	// 1: 3 and 5
	// 2: Major pent	
	// 3: Minor pent	
	// 4: Dorian 3 7 	
	// 5: Phrygian 2 3 6 7 	
	// 6: Lydian 4	
	// 7: Mixolydian 7
	// 8: Aeolian 3 6 7	
	// 9: Locrian 2 3 5 6 7

	import scaleButtons from './scaleButtons.json'

	const scaleSelections = scaleButtons.flatMap(group => group.rows).flat();

	const Tuning = ['E','B','G','D','A','E'];

	export default {

		name: "FretBoard",

		props: {
		ndScaleID: Number,
		ndX: Number,
		ndY: Number,
		isDragging: Boolean,
		isMobile: Boolean,
		scColor: String,
		},

		data() {
			return {
			width: 300,
			height: 150,
			frets: 20,
			strings: 6,
			fretGap: 20, 
			stringGap: 30,
			noteR: 14,
			noteGapX: 1,
			neckLength: 1200,
			dropX: 0,
			dropY: 0,
			neckX: 0,
			neckY: 0,
			scales: [],
			fretboard: [],
			scrollPos: 0,
			};
		},

		computed: {
			noteStart() {
				return this.noteR + (this.noteGapX * 3);
			},

			minFretGap() {
				var numScales = this.scales.length;
				if (numScales === 0) numScales = 1;

				return (this.noteGapX * 3) + (numScales * (this.noteR * 2)) + (numScales * this.noteGapX) + (this.noteGapX * 7);
			},

			hoverX() {
				
				// console.log(dropArea.$el.scrollLeft);
				// console.log(this.scrollPos);
				return (this.ndX - this.neckX - 15 + this.scrollPos);

			},

			hoverFret() {
				// console.log('hoverFret:' + this.hoverFret);
				return Math.floor(this.hoverX / this.fretGap);				

			},
			hoverString() {
				return (Math.floor((this.ndY - this.neckY + 15) / this.stringGap) - 1);
			},

			hoverNote() {
				if (this.hoverFret < 0 || this.hoverFret > this.frets - 1 || this.hoverString < 0 || this.hoverString > this.strings - 1) {
					return undefined
				} else {
					return this.noteAdd(this.noteNum(Tuning[this.hoverString]), this.hoverFret);
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

		beforeUnmount() {
			window.removeEventListener('resize', this.handleResize);
		},

		methods: {
			notePos(index) {
				return ((index * ((this.noteR * 2) + this.noteGapX)))
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
				this.neckLength = this.width;
				this.fretGap = this.width / this.frets;
				
			},
			handleNoteDrop() {
				this.dropX = this.ndX - this.neckX;
				this.dropY = this.ndY - this.neckY;
				const dropFret = this.hoverFret;
				const dropNote = this.hoverNote;
				if (dropNote === undefined || !this.isDragging) { return }
				if (this.scales.length >= 5) return;

				const sel = scaleSelections.find(selections => selections.sid === this.ndScaleID)				

				this.scales.push(new ScaleClasses.ScaleInstance(
					sel.scaleType,
					dropNote,
					sel.mode,
					this.scColor,
					sel.scaleTheme,
					sel.name,
					));

				this.buildFretboard();

				console.log('========================================================');
				console.log('hover fret:' + this.hoverFret);
				console.log('fret gap:' + this.fretGap);
				console.log('resizing')
				this.handleResize();

				console.log('');
				console.log('fret gap:' + this.fretGap);
				console.log('drop fret:' + dropFret);
				console.log('hoverX:' + Math.floor(this.hoverX));	
				console.log('dropX:' + Math.floor(this.dropX));			
				
				const noteX = (this.noteStart + this.notePos(this.scales.length));
				const newFretX = (dropFret * this.fretGap);
				const totalX = (noteX + newFretX);

				console.log('newFretX:' + newFretX);				
				console.log('bnoteX:' + noteX) ;
				console.log('total:' + (newFretX + noteX)) ;
				console.log('scrollPos:' + Math.floor((totalX - this.dropX - 15)));
				
				// Holy crap I know that's just simple maths but that did my head in...
				this.setScrollPos(totalX - this.dropX - 15);



			},
			buildFretboard() {
				this.fretboard.length = 0;

				for (let freti = 0; freti < this.frets; freti++) {
					for (let stringi = 0; stringi < this.strings; stringi++) {
						let checkNoteNum = this.noteAdd(this.noteNum(Tuning[stringi]), freti)
						this.scales.forEach((scObj, i) => {
							let noteObj = scObj.getNote(checkNoteNum);
							if (noteObj !== undefined) {
								this.fretboard.push({scIndex: i, fret: freti, string: stringi, note: noteObj, fillc: scObj.scColor, desc: scObj.scName})
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
				this.scales.splice(scaleID,1);
				this.buildFretboard();
				this.handleResize();
			},

			noteName(noteNum) {
				return ScaleClasses.Chroma[noteNum];
			},
			noteNum(noteName) {
				return ScaleClasses.Chroma.indexOf(noteName);
			},
			noteAdd(noteOne, noteTwo) {
				return (noteOne + noteTwo) % 12;
			},
			testtouch(event) {
				console.log(event);
			}
		}
	}

</script>

<style scoped>

</style>

