import {Component, OnInit} from '@angular/core';
import {ServiceNewComponent} from "../service/service-new/service-new.component";
import {MatDialog} from "@angular/material";
import {DatabaseService} from "../database.service";


@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {


  constructor(public dialog: MatDialog, private db: DatabaseService) {
  }

  businesses: any;

  ngOnInit() {

    this.db.getBusinesses().then(data => this.businesses = data);
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
