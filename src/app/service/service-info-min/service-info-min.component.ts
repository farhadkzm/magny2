import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-info-min',
  templateUrl: './service-info-min.component.html',
  styleUrls: ['./service-info-min.component.css']
})
export class ServiceInfoMinComponent implements OnInit {

  @Input()
  business:any;

  constructor() { }

  ngOnInit() {
  }

}
