import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ServiceInfoComponent} from "../service-info/service-info.component";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  displayedColumns = ['name', 'address', 'gender', 'phone'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onMoreInfo() {
    let dialogRef = this.dialog.open(ServiceInfoComponent, {
      height: '350px',
      data: {name: 'my data'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
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
