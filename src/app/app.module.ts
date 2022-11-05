import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleCellComponent } from './wordle-argento/wordle-cell/wordle-cell.component';
import { WordlePanelComponent } from './wordle-argento/wordle-panel/wordle-panel.component';
import { WordleInputComponent } from './wordle-argento/wordle-input/wordle-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WordleNavbarComponent } from './wordle-argento/wordle-navbar/wordle-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WordleCellComponent,
    WordlePanelComponent,
    WordleInputComponent,
    WordleNavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
