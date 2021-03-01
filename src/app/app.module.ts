import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LatestBooksComponent } from './latestbooks/latestbooks.component';
import {HttpClientModule} from "@angular/common/http";
import {BooksService, API_URL} from  './bookservice/books.service';
import { BookitemComponent } from './bookitem/bookitem.component';
import { SearchComponent } from './search/search.component';
import { UserregComponent } from './userreg/userreg.component'
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LatestBooksComponent,
    BookitemComponent,
    SearchComponent,
    UserregComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [BooksService, {provide: API_URL, useValue: API_URL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
