<template>
	<div v-if="showSettings" ><InstrumentSetup :tuning="tuning" @update-tuning="handleUpdatedTuning" /></div>
	<v-container ref="dropArea" @mouseup="handleNoteDrop"  @touchend="handleNoteDrop" @click="handleEdit" @scroll="handleScroll" fluid style="overflow-x: auto; ">		
		<svg :width="this.width" :height="(stringGap * strings) + TOPFRETBOARDGAP">
			<rect :width="this.width - fretGap" :height="stringGap * strings" :x="LEFTFRETBOARDGAP + fretGap" :y="TOPFRETBOARDGAP" 
				:style="{fill: `rgba(var(--v-theme-surface))`}"
				/>			
			
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
			<svg class="point-cursor" @click="showSettings = !showSettings" :x="0" :y="TOPFRETBOARDGAP - 25" viewBox="0 0 30 30" width="30" height="30">
				<circle cx="15" cy="15" r="15" />
				<svg viewBox="0 0 500 500" width="20" height="20" fill="#41b883" :x="5" :y="5"  xmlns="http://www.w3.org/2000/svg">
					
					<path d="M 31.872 45.995 C 77.157 -7.041 428.541 -3.2 466.463 45.995 C 505.76 98.049 494.66 219.057 466.463 268.59 C 435.753 314.777 72.078 322.402 31.872 268.59 C 0 219.243 -1.92 92.26 31.872 45.995 Z" style=""/>
					<rect x="350.186" y="268.58" width="111.604" height="180.191" style="" transform="matrix(0.999965, 0.008418, 0, 1.000035, -158.457766, 17.411698)"/>
				</svg>
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
				<circle
					:cx="pos.fret * this.fretGap + LEFTFRETBOARDGAP
						+ (this.fretGap / 2)
						+ this.noteR
						+ (pos.scaleIndex * (this.noteDiameter + this.noteGapBetween))
						- (((scales.length * this.noteDiameter) + (this.noteGapBetween * (scales.length - 1))) / 2)"

					:cy="(pos.string * this.stringGap) + (stringGap / 2) + TOPFRETBOARDGAP" :r="this.noteR" 
					:fill="pos.color" 
					:fill-opacity="pos.note.opacity"
					:stroke="pos.note.stroke ? pos.color : 'none'"
					:stroke-width="pos.note.stroke ? 2 : 0"
					:stroke-opacity="pos.note.stroke ? 1 : 0"
					style="pointer-events: none;"
				/>

				<text
					class="noteLabel" 
					:x="pos.fret * this.fretGap + LEFTFRETBOARDGAP
						+ (this.fretGap / 2)
						+ this.noteR
						+ (pos.scaleIndex * (this.noteDiameter + this.noteGapBetween))
						- (((scales.length * this.noteDiameter) + (this.noteGapBetween * (scales.length - 1))) / 2)"
					:y="pos.string * this.stringGap + 56" :r="this.noteR"
					:style="{ fill: pos.note.labelColor }">

					<template v-if="this.labels === '123'">
						{{pos.noteIndex}}
						<!-- {{pos.ntIndex}} -->
					</template>

					<template v-else-if="this.labels === 'b3'">
						{{pos.note.degree}}
					</template>

					<template v-else>
						<template v-if="this.enharmonics === 'auto'">
							{{pos.note.name.auto}}
						</template>
						<template v-if="this.enharmonics === 'major'">
							{{pos.note.name.major}}
						</template>
						<template v-if="this.enharmonics === 'manual'">
							{{pos.note.name.manual}}
						</template>
					</template>
					

				</text>
			</g>

			<g  v-if="isDragging" >		
				<text :x="hoverX + LEFTFRETBOARDGAP" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{hoverEnharmonic}}</text>		
				<!-- <text :x="hoverX + LEFTFRETBOARDGAP" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{noteName(hoverNote)}}</text> -->
				<!-- <text :x="hoverX + LEFTFRETBOARDGAP" :y="ndY - neckY - (isMobile ? 60 : 40)" class="scaleText">{{hoverNote}}</text> -->
			</g>
		</svg>		
	</v-container>
	<!-- Draw a list of scales that are currently dropped -->
	<v-container fluid style="padding: 15px;">
		<svg :width="this.width" :height="this.scales.length * (this.noteDiameter + this.noteGapBetween)">
			<g v-for="(scale, index) in this.scales" :key="index">
				<!-- Delete -->
				<circle 
					:cx="this.noteR" 
					:cy="(index * (this.noteR * 2 + this.noteGapBetween)) + this.noteR"
					fill="#333333"
					fill-opacity="0"
					:r="this.noteR"
					class="point-cursor"
					@click="removeScale(index)"
					/>

				<svg viewBox="0 0 24 24" :width="noteR * 1.8" :height="noteR * 1.8"			
					:x="2" 
					:y="(index * (this.noteR * 2 + this.noteGapBetween)) + 1"					
					fill="#555555"
					style="pointer-events: none">
					<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
				</svg>

				<!-- Edit -->
				<circle 
					:cx="this.noteR + this.noteDiameter + this.noteGapBetween * 2" 
					:cy="(index * (this.noteR * 2 + this.noteGapBetween)) + this.noteR"
					fill="#333333"
					fill-opacity="0"
					:r="this.noteR"
					class="point-cursor"
					@click="scale.editable = !scale.editable"
					/>

				<!-- Locked -->
					<svg v-if="!scale.editable" viewBox="0 0 24 24" :width="noteR * 1.5" :height="noteR * 1.5"
						:x="this.noteDiameter + 6"
						:y="(index * (this.noteDiameter + this.noteGapBetween)) + 3" 
						fill="#555555"
						style="pointer-events: none">
						<path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
					</svg>	

				<!-- Unlocked -->
					<svg v-if="scale.editable" viewBox="0 0 24 24" :width="noteR * 1.5" :height="noteR * 1.5"
						:x="this.noteDiameter + 6"
						:y="(index * (this.noteDiameter + this.noteGapBetween)) + 3" 
						fill="#41b883"
						style="pointer-events: none">
						<path d="M18 1C15.24 1 13 3.24 13 6V8H4C2.9 8 2 8.89 2 10V20C2 21.11 2.9 22 4 22H16C17.11 22 18 21.11 18 20V10C18 8.9 17.11 8 16 8H15V6C15 4.34 16.34 3 18 3C19.66 3 21 4.34 21 6V8H23V6C23 3.24 20.76 1 18 1M10 13C11.1 13 12 13.89 12 15C12 16.11 11.11 17 10 17C8.9 17 8 16.11 8 15C8 13.9 8.9 13 10 13Z" />
					</svg>							

				<circle 
					:cx="this.noteR + (this.noteDiameter + this.noteGapBetween * 2) * 2" 
					:cy="(index * (this.noteDiameter + this.noteGapBetween)) + this.noteR"
					:fill="scale.color"
					fill-opacity="1"
					:r="this.noteR"
					class="point-cursor"
					
					/>	
				<text dominant-baseline="middle" alignment-baseline="middle" 
					:x="this.noteR + (this.noteDiameter + this.noteGapBetween * 2) * 2" 
					:y="(index * (this.noteDiameter + this.noteGapBetween)) + this.noteR + 1"
					fill="white"
					class="scaleText" >
					<template v-if="this.enharmonics === 'auto'">
						{{scale.notes[0].name.auto}}
					</template>
					<template v-if="this.enharmonics === 'major'">
						{{scale.notes[0].name.major}}
					</template>
					<template v-if="this.enharmonics === 'manual'">
						{{scale.notes[0].name.manual}}
					</template>
				</text>
				<text dominant-baseline="middle" alignment-baseline="middle" 
					:x="this.noteDiameter * 3 + 12" 
					:y="(index * (this.noteDiameter + this.noteGapBetween)) + this.noteR + 2"
					fill="white"
					style="user-select: none;">
					{{scale.description}}
				</text>

			</g>			
		</svg>
		<v-btn class="ml-0" @click="handleReset" density="compact" color="#555555" icon="mdi-autorenew"></v-btn>
		
	</v-container>
</template>

<script>
	import * as Scales from '../scales.js'
	import scaleSelections from './scaleSelections.json';
	import {watch} from 'vue';
	import InstrumentSetup from './InstrumentSetup.vue';
	import { useCookies } from "vue3-cookies";

	const scaleButtons = scaleSelections.buttons.flatMap(group => group.rows).flat();
	const TOPFRETBOARDGAP = 40;
	const LEFTFRETBOARDGAP = 20;

	export default {

		name: "FretBoard",
		props: {
			ndScaleID: Number,
			ndX: Number,
			ndY: Number,
			other: Boolean,
			isDragging: Boolean,
			isMobile: Boolean,
			scColor: String,
			spacing: String,
			labels: String,
			enharmonics: String,
		},
		components: {
			InstrumentSetup,
		},
		setup() {
			const { cookies } = useCookies();
			return { cookies };
		},

		data() {
			return {
				TOPFRETBOARDGAP,
				LEFTFRETBOARDGAP,

				COOKIE_SCALES: 0,
				COOKIE_TUNING: 1,
				COOKIE_COLOR: 2,
				COOKIE_SPACING: 3,
				COOKIE_LABELS: 4,

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
				return Number(this.spacing);
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
				return (this.ndX - this.neckX - 15 - LEFTFRETBOARDGAP + this.scrollPos);

			},

			hoverFret() {
				// console.log('hoverFret:' + this.hoverFret);
				return Math.floor(this.hoverX / this.fretGap );				

			},

			hoverFretX() {
				// return Math.round((((this.hoverX / this.fretGap) % 1) * 100) / 100);	

				return Math.round(((this.hoverX / this.fretGap) % 1) * 100)
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
			},

			hoverEnharmonic() {
				var threshold = 50

				if (this.hoverNote !== undefined) {
					if (this.hoverNote === 2 || this.hoverNote === 7) {
						threshold = 75 // don't display "Cb" or "Fb" unless at the edges, because they're "weird"

					} else if (this.hoverNote === 3 || this.hoverNote === 8) {
						threshold = 25 // don't display "B#" or "E#" unless at the edges, because they're "weird"
					}

					if (this.hoverFretX < threshold) {
						return Scales.enharmonicNeighbours(this.hoverNote).sharp
					} else {
						return Scales.enharmonicNeighbours(this.hoverNote).flat
					}

				} else {
					return ''
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

			this.readCookie();
			this.testStuff()

			},
		updated() {
			this.setScrollPos(this.scrollPos);	
			this.handleResize();	
		},

		beforeUnmount() {
			window.removeEventListener('resize', this.handleResize);
		},

		methods: {
			notePos(index) {
				return ((index * (this.noteDiameter + this.noteGapBetween)))
			},
			scaleIndex(fretX) {
				var scaleindex = Math.floor((fretX - this.noteGapSides) / (this.noteDiameter + this.noteGapBetween))

				if (scaleindex < 0 || (scaleindex + 1) > this.scales.length) {
					return undefined;
				} else {
					return scaleindex
				}
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

			},
			handleNoteDrop(point) {				

				if (this.isDragging) {
					this.dropX = this.ndX - this.neckX;
					this.dropY = this.ndY - this.neckY;
					const dropFret = this.hoverFret;
					const dropNote = this.hoverNote;
					var sel;

					if (dropNote === undefined) { return }

					if (this.scales.length >= 5) return;

					if (this.other) {
						sel = scaleSelections.dropDown.find(dropDown => dropDown.sid === this.ndScaleID);
					} else {
						sel = scaleButtons.find(selections => selections.sid === this.ndScaleID);
					}				

					if (!sel) {
						console.log('Scale not found ' + this.ndScaleID)

					} else {
						var newscale = new Scales.Scale(dropNote, this.scColor, sel.name);

						newscale.addNotesFromShape(sel.scaleType, sel.mode, sel.scaleTheme)						

						// stupid damn blues scale ruin my plans...
						if (sel.name === 'Blues') {
							newscale.addNote(Scales.noteAdd(dropNote, 6))
						}

						newscale.setShape()


						newscale.setNoteNames(this.hoverEnharmonic)
						newscale.setNoteDegrees()
						

						this.scales.push(newscale)
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

				} 
				
			},

			handleEdit(point)  {
								
				var clientX, clientY, fretboardNote, clickIndex

				if (event.type.startsWith("touch")) {
					clientX = point.touches[0].clientX;
					clientY = point.touches[0].clientY;
				} else {
					clientX =  point.clientX;
					clientY =  point.clientY + window.scrollY;
				}

				const fretboardClickX =  clientX - this.neckX - 15 - LEFTFRETBOARDGAP + this.scrollPos
				const fretboardClickFret = Math.floor(fretboardClickX / this.fretGap );
				const fretboardClickString = Math.floor((clientY - this.neckY - 25) / this.stringGap) - 1;

				if (fretboardClickFret < 0 || fretboardClickFret > this.frets - 1 || fretboardClickString < 0 || fretboardClickString > this.strings - 1) {
					fretboardNote = undefined
				} else {
					fretboardNote = Scales.noteAdd(Scales.noteNum(this.tuning[fretboardClickString]), fretboardClickFret);
				}

				clickIndex = this.scaleIndex(fretboardClickX - (fretboardClickFret * this.fretGap));

				if (clickIndex !== undefined && fretboardNote !== undefined) {
					const scale = this.scales[clickIndex]

					if (scale.editable) {
						scale.cycleNote(fretboardNote);
						this.buildFretboard();
						this.handleResize();
					}
					
				}
			},

			buildFretboard() {
				this.fretboard.length = 0;
				for (let freti = 0; freti < this.frets; freti++) {
					for (let stringi = 0; stringi < this.strings; stringi++) {
						let checkNoteNum = Scales.noteAdd(Scales.noteNum(this.tuning[stringi]), freti)

						this.scales.forEach((scale, index) => {
							let note = scale.getNote(checkNoteNum);
							if (note !== undefined) {
								let noteIndex = (scale.notes.indexOf(note) + 1);
								this.fretboard.push({fret: freti, string: stringi, scaleIndex: index, color: scale.color, noteIndex: noteIndex, note: note});
								noteIndex++;
							}
						})
					}
				}				
				this.setCookie();
			},

			setScrollPos(pixels) {
				const dropArea = this.$refs.dropArea;
				dropArea.$el.scrollLeft = pixels;
			},

			testStuff() {
				// const names = Scales.enharmonicNeighbours(12)

				// if (names !== undefined) {
					
				// 	console.log(names.sharp)
				// 	console.log(names.flat)
				// }


			},

			handleReset() {
				this.cookies.remove("VuetarScales");
				this.cookies.remove("VuetarTuning");
				this.cookies.remove("VuetarFretboard");
				this.cookies.remove("VuetarColor");
				this.cookies.remove("VuetarSettings")
				location.reload();
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

				this.setCookie();
			},
			handleUpdatedTuning(event) {
				this.showSettings = false

				if (event.blOK) {
					this.tuning = event.newTuning
					this.strings = event.newTuning.length
					this.buildFretboard()
				}
				this.setCookie();
				
			},
			setCookie() {
				var scaleCookie = []
				this.scales.forEach((scale) => {
					scaleCookie.push({tonic: scale.tonic, color: scale.color, notes: [], enharmonic: scale.notes[0].name.manual})

					scale.notes.forEach((note) => {
						scaleCookie[scaleCookie.length - 1].notes.push({number: note.number, style: note.style})
					})
				});

				this.cookies.set("VuetarScales", JSON.stringify(scaleCookie))
				this.cookies.set("VuetarTuning", this.tuning)
			},
			reReadCookie() {
				this.readCookie(this.cookies.get("VuetarFretboard"));
			},

			readCookie() {			

				let tuning = this.cookies.get("VuetarTuning")

				if (tuning) {
					this.tuning = tuning.split(',')
					this.strings= this.tuning.length
				}

				var cookieScales = JSON.parse(this.cookies.get("VuetarScales"))

				if (cookieScales) {
					cookieScales.forEach((scale) => {
						var newscale = new Scales.Scale(scale.tonic, scale.color)
						for (var note of scale.notes) {
							newscale.addNote(note.number, note.style)
						}
						newscale.setShape()
						newscale.setNoteNames(scale.enharmonic)
						newscale.setNoteDegrees()

						this.scales.push(newscale)
					})
				}
				this.buildFretboard();
				this.handleResize();
			}

		}
	}

</script>

<style scoped>

</style>

