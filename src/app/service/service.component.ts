import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @ViewChild('mapView') map;
  @ViewChild('listView') list;


  constructor() {
  }

  ngOnInit() {
  }

  updateSearchResult(event: any) {
    this.list.entities = event
  }
}
