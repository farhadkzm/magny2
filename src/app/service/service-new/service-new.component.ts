import {Component, Inject, OnInit} from '@angular/core';
import {Entity} from "../../models/entity";
import {ServiceType} from "../../models/service-type.enum";
import {DatabaseService} from "../../database.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-service-new',
  templateUrl: './service-new.component.html',
  styleUrls: ['./service-new.component.css']
})
export class ServiceNewComponent implements OnInit {
  serviceTypes: Array<{ value: string, title: string }>
    = [
    {value: ServiceType.RESTAURANT, title: 'Restaurant'},
    {value: ServiceType.DOCTOR, title: 'Doctor'}];

  entity: Entity = new Entity();

  constructor(public dialogRef: MatDialogRef<ServiceNewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private db: DatabaseService) {
  }

  ngOnInit() {
    this.entity.photoUrl = 'https://lh3.googleusercontent.com/08FmFKtUfkHSmg-Ca-dKzCPvs5O0RfPyjqAVJODPhpGA3Gjhj4Y5N-7PpHjTtSAppw=w646'
  }

  createNewService() {
    this.db.createService(this.entity).then(data => {

    });

    this.dialogRef.close();
  }
}
