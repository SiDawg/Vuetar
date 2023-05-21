import scaleShapes from './components/scaleShapes.json'
import scaleThemes from './components/scaleThemes.json'

export const Chroma = ['A','Bb','B','C','Db','D','Eb','E','F','Gb','G','Ab'];

export  class ScNote {
	constructor(ntChromaNum, ntScaleNum, ntMajorRelNum, ntStyle) {
		this.ntChromaNum = ntChromaNum;
		this.ntScaleNum = ntScaleNum;
		this.ntMajorRelNum = ntMajorRelNum;
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
		const scaleObj = scaleShapes.find(obj => obj.name === this.scaleType);
		const majorObj = scaleShapes.find(obj => obj.name === 'Major');

		if (typeof scaleObj === 'undefined') {
			console.log('scaleObj is undefined "' + this.scaleType + '"');
		} else {
			var stepIndex = this.mode;
			var noteIndex = 0;
			var absScaleNum = 1;
			var prevNoteNum = this.tonic;
			var newNoteNum = this.tonic;
			var prevRef = this.tonic;
			var newRef =this.tonic;
			var majorRelChar = '';
			var majorRelNoteNum = '';

			do {
				// scNote(ntChromaNum, ntScaleNum, ntmajorRelNoteNum, ntStyle)
				if (noteIndex === 0) {
					this.notes.push(new ScNote(this.tonic, 1, 1, scaleThemes[this.scTheme][0]));
				} else {
					newNoteNum = (prevNoteNum + scaleObj.absSteps[stepIndex]);
					newRef = (prevRef + majorObj.absSteps[noteIndex]);
					majorRelChar = this.getmajorRelChar(newRef, newNoteNum);
					majorRelNoteNum = majorRelChar + (noteIndex + 1);					

					if (scaleThemes[this.scTheme][noteIndex] !== 0) {
						absScaleNum++;
					}

					if (this.scName === 'Blues' && absScaleNum === 4) {
						absScaleNum++;
					}

					this.notes.push(new ScNote(newNoteNum % 12, absScaleNum, majorRelNoteNum, scaleThemes[this.scTheme][noteIndex]));

					prevNoteNum = newNoteNum;
					prevRef = newRef;
				}
				noteIndex++;
				stepIndex++;
				if (stepIndex > scaleObj.absSteps.length - 1) {stepIndex = 0}
			} while (noteIndex <= scaleObj.absSteps.length - 1);

			// stupid blues scale exception
			// (ntChromaNum, ntScaleNum, nMajorRelNum, ntStyle)

			if (this.scName === 'Blues') {
				this.notes.push(new ScNote((this.tonic + 6) % 12, '4', '♭5', 3));
			}
		}
	}

	getmajorRelChar(RootNum, ModeNum) {
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