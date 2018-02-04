import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SelectLanguageDropdownComponent } from './shared-components/select-language-dropdown/select-language-dropdown.component';

import { LanguagesService } from './_services/languages.service';
import { PhrasebookComponent } from './router-components/phrasebook/phrasebook.component';
import { MainRowComponent } from './router-components/phrasebook/main-row/main-row.component';
import { TargetRowComponent } from './router-components/phrasebook/target-row/target-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLanguageDropdownComponent,
    PhrasebookComponent,
    MainRowComponent,
    TargetRowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
