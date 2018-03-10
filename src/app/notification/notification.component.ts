import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ServiceInfoComponent} from "../service/service-info/service-info.component";
import {DatabaseService} from "../database.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: any;

  constructor(public dialog: MatDialog,private db:DatabaseService) {
  }

  ngOnInit() {
    this.db.getNotifications().then(data => this.notifications = data);
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
