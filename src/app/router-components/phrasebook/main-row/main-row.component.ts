import { Component, OnInit } from '@angular/core';
import { SearchPhraseService } from '../../../_services/search-phrase.service';

@Component({
  selector: 'app-main-row',
  templateUrl: './main-row.component.html',
  styleUrls: ['./main-row.component.css']
})
export class MainRowComponent implements OnInit {

  language = '';
  searchedLanguage = '';
  searchedPhrase = '';

  constructor(private searchPhraseService: SearchPhraseService) { }

  ngOnInit() {
  }

  selectLanguage(language) {
    this.language = language;
  }

  searchPhrase(phrase) {
    // 1. display this.language in main row
    this.searchedLanguage = this.language;
    // TODO: add function to process single word (small letters only)/proper nouns
    this.searchedPhrase = phrase.charAt(0).toUpperCase() + phrase.substr(1).toLowerCase();
    // 2. put this.searchedLanguage and this.searchedPhrase in object, and send to search-phrase.service
    let obj = {phrase: this.searchedPhrase, language: this.searchedLanguage};
    this.searchPhraseService.search(obj);
  }

}
