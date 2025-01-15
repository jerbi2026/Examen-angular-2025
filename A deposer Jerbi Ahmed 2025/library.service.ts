import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private apiUrl = 'http://localhost:3000/api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  private baseUrl = 'https://www.googleapis.com/books/v1/volumes';

  rechercherLivre(titre: string): Observable<any> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(titre)}`;
    return this.http.get(url);
  }

  get_best_sellers(){
    return this.http.get('https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=1GosiDs8NY2GUqzf1r34lUT09ihQI3aX');
  }

  
}