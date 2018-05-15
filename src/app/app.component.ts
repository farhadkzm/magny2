import { Component } from '@angular/core';
import { AmplifyService }  from 'aws-amplify-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//todo this is just a sample and needs to be removed
  constructor(public amplify:AmplifyService){
   // this.amplifyService = amplify;

    /** now you can access category APIs:
     * this.amplifyService.auth();          // AWS Amplify Auth
     * this.amplifyService.analytics();     // AWS Amplify Analytics
     * this.amplifyService.storage();       // AWS Amplify Storage
     * this.amplifyService.api();           // AWS Amplify API
     * this.amplifyService.cache();         // AWS Amplify Cache
     * this.amplifyService.pubsub();        // AWS Amplify PubSub
     **/
  }
}
