import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ServiceInfoComponent} from "../service-info/service-info.component";
import {Entity} from "../../models/entity";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  displayedColumns = ['name', 'address', 'gender', 'phone'];
  dataSource = new MatTableDataSource<Entity>();


  @Input('entities')
  set entities(entities: Array<Entity>) {
    console.log('data has been set', entities)
    this.dataSource.data = entities;

  }

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
    this.dataSource.data = this.entities;
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
