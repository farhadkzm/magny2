import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Amplify from 'aws-amplify';
//todo add actual configurtion and enable required aws features
//todo follow https://aws.github.io/aws-amplify/media/quick_start#set-up-your-backend
import aws_exports from './aws-exports';
import 'hammerjs';


Amplify.configure(aws_exports);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
