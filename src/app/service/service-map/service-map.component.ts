import {Component, OnInit} from '@angular/core';
import {ServiceInfoComponent} from "../service-info/service-info.component";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.css']
})
export class ServiceMapComponent implements OnInit {
  public lat: number = 51.678418;
  public lng: number = 7.809007;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onMoreInfo() {
    let dialogRef = this.dialog.open(ServiceInfoComponent, {
      height: '80vh',
      data: {name: 'my data'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }
}
