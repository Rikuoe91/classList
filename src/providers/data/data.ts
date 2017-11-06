import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  lists:any = [
      {
         "listHeader": "Grocery",
          Items: [
              {
                  itemName: "milk",
                  Info: {
                   price: "$3.50",
                   type: "Extra thicc",
                   kind: "Jug"
                  }
              },
              {
                  itemName: "wine",
                  Info: {
                      price: "$5.00",
                      type: "Red",
                      kind: "The cheap kind"
                  }
              },
              {itemName: "cheese"},
              {itemName: "weenies"}
        ]
      },
      {
          "listHeader": "Holiday",
          Items: [
              {itemName: "Present"},
              {itemName: "Wine"},
              {itemName: "Tree"}
          ]
      },
      {
          "listHeader": "Repairs",
          Items: [
              {itemName: "Car"},
              {itemName: "House"},
              {itemName: "Plumbing"}
          ]
      }
  ];

  constructor() {
    console.log('Hello DataProvider Provider');
  }

}
