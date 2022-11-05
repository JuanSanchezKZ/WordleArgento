import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VALID_GUESSES } from 'src/constants/validGuesses';
import { WordleModalResultComponent } from '../wordle-modal-result/wordle-modal-result.component';

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
  triggerAnimation: boolean[] = [];
  bgColor: any[] = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['ELIMINAR', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENVIAR'],
  ];

  constructor(public words: WordleWordsService, private dialog: MatDialog) {}

  public onFormGroupChangeEvent(_event: any) {
    this.wordleInput = _event;
    this.checkWord();
  }

  checkWord() {
    const wordWrapper = this.wordWrapper[this.guessesRemaining - 1];

    if (
      this.wordleInput === 'ENVIAR' &&
      wordWrapper.word.length === 5 &&
      VALID_GUESSES.includes(wordWrapper.word.join('').toLowerCase())
    ) {
      this.checkColor();
      this.guessesRemaining -= 1;
      this.color.push('white');
      this.triggerAnimation.push(true);

      if (wordWrapper.word.join('') === this.words.rightGuessString) {
        this.showModal(true, this.words.rightGuessString);
        return;
      }
    }

    if (
      !(this.wordleInput == 'ENVIAR' || this.wordleInput == 'ELIMINAR') &&
      wordWrapper.word.length < 5
    ) {
      wordWrapper.word.push(this.wordleInput);
    }

    if (this.wordleInput == 'ELIMINAR') {
      wordWrapper.word.pop();
    }

    if (this.guessesRemaining === 0) {
      this.showModal(false, this.words.rightGuessString);
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
        this.shadeKeyboard(wordWrapper.word[i], 'grey');
      } else {
        if (wordWrapper.word[i] === this.words.rightGuessString[i]) {
          this.letterColor[this.guessesRemaining - 1].colors.push('#22c55e');
          this.shadeKeyboard(wordWrapper.word[i], '#22c55e');
        } else {
          this.letterColor[this.guessesRemaining - 1].colors.push('#eab308');
          this.shadeKeyboard(wordWrapper.word[i], '#eab308');
        }
      }
    }
  }

  shadeKeyboard(word: string, color: string) {
    this.bgColor.forEach((element) => {
      if (element.findIndex((e: any) => e === word) !== -1) {
        const index = element.findIndex((e: any) => e === word);
        return element.splice(index, 1, color);
      }
    });

    console.log(this.bgColor);
  }

  showModal(result: boolean, word: string) {
    this.dialog.open(WordleModalResultComponent, {
      data: {
        message: result
          ? 'Bien ahí capo ganaste.'
          : ` Mal ahí como vas a perder man. La palabra era ${word}`,
        title: result
          ? 'Gananaste el Wordle Argento'
          : 'Perdiste el Wordle Argento',
        word: word,
        winOrLose: result,
      },
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
