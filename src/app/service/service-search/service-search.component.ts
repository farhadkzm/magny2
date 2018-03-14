import {Component, ElementRef, Input, OnInit, ViewChildren} from '@angular/core';

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

  // public distance: string[] = ['5KM', '20KM', '50Km'];

  @ViewChildren("nameInput") nameInput: ElementRef;
  @ViewChildren("genderInput") genderInput: any;
  @ViewChildren("typeInput") typeInput: any;

  @Input()
  result: any;

  constructor() {
  }

  ngOnInit() {
  }

  search() {
    console.log(this.nameInput);
  }

}
