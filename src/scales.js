import scaleShapes from './components/scaleShapes.json'
import scaleThemes from './components/scaleThemes.json'

export const Chroma = ['A','A#','B','C','C#','D','D#','E','F','F#','G','G#'];

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

				this.shape = {name: 'Custom', mode: 0, steps}
				this.description = 'Custom ' + this.notes.length + ' note scale'
			}
			
		}
	}

	setNoteNames() {		

		if (this.notes.length === 7
			&& this.shape.name !== 'Custom' 
			&& typeof this.shape !== undefined) {		

			var sharpEnharmonics = [Chroma[this.tonic]]
			var sharpAccidentalCount = 0
			var flatEnharmonics	
			var flatAccidentalCount	= 0
			var isEnharmonic = false
			var nextNote
			// debugger;
			if (Chroma[this.tonic].length === 2) {				
				flatEnharmonics = [Chroma[noteAdd(this.tonic, 1)][0] + 'b']
				isEnharmonic = true
			}

			for (i = 1; i < 7; i++) {
				let nextName = nextBareName(sharpEnharmonics[sharpEnharmonics.length - 1])				
				let accidentalString = accidentals(noteDifference(noteNum(nextName),this.notes[i].number))
				
				sharpEnharmonics.push(nextName + accidentalString)		
				sharpAccidentalCount += accidentalString.length
			}

			if (isEnharmonic) {

				for (var i = 1; i < 7; i++) {
					let nextName = nextBareName(flatEnharmonics[flatEnharmonics.length - 1])
					let accidentalString = accidentals(noteDifference(noteNum(nextName), this.notes[i].number))
					
					flatEnharmonics.push(nextName + accidentalString)		
					flatAccidentalCount += accidentalString.length
				}

			} else { flatEnharmonics = sharpEnharmonics }	


			if (this.steps.length === 7 && (this.shape.name !== 'Major' || this.shape.mode !== 0)) {

				switch (majorEnharmonic(this.tonic)) {
					case 'b' :
						this.notes.forEach((note, index) => note.name = flatEnharmonics[index])
						break;
					case 'f' :
						this.notes.forEach((note, index) => note.name = sharpEnharmonics[index])
						break;
				}

			} else {

				if (flatAccidentalCount < sharpAccidentalCount) {
					this.notes.forEach((note, index) => note.name = flatEnharmonics[index])
				} else {
					this.notes.forEach((note, index) => note.name = sharpEnharmonics[index])
				}
			}

		// else if it's a custom scale, or not 7 notes, just use the default # from Chroma
		} else {
			this.notes.forEach((note) => note.name = Chroma[note.number]);
		}


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

	// _addNote(notenum, style) {
	// 	if (this.hasNote(notenum)) {return}
	// 	this.notes.push(new Note(notenum, style));
	// }

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
		this.name = Chroma[number];
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

export function majorEnharmonic(number) {
	
	switch (number) {

		case 0:
		case 2:
		case 3:
		case 5:
		case 7:
		case 9:
		case 10:
			return '#';

		case 1:
		case 4:
		case 6:
		case 8:
		case 11:
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