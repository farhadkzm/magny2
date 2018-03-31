import {Component, Input, OnInit} from '@angular/core';

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


  @Input()
  result: any;

  search: any = {};


  constructor() {
  }

  ngOnInit() {
  }

  onSearchSubmit() {
    console.log(this.search);
  }

}
