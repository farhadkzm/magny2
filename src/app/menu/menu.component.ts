import {Component, Input, OnInit} from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() loggedIn =true;
  @Input() admin :boolean;

  signedIn:boolean;
  //todo add greeting message on the ui
  user:any; // this.user.username

  constructor( public amplifyService: AmplifyService ) {

    this.amplifyService = amplifyService;
//todo styles.css override /node_modules/aws-amplify-angular/theme.css
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
        }
      });

  }

  ngOnInit() {
  }

}
