import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DatabaseService} from "../../database.service";
import {ESLocation} from "../../models/eSLcation";
import {ServiceType} from "../../models/service-type.enum";

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {

  serviceTypes: Array<{ value: string, title: string }>
    = [
    {value: ServiceType.RESTAURANT, title: 'Restaurant'},
    {value: ServiceType.DOCTOR, title: 'Doctor'}];


  @Output('result')
  resultEvent = new EventEmitter<any>();

  @Input()
  searchCenter: ESLocation = new ESLocation(-37.81886, 144.95565);
  melbourneLocation: ESLocation = new ESLocation(-37.81886, 144.95565);

  searchParameters: {

    address?: string,
    name?: string,
    serviceType?: string
  } = {};

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
  }

  addressChanged(event) {
    let address = event.target.value;

    this.db.getGeoCode(address, this.melbourneLocation)
      .then(data => {
        this.searchCenter = data
      });
    console.log(event)
  }

  search(center: ESLocation = this.searchCenter) {
    //resultEvent
    console.log(this.searchParameters);
    this.db.searchServices(center,
      this.searchParameters.name,
      this.searchParameters.serviceType, null)
      .then(data => {
        console.log('result from ES', data);

        this.resultEvent.emit({data: data, center: this.searchCenter})
      });
  }


}
