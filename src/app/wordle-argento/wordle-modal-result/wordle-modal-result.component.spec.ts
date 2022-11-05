import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleModalResultComponent } from './wordle-modal-result.component';

describe('WordleModalResultComponent', () => {
  let component: WordleModalResultComponent;
  let fixture: ComponentFixture<WordleModalResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleModalResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleModalResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
