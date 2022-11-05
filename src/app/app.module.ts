import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordleCellComponent } from './wordle-argento/wordle-cell/wordle-cell.component';
import { WordlePanelComponent } from './wordle-argento/wordle-panel/wordle-panel.component';
import { WordleInputComponent } from './wordle-argento/wordle-input/wordle-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WordleNavbarComponent } from './wordle-argento/wordle-navbar/wordle-navbar.component';
import { WordleFooterComponent } from './wordle-argento/wordle-footer/wordle-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { WordleModalComponent } from './wordle-argento/wordle-modal/wordle-modal.component';
import { WordleModalResultComponent } from './wordle-argento/wordle-modal-result/wordle-modal-result.component';

@NgModule({
  declarations: [
    AppComponent,
    WordleCellComponent,
    WordlePanelComponent,
    WordleInputComponent,
    WordleNavbarComponent,
    WordleFooterComponent,
    WordleModalComponent,
    WordleModalResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
