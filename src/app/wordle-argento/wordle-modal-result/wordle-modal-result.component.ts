import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-wordle-modal-result',
  templateUrl: './wordle-modal-result.component.html',
  styleUrls: ['./wordle-modal-result.component.scss'],
})
export class WordleModalResultComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<WordleModalResultComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      message: string;
      title: string;
      word: string;
      winOrLose: boolean;
    }
  ) {}

  ngOnInit(): void {}
}
