import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './router-components/phrasebook/search-bar/search-bar.component';
import { SelectLanguageDropdownComponent } from './shared-components/select-language-dropdown/select-language-dropdown.component';

import { LanguagesService } from './_services/languages.service';
import { PhrasebookComponent } from './router-components/phrasebook/phrasebook.component';
import { TableComponent } from './router-components/phrasebook/table/table.component';
import { MainRowComponent } from './router-components/phrasebook/table/main-row/main-row.component';
import { TargetRowComponent } from './router-components/phrasebook/table/target-row/target-row.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SelectLanguageDropdownComponent,
    PhrasebookComponent,
    TableComponent,
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
