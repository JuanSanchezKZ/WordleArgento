import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordleWordsService {
  words = [
    'CAGAR',
    'NDEAH',
    'JODER',
    'BURRO',
    'BONDI',
    'JAVIE',
    'CHAFI',
    'PIOLA',
    'FLACA',
    'FACHO',
    'CURDA',
    'FACHA',
  ];
  rightGuessString = this.words[Math.floor(Math.random() * this.words.length)];
  constructor() {}
}
