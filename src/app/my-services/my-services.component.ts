import {Component, OnInit} from '@angular/core';
import {ServiceNewComponent} from "../service/service-new/service-new.component";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {DatabaseService} from "../database.service";


@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {


  constructor(public dialog: MatDialog, private http: HttpClient, private db: DatabaseService) {
  }

  businesses: any;

  ngOnInit() {

    // this.http.get('http://localhost:9200/magny/services/h9wxCWIBktgdx68vuRc8')
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
