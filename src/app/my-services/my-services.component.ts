import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../database.service";
import {Entity} from "../models/entity";
import {ServiceType} from "../models/service-type.enum";


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


  constructor(private db: DatabaseService) {
  }

  ngOnInit() {


  }


  createNewService() {
    this.db.createService(this.entity)
  }

}
