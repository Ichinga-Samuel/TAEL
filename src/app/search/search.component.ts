import {Component, ElementRef, OnInit, Output} from '@angular/core';
import {BooksService} from "../bookservice/books.service";
import {Observable, fromEvent} from "rxjs";
import {pluck, filter, debounceTime, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sr: any; // search results
  constructor(private BS: BooksService, private se: ElementRef) {

  }
  search(){
        // @ts-ignore
    fromEvent(this.se.nativeElement, 'keyup')
          .pipe(
          pluck('target', 'value'),
          filter((v: string) => v.length >= 3),
          debounceTime(1000),
          switchMap(q => this.BS.findBook(q)),
          )
          .subscribe(results => this.sr=results)
      }
  ngOnInit(): void {
    this.search()
  }

}
