import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
