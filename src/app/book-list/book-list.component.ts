import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Books, Offers } from '../book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private data: DataService) { }
  books : Books;
  offers : Offers;
  ngOnInit() {
    this.getBooks();
    
  }
  getBooks(){
    this.data.httpGet().subscribe(books =>{
      this.books = books;
      this.data.books = books;
      console.log(books)
    })
  }
  public getOffers(){
    let isbns = [];
    let selection = this.data.filteredListOptions();
    console.log({selection});
    if(selection.length <= 0){
      return;
    }
    selection.forEach(element => {
      isbns.push(element.isbn);
    });
    let queryString = isbns.concat(',');
    this.data.httpOffers(queryString).subscribe(offers =>{
      this.offers = offers;
      console.log({offers});
    })
  }
  
  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }
  getFilteredExpenseList() {
    if (this.data.searchOption.length > 0)
      this.books = this.data.filteredListOptions();
    else {
      this.books = this.data.books;
    }
  }
}
