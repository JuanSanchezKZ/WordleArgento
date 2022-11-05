import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { WordleWordsService } from '../wordle-services/wordle-words.service';

@Component({
  selector: 'app-wordle-cell',
  templateUrl: './wordle-cell.component.html',
  styleUrls: ['./wordle-cell.component.scss'],
})
export class WordleCellComponent implements OnInit, OnChanges {
  @Input('wordleInput') wordleInput: any;

  constructor(private words: WordleWordsService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}
}
