import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {ServiceInfoComponent} from "../service/service-info/service-info.component";
import {DatabaseService} from "../database.service";
import {Entity} from "../models/entity";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  entities: Array<Entity>;

  constructor(public dialog: MatDialog, private db: DatabaseService) {
  }

  ngOnInit() {
    this.db.getNotifications().then(data => this.entities = data);
  }

  onMoreInfo(entityId: string) {

    this.dialog.open(ServiceInfoComponent, {
      height: '350px',
      minHeight: '100%',
      data: {entityId}
    });

  }
}
