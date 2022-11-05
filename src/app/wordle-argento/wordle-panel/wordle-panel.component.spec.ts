import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordlePanelComponent } from './wordle-panel.component';

describe('WordlePanelComponent', () => {
  let component: WordlePanelComponent;
  let fixture: ComponentFixture<WordlePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordlePanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordlePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
