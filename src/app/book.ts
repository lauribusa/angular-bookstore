export interface Book {
    isbn: string,
    title: string, 
    price: number,
    cover: string,
    synopsis: Array<string>
}

export interface Books extends Array<Book>{}

export interface Offer { 
    type: string,
    sliceValue?: number,
    value: number
}

export interface Offers {
    offers: Array<Offer>
}

/*{
    "offers": [
      {
        "type": "percentage",
        "value": 4
      },
      {
        "type": "minus",
        "value": 15
      },
      {
        "type": "slice",
        "sliceValue": 100,
        "value": 12
      }
    ]
  }*/
