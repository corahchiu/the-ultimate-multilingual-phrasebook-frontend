import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../_services/languages.service';

@Component({
  selector: 'app-select-language-dropdown',
  templateUrl: './select-language-dropdown.component.html',
  styleUrls: ['./select-language-dropdown.component.css']
})
export class SelectLanguageDropdownComponent implements OnInit {
  languages: Array<any> = [];

  constructor(private languagesService: LanguagesService) { }

  ngOnInit() {
    // retrieve languages.json from express
    this.languagesService.getAllLanguages().subscribe(languages => {
      this.languages = languages;
    });
  }

}
