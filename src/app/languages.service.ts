import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguagesService {

  constructor(private http: Http) { }

  getAllLanguages() {
    return this.http.get('http://localhost:3000')
      .map(res => res.json());
  }

}
