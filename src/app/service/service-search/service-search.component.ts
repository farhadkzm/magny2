import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

}
