import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DatabaseService} from "../../database.service";
import {Entity} from "../../models/entity";

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

  searchParameters: any = {};


  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
  }

  onSearchSubmit() {
    //resultEvent
    console.log(this.searchParameters);
    let searchRequest = {
      "query": {
        "match_all": {}
      }
    };

    this.db.search(searchRequest).then(data => {
      console.log('result from ES', data);
      this.resultEvent.emit(data)
    });


  }

}
