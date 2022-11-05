import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleFooterComponent } from './wordle-footer.component';

describe('WordleFooterComponent', () => {
  let component: WordleFooterComponent;
  let fixture: ComponentFixture<WordleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
