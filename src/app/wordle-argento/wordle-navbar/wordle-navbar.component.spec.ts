import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordleNavbarComponent } from './wordle-navbar.component';

describe('WordleNavbarComponent', () => {
  let component: WordleNavbarComponent;
  let fixture: ComponentFixture<WordleNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordleNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
