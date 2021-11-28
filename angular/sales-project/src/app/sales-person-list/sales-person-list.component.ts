import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  salesPersons: SalesPerson[] = [
    new SalesPerson("John", "Doe", "johndoe@gmail.com", 342320),
    new SalesPerson("David", "Smith", "davsmith@gmail.com", 435400),
    new SalesPerson("Michael", "Lorenz", "mak@gmail.com", 12000),
    new SalesPerson("Alex", "Miller", "alex@gmail.com", 85000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
