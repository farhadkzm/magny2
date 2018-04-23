import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DatabaseService} from "../../database.service";
import {Entity} from "../../models/entity";
import {Review} from "../../models/review";

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {
  entity: Entity;
  entityId: string;
  scoreValues = [1, 2, 3, 4];
  reviews: Array<Review>;

  reviewTitle: string;
  reviewText: string;
  reviewScore: number;

  constructor(public dialogRef: MatDialogRef<ServiceInfoComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public db: DatabaseService) {

    this.entityId = data.entityId;
    if (data.entity) {
      this.entity = data.entity;
      this.entityId = this.entity.id;
    }

  }

  submitForm() {
    let review = new Review();
    review.entityId = this.entityId;
    review.score = this.reviewScore;
    review.text = this.reviewText;
    review.title = this.reviewTitle;
    review.user = {id: 'myuserid', name: 'George'};
    console.log(review);
    this.db.createReview(review);
  }

  ngOnInit() {
    //one of the entityId or entity should be provided
    if (!this.entityId && !this.entity)
      throw new Error('Either entity or entityId should be presented');

    if (!this.entity)
      this.db.getEntity(this.entityId).then(data => this.entity = data);


    this.db.getReviews(this.entityId).then(data => this.reviews = data);


  }

}
