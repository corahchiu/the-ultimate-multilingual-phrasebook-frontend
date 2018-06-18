import { Component, OnInit } from '@angular/core';
import { SearchPhraseService } from '../../../_services/search-phrase.service';

@Component({
  selector: 'app-target-row',
  templateUrl: './target-row.component.html',
  styleUrls: ['./target-row.component.css']
})
export class TargetRowComponent implements OnInit {

  allPhrases: any;

  targetRows: Array<TargetRow> = [];

    constructor(private searchPhraseService: SearchPhraseService) {
      this.targetRows.push(new TargetRow(''));
      this.targetRows.push(new TargetRow(''));
      this.searchPhraseService.targetPhrases.subscribe(allPhrases => this.allPhrases = allPhrases);
     }

    ngOnInit() {
    }

    addNewRow(): void {
      this.targetRows.push(new TargetRow(''));
    }

    removeRow(row): void {
      if (this.targetRows.length > 2) {
        this.targetRows.splice(this.targetRows.indexOf(row), 1);
      }
    }

    moveRowUp(row): void {
      const i: number = this.targetRows.indexOf(row);
      if (i > 0) {
        this.targetRows[i] = this.targetRows[i - 1];
        this.targetRows[i - 1] = row;
       }
    }

    moveRowDown(row): void {
      const i: number = this.targetRows.indexOf(row);
      if (i < this.targetRows.length - 1) {
        this.targetRows[i] = this.targetRows[i + 1];
        this.targetRows[i + 1] = row;
       }
    }

    onLanguageSelect(targetRow, language) {
      targetRow.language = language;
    }
  }

  export class TargetRow {
    constructor(public language: string) {
    }
  }

