import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'
import { Books, Offers, Offer } from '../book';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private data: DataService) { }
  books : Books;
  offers : Offers;
  minus : boolean = false;
  slice : boolean = false;
  percentage : boolean = false;
  bestOffer : Offer;
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
      let values = [];

      offers.offers.forEach(offer =>{
        values.push(offer.value);
      });
      if(values.length <= 1){
        return;
      }
      let bestValue = Math.max(values[0], values[1], values[2]);
      
      for(let i = 0; i < values.length; i++){
        if(bestValue === offers.offers[i].value){
          this.bestOffer = offers.offers[i];
        }
      }
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
