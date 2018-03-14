import { Component, OnInit, Input } from '@angular/core';
import {Entity} from "../../models/entity";

@Component({
  selector: 'app-service-info-min',
  templateUrl: './service-info-min.component.html',
  styleUrls: ['./service-info-min.component.css']
})
export class ServiceInfoMinComponent implements OnInit {

  @Input()
  entity:Entity;

  @Input()
  disabledMoreInfo:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
