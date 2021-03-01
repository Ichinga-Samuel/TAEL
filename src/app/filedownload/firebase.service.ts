import { Injectable } from '@angular/core';
import {AngularFireModule} from "@angular/fire";
import {AngularFireStorage, AngularFireStorageReference} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  downloadUrl: string;
  constructor(private storage: AngularFireStorage) {
  }
  getUrl(): string {
    let urlRef = this.storage.refFromURL('gs://africa-ebook-library.appspot.com/Chimamanda Ngozi Adichie - image.JPG');
    urlRef.getDownloadURL().subscribe(d => this.downloadUrl = d)
    return this.downloadUrl
  }
}
