import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  /*"isbn": "c8fabf68-8374-48fe-a7ea-a00ccd07afff",
      "title": "Henri Potier à l'école des sorciers",
      "price": 35,
      "cover": "http://henri-potier.xebia.fr/hp0.jpg",
      "synopsis"*/
    
    domain = 'http://henri-potier.xebia.fr';
    booksUrl = '/books/';
    commercialOffers = '/commercialOffers';
    constructor(private http: HttpClient) { }
  
    public httpGet(){
      return this.http.get(this.domain+this.booksUrl);
    }

    public httpOffers(isbn){
      return this.http.get(this.domain+this.booksUrl+isbn+"/commercialOffers")
    }
  
  }
