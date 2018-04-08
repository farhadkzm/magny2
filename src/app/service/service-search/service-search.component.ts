import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatabaseService} from "../../database.service";
import {Entity} from "../../models/entity";
import {ESLocation} from "../../models/eslcation";

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {

  public gender: Array<{ value: string, title: string }>
    = [{value: 'all', title: 'All'},
    {value: 'male', title: 'Male'},
    {value: 'female', title: 'Female'}];
  public services: Array<{ value: string, title: string }>
    = [{value: 'all', title: 'All'},
    {value: 'restaurant', title: 'Restaurant'},
    {value: 'doctor', title: 'Doctor'}];


  @Output('result')
  resultEvent = new EventEmitter<Entity[]>();


  @Input()
  searchCenter = {lat: -37.81886, lon: 144.95565};

  searchParameters: {

    name?: string,
    serviceType?: string
  } = {};

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
  }

  search(center: ESLocation = this.searchCenter) {
    //resultEvent
    console.log(this.searchParameters);
    this.db.searchServices(center,
      this.searchParameters.name,
      this.searchParameters.serviceType, null)
      .then(data => {
        console.log('result from ES', data);
        this.resultEvent.emit(data)
      });
  }


}
