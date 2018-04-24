import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../database.service";
import {Entity} from "../models/entity";
import {ServiceType} from "../models/service-type.enum";
import {Notification} from "../models/notification";


@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.css']
})
export class MyServicesComponent implements OnInit {

  serviceTypes: Array<{ value: string, title: string }>
    = [
    {value: ServiceType.RESTAURANT, title: 'Restaurant'},
    {value: ServiceType.DOCTOR, title: 'Doctor'}];

  entity: Entity = new Entity();

  notificationText: string;
  notificationTitle: string;
  pastNotifications: Array<Notification>;

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
    this.db.getMyBusiness().then(entity => {
      this.entity = entity;
      this.db.getPastBizNotifications(entity.id)
        .then(notifications => this.pastNotifications = notifications)

    })

  }

  postNotification() {
    if (this.entity.id) {
      let notif = new Notification();
      notif.entityId = this.entity.id;
      notif.title = this.notificationTitle;
      notif.description = this.notificationText;
      this.db.postNotification(notif);
    } else {
      console.log('No entity has been loaded yet')
    }

  }

  createNewService() {
    this.db.createService(this.entity)
  }

}
