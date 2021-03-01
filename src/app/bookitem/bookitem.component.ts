import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from "../filedownload/firebase.service";

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.css']
})
export class BookitemComponent implements OnInit {
  @Input() book;
  ratings: number;
  constructor(public FS: FirebaseService) {

  }
  rate(rate: number): void{
    this.ratings = rate;
}
  ngOnInit(): void {
  }

}
