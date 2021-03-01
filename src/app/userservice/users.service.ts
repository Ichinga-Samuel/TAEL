import { Injectable, Inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from "../bookservice/books.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: any;
  constructor(private http: HttpClient, @Inject(API_URL) private url: string) {
    this.user = (url, body) => this.http.post(url, body)
  }

  createUser(body) {
    let url = `${this.url}/users/create`;
    return this.user(url, body)
  }
}
