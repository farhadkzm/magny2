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

  defaultCenter: ESLocation = new ESLocation(-37.81886, 144.95565);
  minZoomLevel = 12;
  services: Array<Entity> = [];

  @Input('entities')
  set entities(entities: Array<Entity>) {

    console.log('Map data has been set', entities);
    this.services.length = 0;

    entities.forEach(entity => this.services.push(entity));

  }

  @Input('center')
  set center(center: ESLocation) {

    console.log('Center has been set with input');
    this.defaultCenter = center

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

    if (!(this.defaultCenter.equals(event.lat, event.lon))) {

      this.centerChange.emit(new ESLocation(event.lat, event.lng));
    }
  }
}
