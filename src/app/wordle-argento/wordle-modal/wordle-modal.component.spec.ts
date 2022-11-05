import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleModalComponent } from './wordle-modal.component';

describe('WordleModalComponent', () => {
  let component: WordleModalComponent;
  let fixture: ComponentFixture<WordleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
