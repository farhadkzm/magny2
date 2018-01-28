import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ServiceInfoComponent} from "../service/service-info/service-info.component";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Array<{ text: string, link: string }> = [
    {
      text: 'Service Apadana Shop just added to the Magny!',
      link: 'http://google.com'
    },
    {
      text: 'Service Apadana Shop just added to the Magny!',
      link: 'http://google.com'
    },
    {
      text: 'Service Apadana Shop just added to the Magny!',
      link: 'http://google.com'
    }
  ];

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
