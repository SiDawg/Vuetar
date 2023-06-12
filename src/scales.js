import scaleShapes from './components/scaleShapes.json'
import scaleThemes from './components/scaleThemes.json'

export const Chroma = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];
export const ChromaFlat = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

export class Scale {
	constructor(tonic, color) {
		this.tonic = tonic;
		this.color = color;
		this.editable = false;
		this.notes = [];
		this.shape = {};
	}

	_sortNotes() {
		var notes = this.notes.forEach((note) => {
			if (note.number < this.tonic) {
					note.number += 12;
			}
		})
		this.notes.sort((a, b) => a.number - b.number);
		notes = this.notes.forEach((note) => note.number %= 12);
	}

	addNotesFromShape(shapeName, mode, theme) {
		const shape = scaleShapes.find(shape => shape.name === shapeName);

		if (typeof shape === 'undefined') {

			console.log('Couldnt find shape "' + shapeName + '"');
			return;

		} else {
			var modeIndex = mode;
			var scaleIndex = 0;
			var prevNoteNumber = this.tonic;
			var newNoteNumber = this.tonic;			

			do {

				if (scaleIndex === 0) {
					
					this.addNote(this.tonic, scaleThemes[theme][scaleIndex]);

				} else {
					newNoteNumber = (noteAdd(prevNoteNumber, shape.steps[modeIndex]));
					this.addNote(newNoteNumber, scaleThemes[theme][scaleIndex]);
					prevNoteNumber = newNoteNumber;
				}

				modeIndex++;
				scaleIndex++;
				if (modeIndex > shape.steps.length - 1) {modeIndex = 0}

			} while (scaleIndex < shape.steps.length);
		}

		this._sortNotes()
	}

	cycleNote(number) {
		if (!this.hasNote(number)) {
			this.addNote(number, 'faded')
			this.setShape()
			this.setNoteNames()
			this.setNoteDegrees()

		} else {
			var note = this.getNote(number);
			switch (note.style) {
				case 'full' :
					note.setStyle('faded')
					break;

				case 'faded' :
					note.setStyle('outline')
					break;

				case 'outline' :
					if (number === this.tonic) {
						note.setStyle('full')
					} else {
						this.removeNote(number)
						this.setShape()
						this.setNoteNames()
						this.setNoteDegrees()
					}
					break;
				
				default :
					note.setStyle('faded')
					break;
			}
		}
	}	

	setShape() {
		var steps = []

		if (this.notes.length === 0) {
			return undefined
		} else {
			steps = this.steps();
		}
		
		var shape
		var mode = 0
		for (var i = 0 ; i < steps.length ; i++) {			
			var match = scaleShapes.some((searchShape) => {
				let tail = []
				if (i !== 0) {
					tail = steps.slice(-i);
				}
				let head = steps.slice(0,steps.length - i);
				if (JSON.stringify(searchShape.steps) === JSON.stringify(tail.concat(head))) {
					shape = searchShape;
					mode = i;
					return true;
				}
			})

			if (match) { break }

		}
		if (match) {
			this.shape = shape;
			this.shape.mode = mode;
			this.description = shape.modes[mode] + ' (' + (mode + 1) + getOrdinal(mode + 1) + ' mode of the ' + shape.name + ' scale)'

		} else {
			if (JSON.stringify([2, 3, 2, 1, 1, 3]) === JSON.stringify(steps)) {
				this.shape = {name: 'Pentatonic', mode: 4, steps}
				this.description = 'Blues (Minor pentatonic + b5)'
							
			} else {
				switch (this.notes.length) {
					case 1:
						this.shape = {name: 'Custom', mode: 0, steps}
						this.description = 'Custom 1 note scale. Rocking.'
						break;
					case 12:
						this.shape = {name: 'Custom', mode: 0, steps}
						this.description = 'Got enough notes there, Sparky?'
						break;
					default:
						this.shape = {name: 'Custom', mode: 0, steps}
						this.description = 'Custom ' + this.notes.length + ' note scale'
						break;
				}
			}
			
		}
	}

	setNoteNames(enharmonic) {		
		if (enharmonic === '') {enharmonic = undefined}		
		// debugger;
		if (this.steps().length === 7) {
			var sharpScale = getEnharmonicScale('#',this.notes.map((note) => note.number))
			var flatScale = getEnharmonicScale('b',this.notes.map((note) => note.number))	

			// sharpScale = "if this scale was built with sharps"

			// so A# sharp scale = A#, B#...., flat scale = Bb, C... ) -> Scenario a) simple enharmonic, go with least accidentals
			
			// E sharp scale = E, F#... E flat scale = Fb, Gb ... -> Scenario b) first of half step pair 
			// B sharp scale = B, C#.... flat scale = Cb, Db.... --> Scenario b)

			// F sharp scale = E#, F## ... F flat scale = F, G... -> Scenario c) second of half step pair 
			// C sharp scale = B#, C## ... C flat scale = C, D, E, F


			// console.log('Note: ' + this.tonic + ' ' + enharmonic)
			// console.log('Sharp: ' + JSON.stringify(sharpScale))
			// console.log('Flat: ' + JSON.stringify(flatScale))
			// console.log(majorAccidental(this.tonic))
			// console.log(enharmonicType(enharmonic))
			// console.log('')

			if (flatScale.accidentalCount < sharpScale.accidentalCount) {
				this.notes.forEach((note, index) => note.name.auto = flatScale.noteNames[index])
			} else {
				this.notes.forEach((note, index) => note.name.auto = sharpScale.noteNames[index])
			}

			if (majorAccidental(this.tonic) === 'b') {
				this.notes.forEach((note, index) => note.name.major = flatScale.noteNames[index])
			} else {
				this.notes.forEach((note, index) => note.name.major = sharpScale.noteNames[index])
			}
			
			if (enharmonicType(enharmonic) === undefined) {
				if (majorAccidental(this.tonic) === 'b') {
					this.notes.forEach((note, index) => note.name.manual = flatScale.noteNames[index])
				} else {
					this.notes.forEach((note, index) => note.name.manual = sharpScale.noteNames[index])
				}
			} else if (enharmonicType(enharmonic) === 'b') {
				this.notes.forEach((note, index) => note.name.manual = flatScale.noteNames[index])
			} else {
				this.notes.forEach((note, index) => note.name.manual = sharpScale.noteNames[index])
			}

		} else {

			if (enharmonicType(enharmonic) === 'b') {
				this.notes.forEach((note, index) => note.name.manual = ChromaFlat[note.number])
				this.notes.forEach((note, index) => note.name.auto = ChromaFlat[note.number])
			} else {
				this.notes.forEach((note, index) => note.name.manual = Chroma[note.number])
				this.notes.forEach((note, index) => note.name.auto = Chroma[note.number])
			}

			if (majorAccidental(this.tonic) === 'b') {
				this.notes.forEach((note, index) => note.name.major = ChromaFlat[note.number])
			} else {
				this.notes.forEach((note, index) => note.name.major = Chroma[note.number])
			}

		}
		// console.log(this.notes)
	}

	setNoteDegrees() {
		if (this.shape === undefined) {return}

		var indexing = this.shape.majorIndexing

		if (indexing === undefined) {
			indexing = [1,1,1,1,1,1,1]
		} else {
			let count = 1
			if (this.shape.mode !== 0) {
				for (var index = 1; index < 7 ; index++) {
					if (indexing[index] === 1) {count++}
					if (count === this.shape.mode + 1) {break}
				}
			
				let head = indexing.slice(index)
				let tail = indexing.slice(0,index)
				indexing = head.concat(tail)
			}
		}

		if (this.steps().length === 7 || this.shape.majorIndexing !== undefined) {
			const majorSteps = [1,2,2,1,2,2,2]
			var previousMajor = this.tonic;
			var majorNote

			var previousNote = this.tonic
			var note 

			var steps = this.steps()

			var difference
			var thisIndex = 0

			for (var majorIndex = 0; majorIndex < 7; majorIndex++) {
				if (majorIndex === 0) {
					this.notes[majorIndex].degree = '1'
					thisIndex++

				} else {				
					majorNote = noteAdd(previousMajor, majorSteps[majorIndex])
					previousMajor = majorNote

					let inc = indexing[majorIndex]					

					if (inc) {
						note = noteAdd(previousNote, steps[thisIndex])
						previousNote = note						
						
						difference = noteDifference(majorNote, note)
						this.notes[thisIndex].degree = accidentals(difference) + (majorIndex + 1)
						thisIndex++

					}
				}
			}

		} else {
			this.notes.forEach((note, index) => note.degree = index + 1)

			if (JSON.stringify([2, 3, 2, 1, 1, 3]) === JSON.stringify(this.steps())) {
				this.notes[1].degree = 'b3' 
				this.notes[2].degree = '4'
				this.notes[3].degree = 'b5'
				this.notes[4].degree = '5'
				this.notes[5].degree = 'b7'
			}
		}
	}

	hasNote(number) {		
		return this.notes.some(note => note.number === number);
	}

	getNote(number) {
		return this.notes.find(note => note.number === number);
	}

	removeNote(number) {
		if (number === this.tonic) {return}
		const index = this.notes.findIndex(note => note.number === number);
		if (index !== -1) {
			this.notes.splice(index, 1);
		}
	}

	addNote(notenum, style) {

		if (this.hasNote(notenum)) {return}

		this.notes.push(new Note(notenum, style));
		this._sortNotes()		
	}

	steps() {
		var prevNote = this.tonic
		var steps = [noteAdd(prevNote, -this.notes[this.notes.length - 1].number)]	

		for (var [index, note] of this.notes.entries()) {
			if (index > 0) {
				// debugger;
				steps.push(noteAdd(note.number, -prevNote))
				prevNote = note.number
			}
		}
		return steps;
	}

}

export class Note {
	constructor(number, style) {
		this.number = number;		
		this.name = {major: undefined, manual: undefined, auto:undefined};
		this.degree = '';
		this.setStyle(style);		
	}

	setStyle(style) {
		this.style = style;
		switch (style) {
			case 'hidden' :
				this.opacity = 0;
				this.stroke = false;
				this.labelColor = '#330000'
				break;
			case 'full' :
				this.opacity = 1;
				this.stroke = false;
				this.labelColor = '#FFFFFF'
				break;
			case 'faded' :
				this.opacity = 0.3;
				this.stroke = false;
				this.labelColor = '#FFFFFF'
				break;
			case 'outline' :
				this.opacity = 0;
				this.stroke = true;
				this.labelColor = '#FFFFFF'
				break;
			case 'fadeout' :
				this.opacity = 0.3;
				this.stroke = true;
				this.labelColor = '#FFFFFF'
				break;
			default :
				this.opacity = 0.3;
				this.stroke = false;
				this.labelColor = '#FFFFFF'
				break;
		}
	}
}

export function noteName(noteNum) {
	return Chroma[noteNum];
}



export function isEnharmonic(number){
	number %= 12
	return Chroma[number].length > 1;
}

export function enharmonicType(enharmonic){
	if (enharmonic === undefined) {return undefined}

	if (enharmonic.length === 1) {
		return undefined;
	} else  {
		return enharmonic[1]
	}
}

export function enharmonicNeighbours(number) {
	number %= 12

	var names = {sharp: null, flat: null}
	// ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

	let name = Chroma[number]
	let previous = Chroma[noteAdd(number,-1)]
	let next = Chroma[noteAdd(number,1)]
	// debugger;

	if (name.length > 1) { // number = A#, C#, D#, F#, G#: reasonably simple
		names.sharp = name // It's the sharp version of the previous: it's already a "sharp" name
		names.flat = next + 'b'// It's also the flat version of next, A# = Bb etc

	} else { // It's either B, C, A/D (or E, F, G) same approach respectively but more complex: three scenarios
		if (previous.length === 1) { // C, F only
			names.sharp = previous + '#' // C = B#, F = E#
			names.flat = name // C# flat = C, F# flat = F
		} else { // B/E, A/D/G
			names.sharp = name // Not going to use 'A##' etc, going to leave it as is
			if (next.length === 1) { // B, E
				names.flat = next + 'b'
			} else { // A/D/G
				names.flat = name;
			}

		}
	}

	return names ;

}

export function bareName(number) {
	return Chroma[number][0];
}


export function majorAccidental(number) {
	// Lookup table with the result of 'getEnharmonicScale' in mind
	// It says "For each note, which scale should we choose 
	switch (noteName(number)) {
				
		case 'B': // Default "B" over "Cb"
		case 'E': // E, F#...	
		case 'A': // A, B, C#...
		case 'D': // D, E, F#...
		case 'G': // G...F#
		case 'F#': //  Equal number of # and B: sharp is usually associated with stringed instruments (apparently because fretting = "#" a note...)
			return '#';
		case 'G#':
		case 'A#':
		case 'D#':
		case 'C#':
		case 'C': // Default "C" over "B#"
		case 'F':
			return 'b';
	}
}

export function noteNum(noteName) {
	return Chroma.indexOf(noteName);
}

export function noteAdd(num1, num2) {
	let sum = num1 + num2;
	if (sum < 0) {
		sum = (sum % 12) + 12;
	} else if (sum >= 12) {
		sum = sum % 12;
	}
	return sum;
}

export function noteDifference(number, relative) {
	var lowOctave, highOctave

	lowOctave = relative - number

	if (number < relative) {
		highOctave = -((number + 12) - relative)
	} else {
		highOctave = (relative + 12) - number			
	}			

	if (Math.abs(lowOctave) < Math.abs(highOctave))	{
		return lowOctave;
	} else {
		return highOctave;
	}

}

function getOrdinal(number) {
	switch (number) {
		case 0: 
			return '';
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
}

function accidentals(semitones) {
	// debugger;
	let flat = 'b'
	let sharp = '#'
	// semitones %= 12

	if (semitones > 0) {
		return sharp.repeat(semitones);
	} else {
		return flat.repeat(Math.abs(semitones));
	}
}

function nextBareName(name) {
	const names = 'ABCDEFG';

	if (names.indexOf(name[0]) === 6) {
		return 'A';
	} else {
		return names[names.indexOf(name[0]) + 1];
	}
}

function getEnharmonicScale(accidental, noteNumbers) {
	var scale = []
	var accidentalCount = 0 
	var tonicName = ''

	if (accidental === "b") {
		tonicName = enharmonicNeighbours(noteNumbers[0]).flat
	} else {
		tonicName = enharmonicNeighbours(noteNumbers[0]).sharp
	}

	scale.push(tonicName)

	for (var i = 1; i < 7; i++) {
			let nextName = nextBareName(scale[scale.length - 1])				
			let accidentalList = accidentals(noteDifference(noteNum(nextName),noteNumbers[i]))
			
			scale.push(nextName + accidentalList)		
			accidentalCount += accidentalList.length
	}

	return {noteNames: scale, accidentalCount: accidentalCount}

}	