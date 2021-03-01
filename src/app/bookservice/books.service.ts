import { Injectable, Inject} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';

export let API_URL: string = 'https://glacial-brushlands-69012.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public api;
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {
    this.api = url => this.http
      .get(url)
  }
  loadLatest(): any{
    let url = `${this.url}/api/books/latest`;
    return this.api(url)
  }
  findBook(query): any{
    let url = `${this.url}/api/books/search?q=query`;
    return this.api(url)
  }
  findAuthor(author): any{
    let url = `${this.url}/api/author?q=author`;
    return this.api(url)
  }
}
