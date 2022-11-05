import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleCellComponent } from './wordle-cell.component';

describe('WordleCellComponent', () => {
  let component: WordleCellComponent;
  let fixture: ComponentFixture<WordleCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
