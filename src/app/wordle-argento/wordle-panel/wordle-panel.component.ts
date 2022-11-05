import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { WordleWordsService } from '../wordle-services/wordle-words.service';

@Component({
  selector: 'app-wordle-panel',
  templateUrl: './wordle-panel.component.html',
  styleUrls: ['./wordle-panel.component.scss'],
})
export class WordlePanelComponent implements OnInit, OnChanges {
  NUMBER_OF_GUESSES = 6;
  cellAmount = new Array(5);
  rowAmount = new Array(this.NUMBER_OF_GUESSES);
  wordleInput = '';
  wordWrapper: any[] = [
    { word: [] },
    { word: [] },
    { word: [] },
    { word: [] },
    { word: [] },
    { word: [] },
  ];
  letterColor: any[] = [
    { colors: [] },
    { colors: [] },
    { colors: [] },
    { colors: [] },
    { colors: [] },
    { colors: [] },
  ];
  guessesRemaining = 6;
  guessesIndex = [5, 4, 3, 2, 1, 0];
  color: string[] = [];

  constructor(public words: WordleWordsService) {}

  public onFormGroupChangeEvent(_event: any) {
    this.wordleInput = _event;
    this.checkWord();
  }

  checkWord() {
    const wordWrapper = this.wordWrapper[this.guessesRemaining - 1];

    if (this.wordleInput === 'ENTER' && wordWrapper.word.length === 5) {
      this.checkColor();
      this.guessesRemaining -= 1;
      this.color.push('white');

      if (wordWrapper.word.join('') === this.words.rightGuessString) {
        alert('PALABRA CORRECTA');
        return;
      }
    }

    if (
      !(this.wordleInput == 'ENTER' || this.wordleInput == 'BACKSPACE') &&
      wordWrapper.word.length < 5
    ) {
      wordWrapper.word.push(this.wordleInput);
    }

    if (this.wordleInput == 'BACKSPACE') {
      wordWrapper.word.pop();
    }

    if (this.guessesRemaining === 0) {
      alert('NO MAS GUESSES');
    }
  }

  checkColor() {
    const wordWrapper = this.wordWrapper[this.guessesRemaining - 1];

    for (let i = 0; i < this.cellAmount.length; i++) {
      let letterPosition = this.words.rightGuessString.indexOf(
        wordWrapper.word[i]
      );

      if (letterPosition === -1) {
        this.letterColor[this.guessesRemaining - 1].colors.push('grey');
      } else {
        if (wordWrapper.word[i] === this.words.rightGuessString[i]) {
          this.letterColor[this.guessesRemaining - 1].colors.push('#22c55e');
        } else {
          this.letterColor[this.guessesRemaining - 1].colors.push('#eab308');
        }
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
