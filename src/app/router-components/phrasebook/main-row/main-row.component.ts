import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-row',
  templateUrl: './main-row.component.html',
  styleUrls: ['./main-row.component.css']
})
export class MainRowComponent implements OnInit {

  language = '';
  searchedLanguage = '';
  searchedPhrase = '';

  constructor() { }

  ngOnInit() {
  }

  selectLanguage(language) {
    console.log(language);
    this.language = language;
  }

  searchPhrase(phrase) {
    // 1. display this.language in main row
    console.log(phrase);
    this.searchedLanguage = this.language;
    this.searchedPhrase = phrase;
    // 2. put this.searchedLanguage and this.searchedPhrase in object, and send to search-phrase.service
  }

}
