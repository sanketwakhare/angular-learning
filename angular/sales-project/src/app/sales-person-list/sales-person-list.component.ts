import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersons: SalesPerson[] = [
    new SalesPerson("John", "Doe", "johndoe@gmail.com", 35000),
    new SalesPerson("David", "Smith", "davsmith@gmail.com", 43000),
    new SalesPerson("Michael", "Lorenz", "mak@gmail.com", 12000),
    new SalesPerson("Alex", "Miller", "alex@gmail.com", 85000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
