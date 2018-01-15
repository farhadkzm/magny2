import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-service-map',
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.css']
})
export class ServiceMapComponent implements OnInit {
  public lat: number = 51.678418;
  public lng: number = 7.809007;

  constructor() {
  }

  ngOnInit() {
  }

}
