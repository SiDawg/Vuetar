<template>
	<v-container ref="dropArea" @mouseup="handleNoteDrop" @touchend="handleNoteDrop" fluid style="overflow-x: auto; padding: 15px;">
		<svg  
			:width="this.width" 
			:height="stringGap * strings" 
			:style="{background: `rgba(var(--v-theme-surface))`}"
			
			> 
			<g v-for="(i,index) in frets" :key="index">
				<line 
					:x1="(i * colWidth) - 2.5" 
					y1="0"
					:x2="(i * colWidth) - 2.5" 
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

			<g  v-if="isDragging" >		
				<text :x="ndX - neckX - 15" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{noteName(hoverNote)}}</text>
			</g>
		
			<g v-for="pos in this.fretboard" :key="pos">
				<circle :cx = "pos.fret * this.colWidth + 22 + (pos.scIndex * 32)" :cy="pos.string * this.stringGap + 15" r="14" 
					:fill="pos.fillc" 
					:fill-opacity="pos.note.ntOpacity"
					:stroke="pos.note.ntStroke ? pos.fillc : 'none'"
					:stroke-width="pos.note.ntStroke ? 2 : 0"
					:stroke-opacity="pos.note.ntStroke ? 1 : 0"
				/>	
				<text class="scaleText" :x = "pos.fret * this.colWidth + 22 + (pos.scIndex * 32)" :y="pos.string * this.stringGap  + 16" fill="white">{{pos.note.ntName}}</text><br>
			</g>
		</svg>
		<text x="50" y="50" fill="white">{{scColor}}</text>
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
			colWidth: 20,
			height: 150,
			stringGap: 30,
			frets: 20,
			strings: 6,
			minLength: 1200,
			neckLength: 1200,
			dropX: 0,
			dropY: 0,
			neckX: 0,
			neckY: 0,
			scales: [],
			fretboard: [],
			};
		},

		computed: {
			hoverX() {
				return Math.floor((this.ndX - this.neckX - 15) / this.colWidth);
			},
			hoverY() {
				return (Math.floor((this.ndY - this.neckY + 15) / this.stringGap) - 1);
			},

			hoverNote() {
				if (this.hoverX < 0 || this.hoverX > this.frets || this.hoverY < 0 || this.hoverY > this.strings) {
					return undefined
				} else {
					return this.noteAdd(this.noteNum(Tuning[this.hoverY]), this.hoverX);
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
			handleResize() {
				if ((window.innerWidth - 60) <= this.minLength) {
					this.width = this.minLength;					
				} else { 
					this.width = window.innerWidth - 60;
				}
				this.neckLength = this.width;
				this.colWidth = this.neckLength / this.frets;
				
			},
			handleNoteDrop() {
				this.dropX = this.ndX - this.neckX;
				this.dropY = this.ndY - this.neckY;

				const dropNote = this.hoverNote;
				if (dropNote === undefined || !this.isDragging) { return }

				const sel = scaleSelections.find(selections => selections.sid === this.ndScaleID)				

				this.scales.push(new ScaleClasses.ScaleInstance(
					sel.scaleType,
					dropNote,
					sel.mode,
					this.scColor,
					sel.scaleTheme,
					));

				console.log(sel.mode);
				this.buildFretboard();

			},
			buildFretboard() {
				this.fretboard.length = 0;

				for (let freti = 0; freti < this.frets; freti++) {
					for (let stringi = 0; stringi < this.strings; stringi++) {
						let checkNoteNum = this.noteAdd(this.noteNum(Tuning[stringi]), freti)
						this.scales.forEach((scObj, i) => {
							let noteObj = scObj.getNote(checkNoteNum);
							if (noteObj !== undefined) {
								this.fretboard.push({scIndex: i, fret: freti, string: stringi, note: noteObj, fillc: scObj.scColor})
							}
						})
					}
				}

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

