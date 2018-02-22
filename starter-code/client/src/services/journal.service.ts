import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
    
  getList() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }
  
  get(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }
  
  edit(item) {
    return this.http.put(`${this.BASE_URL}/api/journal-entries/${item.id}`, item)
      .map((res) => res.json());
  }
  
  remove(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/delete/${id}`)
      .map((res) => res.json());
  }
}