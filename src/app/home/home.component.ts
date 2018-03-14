import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../database.service";
import {Entity} from "../models/entity";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: DatabaseService) {
  }

  entities: Array<Entity>;

  ngOnInit() {

    this.db.getBusinesses(0,4).then(data => this.entities = data);
  }

}
