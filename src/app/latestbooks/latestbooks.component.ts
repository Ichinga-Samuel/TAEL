import { Component, OnInit } from '@angular/core';
import {BooksService} from '../bookservice/books.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators'
import {FirebaseService} from "../filedownload/firebase.service";

@Component({
  selector: 'app-latestbooks',
  templateUrl: './latestbooks.component.html',
  styleUrls: ['./latestbooks.component.css']
})
export class LatestBooksComponent implements OnInit {
  public results: any;
  public loading: boolean;
  constructor(private BS: BooksService, private FS: FirebaseService) {

  }
  ngOnInit(): void {
    this.BS.loadLatest().pipe(tap(data => {this.loading=true})).subscribe(data => {
      this.results=data;
      //console.log()
      //this.results.imageUrl = this.FS.getUrl(this.results.imageUrl)
    })
  }

}
