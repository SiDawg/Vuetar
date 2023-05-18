import scaleTypes from './components/scaleTypes.json'
import scaleThemes from './components/scaleThemes.json'

export const Chroma = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

export  class ScNote {
	constructor(ntChromaNum, ntScaleNum, ntRootModeNum, ntStyle) {
		this.ntChromaNum = ntChromaNum;
		this.ntScaleNum = ntScaleNum;
		this.ntRootModeNum = ntRootModeNum;
		this.ntStyle = ntStyle;
		this.ntName = Chroma[ntChromaNum];

		switch (ntStyle) {
			case 0 :
				this.ntShow = false;
				this.ntOpacity = 0;
				this.ntStroke = false;
				break;
			case 1 :
				this.ntShow = true;
				this.ntOpacity = 1;
				this.ntStroke = false;
				break;
			case 2 :
				this.ntShow = true;
				this.ntOpacity = 0.3;
				this.ntStroke = false;
				break;
			case 3 :
				this.ntShow = true;
				this.ntOpacity = 0;
				this.ntStroke = true;
				break;
		}
	}
}

export class ScaleInstance {
	constructor(scaleType, tonic, mode, scColor, scTheme, scName) {
		this.scaleType = scaleType;

		if (typeof tonic === 'number') {
			this.tonic = tonic;
		} else {				
			this.tonic = Chroma.indexOf(tonic)
		}			

		this.mode = mode;
		this.scColor = scColor;
		this.scTheme = scTheme;
		this.scName = scName;
		this.notes = [];
		this.setNotes();
	}

	setNotes() {
		const scaleObj = scaleTypes.find(obj => obj.name === this.scaleType);

		if (typeof scaleObj === 'undefined') {
			console.log('scaleObj is undefined' + this.scaleType);
		} else {
			var stepIndex = this.mode;
			var noteIndex = 0;
			var prevNoteNum = this.tonic;
			var newNoteNum = this.tonic;
			var prevRef = this.tonic;
			var newRef =this.tonic;
			var rootModeString = '';
			var rootModeNum = '';

			do {
				// scNote(ntChromaNum, ntScaleNum, ntRootModeNum, ntStyle)
				if (noteIndex === 0) {
					this.notes.push(new ScNote(this.tonic, 1, 1, scaleThemes[this.scTheme][0]));
				} else {
					newNoteNum = (prevNoteNum + scaleObj.absSteps[stepIndex]);
					newRef = (prevRef + scaleObj.absSteps[noteIndex]);
					rootModeString = this.getRootModeString(newRef, newNoteNum);
					rootModeNum = rootModeString + (noteIndex + 1);

					this.notes.push(new ScNote(newNoteNum % 12, noteIndex + 1, rootModeNum, scaleThemes[this.scTheme][noteIndex]));

					prevNoteNum = newNoteNum;
					prevRef = newRef;
				}
				noteIndex++;
				stepIndex++;
				if (stepIndex > scaleObj.absSteps.length - 1) {stepIndex = 0}

			} while (noteIndex <= scaleObj.absSteps.length - 1);

		}
	}

	getRootModeString(RootNum, ModeNum) {
		var noteDiff = Math.abs(RootNum - ModeNum)
		if (RootNum > ModeNum) {
			return "♭".repeat(noteDiff);
		} else {
			return "♯".repeat(noteDiff);
		}
	}

	hasNote(noteNum) {		
		return this.notes.some(note => note.ntChromaNum === noteNum);
	}

	getNote(noteNum) {
		return this.notes.find(note => note.ntChromaNum === noteNum);
	}
}