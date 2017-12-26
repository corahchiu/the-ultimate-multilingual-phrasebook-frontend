import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SelectLanguageDropdownComponent } from './select-language-dropdown/select-language-dropdown.component';

import { LanguagesService } from './_services/languages.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SelectLanguageDropdownComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [LanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
