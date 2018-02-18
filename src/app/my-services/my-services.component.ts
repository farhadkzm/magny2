import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ServiceNewComponent} from "../service/service-new/service-new.component";

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {


  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onMoreInfo() {
    let dialogRef = this.dialog.open(ServiceNewComponent, {
      height: '350px',
      data: {name: 'my data'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

    });
  }

}
