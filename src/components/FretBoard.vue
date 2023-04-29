<template>
	<v-container ref="dropArea" @mouseup="handleNoteDrop" @touchend.prevent="handleNoteDrop" fluid style="overflow-x: auto; padding: 15px;">
		<svg  
			:width="this.width" 
			:height="stringGap * rows" 
			:style="{background: `rgba(var(--v-theme-surface))`}"
			
			> 
			<g v-for="(i,index) in columns" :key="index">
				<line 
					:x1="(i * colWidth) - 2.5" 
					y1="0"
					:x2="(i * colWidth) - 2.5" 
					:y2="stringGap * rows" 
					:style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`, strokeWidth: '5'}" />
			</g>

			<g v-for="(i,index) in rows" :key="index">
				<line 
					x1="0" 
					:y1="index * stringGap + stringGap / 2" 
					:x2="neckLength" 
					:y2="index * stringGap + stringGap / 2" 
					:style="{stroke: `rgba(var(--v-border-color), var(--v-border-opacity))`}" />

			</g>

			<g  v-if="isDragging" >
				<!-- <text x="50" y="50" class="scaleText">{{Math.floor((this.ndX - this.neckX - 15) / this.colWidth)}}  {{Math.floor((this.ndY - this.neckY + 15) / this.stringGap)}}</text> -->
				
				<text :x="ndX - neckX - 15" :y="ndY - neckY - 40" class="scaleText">{{hoverNote}}</text>

				<!-- 			
				<g v-for="(note,i) in this.scaleA.notes" :key="i">	
				<circle :cx = "i * 50 + 50" :cy="50" r="15" 
					:fill="this.scaleA.scColor" 
					:fill-opacity="this.scaleA.notes[i].ntOpacity"
					:stroke="this.scaleA.notes[i].ntStroke ? this.scaleA.scColor : 'none'"
					:stroke-width="this.scaleA.notes[i].ntStroke ? 3 : 0"
					:stroke-opacity="this.scaleA.notes[i].ntStroke ? 1 : 0"
					/>	
				<text class="scaleText" :x = "i * 50 + 50" :y="51" fill="white">{{this.scaleA.notes[i].ntNum}}</text><br> -->
				<!-- <text :x = "i * 50" :y="50" fill="white">{{this.scaleA.scColor}}</text><br> --> -->
			</g> -->
		</svg>
	</v-container>
</template>

<script>
	// import scaleButtons from './scaleButtons.json'
	import scaleTypes from './scaleTypes.json'
	import scaleThemes from './scaleThemes.json'

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

	const Chroma = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];
	const Tuning = ['E','B','G','D','A','E'];

	class ScNote {
		constructor(ntNum, ntStyle) {
			this.ntNum = ntNum;
			this.ntStyle = ntStyle;
			this.ntName = Chroma[ntNum];

			switch (ntStyle) {
				case 0 :
					this.ntOpacity = 1;
					this.ntStroke = false;
					break;
				case 1 :
					this.ntOpacity = 0.6;
					this.ntStroke = false;
					break;
				case 2 :
					this.ntOpacity = 0;
					this.ntStroke = true;
					break;
			}
		}
	}
	
	class ScaleInstance {
		constructor(scaleType, tonic, mode, scColor, scTheme) {
			this.scaleType = scaleType;

			if (typeof tonic === 'number') {
				this.tonic = tonic;
			} else {				
				this.tonic = Chroma.indexOf(tonic)
			}			

			this.mode = mode;
			this.scColor = scColor
			this.scTheme = scTheme;

			this.notes = [];
			this.setNotes();
		}

		setNotes() {
			const scaleObj = scaleTypes.find(obj => obj.name === this.scaleType);

			if (typeof scaleObj === 'undefined') {
				console.log('scaleObj is undefined');
			} else {
				var stepIndex = this.mode;
				var noteIndex = 0;
				var prevNoteNum = this.tonic;
				var newNoteNum = this.tonic;

				// console.log('Step Length: ' + scaleObj.absSteps.length)

				do {
					if (noteIndex === 0) {
						this.notes.push(new ScNote(this.tonic, scaleThemes[this.scTheme][0]));
						// console.log('FirstStep: ' + scaleObj.absSteps[stepIndex])
					} else {
						// console.log('StepIndex:' + stepIndex + ', Step: ' + scaleObj.absSteps[stepIndex])
						newNoteNum = (prevNoteNum + scaleObj.absSteps[stepIndex]) % 12;
						// console.log('NewNote: ' + newNoteNum)
						this.notes.push(new ScNote(newNoteNum, scaleThemes[this.scTheme][noteIndex]));
						prevNoteNum = newNoteNum;
					}
					// console.log(noteIndex + ' of ' + scaleObj.absSteps.length + ' (stepIndex: ' + stepIndex + ')')
					noteIndex++;
					stepIndex++;
					if (stepIndex > scaleObj.absSteps.length - 1) {stepIndex = 0}

					// console.log(' ')
				} while (noteIndex <= scaleObj.absSteps.length - 1);

			}
		}
	}


	export default {

		name: "FretBoard",

		props: {
		ndScaleID: Number,
		ndX: Number,
		ndY: Number,
		isDragging: Boolean,
		},

		data() {
			return {
			width: 300,
			colWidth: 20,
			height: 150,
			stringGap: 30,
			columns: 20,
			rows: 6,
			minLength: 1200,
			neckLength: 1200,
			dropX: 0,
			dropY: 0,
			neckX: 0,
			neckY: 0,

			scaleA: new ScaleInstance('Diatonic','C',3,'#8789C0',4),
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
				const hoverNote = this.noteAdd(this.noteNum(Tuning[this.hoverY]), this.hoverX);
				return Chroma[hoverNote];
			}
		},
		mounted() {
			window.addEventListener('resize', this.handleResize);
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
				this.colWidth = this.neckLength / this.columns;
				
			},
			handleNoteDrop() {
				this.dropX = this.ndX - this.neckX;
				this.dropY = this.ndY - this.neckY;

			},
			noteName(noteNum) {
				return Chroma[noteNum];
			},
			noteNum(noteName) {
				return Chroma.indexOf(noteName);
			},
			noteAdd(noteOne, noteTwo) {
				return (noteOne + noteTwo) % 12;
			}
		}
	}

</script>

<style scoped>

</style>

