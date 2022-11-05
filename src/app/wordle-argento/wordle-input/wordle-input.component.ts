import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-wordle-input',
  templateUrl: './wordle-input.component.html',
  styleUrls: ['./wordle-input.component.scss'],
})
export class WordleInputComponent implements OnInit, OnChanges {
  @Output() private onFormGroupChange = new EventEmitter<any>();
  @Input('bgColor') bgColor: any[] = [];
  public qwertyKeyboard = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['ELIMINAR', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENVIAR'],
  ];
  arrKeys: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  public onSubmit(key: string) {
    this.onFormGroupChange.emit(key);
  }
  ngOnInit(): void {}
}
