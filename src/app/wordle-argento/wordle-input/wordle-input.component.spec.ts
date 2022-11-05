import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleInputComponent } from './wordle-input.component';

describe('WordleInputComponent', () => {
  let component: WordleInputComponent;
  let fixture: ComponentFixture<WordleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
