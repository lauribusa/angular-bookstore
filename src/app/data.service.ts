import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book, Books, Offers } from './book';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  searchOption=[]
  domain : string = 'http://henri-potier.xebia.fr';
  booksRoute : string = '/books/';
  offersRoute : string = '/commercialOffers';
  public books : Books;
  constructor(private http: HttpClient) { }

  public httpGet(): Observable<Books>{
    return this.http.get<Books>(this.domain+this.booksRoute);
  }

  public httpOffers(isbn) : Observable<Offers> {
    return this.http.get<Offers>(this.domain+this.booksRoute+isbn+this.offersRoute)
  }
  public filteredListOptions() {
    let books = this.books;
        let filteredPostsList = [];
        for (let book of books) {
            for (let options of this.searchOption) {
                if (options.title === book.title) {
                  filteredPostsList.push(book);
                }
            }
        }
        console.log(filteredPostsList);
        return filteredPostsList;
  }
}
