import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-wordle-input',
  templateUrl: './wordle-input.component.html',
  styleUrls: ['./wordle-input.component.scss'],
})
export class WordleInputComponent implements OnInit {
  @Output() private onFormGroupChange = new EventEmitter<any>();

  public qwertyKeyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'ELIMINAR'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENVIAR'],
  ];

  constructor() {}

  public onSubmit(key: string) {
    console.log(key);
    this.onFormGroupChange.emit(key);
  }
  ngOnInit(): void {}
}
