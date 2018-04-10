import {Component, OnInit} from '@angular/core';
import {DatabaseService} from "../database.service";
import {Profile} from "../models/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile = new Profile();

  constructor(private db: DatabaseService) {
  }

  ngOnInit() {
    this.db.getMyProfile().then(data => this.profile = data)
  }


  updateProfile() {
    this.db.updateProfile(this.profile);
  }

}
