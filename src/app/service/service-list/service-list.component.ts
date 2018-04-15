import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ServiceInfoComponent} from "../service-info/service-info.component";
import {Entity} from "../../models/entity";

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  services: Array<Entity>;

  @Input('entities')
  set entities(entities: Array<Entity>) {
    console.log('List data has been set', entities);
    this.services = entities;

  }

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
