import scaleTypes from './components/scaleTypes.json'
import scaleThemes from './components/scaleThemes.json'

export const Chroma = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

export  class ScNote {
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
				this.ntOpacity = 0.3;
				this.ntStroke = false;
				break;
			case 2 :
				this.ntOpacity = 0;
				this.ntStroke = true;
				break;
		}
	}
}

export class ScaleInstance {
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

	hasNote(noteNum) {		
		return this.notes.some(note => note.ntNum === noteNum);
	}

	getNote(noteNum) {
		return this.notes.find(note => note.ntNum === noteNum);
	}
}