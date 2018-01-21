import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  displayedColumns = ['name', 'address', 'gender', 'phone'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() {
  }

  ngOnInit() {
  }

}

export interface Element {
  name: string;
  address: string;
  gender: string;
  phone?: string;
}

const ELEMENT_DATA: Element[] = [
  {name: 'Apadana Supermarket', address: '39 Mt Alexander rd, Travancore VIC 3032', gender: 'H', phone: 'H'},
  {name: 'Apadana Supermarket', address: '39 Mt Alexander rd, Travancore VIC 3032', gender: 'He', phone: 'H'},
  {name: 'Apadana Supermarket', address: '39 Mt Alexander rd, Travancore VIC 3032', gender: 'Li', phone: 'H'},
]
