import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServiceInfoComponent} from "../service-info/service-info.component";
import {MatDialog} from "@angular/material";
import {ESLocation} from "../../models/eSLcation";
import {Entity} from "../../models/entity";

@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.css']
})
export class ServiceMapComponent implements OnInit {

  center = {lat: -37.81886, lng: 144.95565};
  minZoomLevel = 12;
  services: Array<Entity>;

  @Input('entities')
  set entities(entities: Array<Entity>) {
    console.log('Map data has been set', entities);
    this.services = entities;

  }

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }


  @Output()
  centerChange = new EventEmitter<ESLocation>();


  onMoreInfo() {
    let dialogRef = this.dialog.open(ServiceInfoComponent, {
      height: '80vh',
      data: {name: 'my data'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

  mapCenterChange(event) {
    console.log(event);
    this.centerChange.emit({lat: event.lat, lon: event.lng});
  }
}
