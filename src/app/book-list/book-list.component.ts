import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private http: HttpService) { }
  books : any;
  ngOnInit() {
    this.getBooks();
    
  }
  getBooks(){
    this.http.httpGet().subscribe(books =>{
      this.books = books;
      console.log(books)
    })
  }
  getOffers(){
    let isbns = [];
    this.books.forEach(element => {
      isbns.push(element.isbn);
    });
    console.log(isbns);
    let queryString = isbns.concat(',');
    this.http.httpOffers(queryString).subscribe(offers =>{
      console.log(offers);
    })
  }

}
