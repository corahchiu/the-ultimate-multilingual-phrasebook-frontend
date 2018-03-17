import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchPhraseService {

  constructor(private http: Http) { }

  search(obj) {
    return this.http.post('http://localhost:3000/search', obj)
      .subscribe(res => console.log(res.json()));
      // TODO: send results to target rows
  }

}
