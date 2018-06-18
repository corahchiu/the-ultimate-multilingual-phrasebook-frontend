import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchPhraseService {

  constructor(private http: Http) { }

  private phraseSearched = new BehaviorSubject<any>({result: '-'});
  targetPhrases = this.phraseSearched.asObservable();

  search(obj) {
    const result = this.http.post('http://localhost:3000/search', obj)
      .subscribe(res => this.phraseSearched.next(res.json()));
    this.phraseSearched.next(result); // send result to target rows
  }

}
