import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { ServiceMapComponent } from './service/service-map/service-map.component';
import { ServiceSearchComponent } from './service/service-search/service-search.component';
import { ServiceNavComponent } from './service/service-nav/service-nav.component';
import { ServiceInfoComponent } from './service/service-info/service-info.component';
import { ProfileComponent } from './profile/profile.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { NotificationComponent } from './notification/notification.component';
import { MapItemInfoComponent } from './service/service-map/map-item-info/map-item-info.component';
import { ListItemInfoComponent } from './service/service-list/list-item-info/list-item-info.component';
import { MenuComponent } from './menu/menu.component';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ServiceListComponent,
    ServiceMapComponent,
    ServiceSearchComponent,
    ServiceNavComponent,
    ServiceInfoComponent,
    ProfileComponent,
    MyServiceComponent,
    NotificationComponent,
    MapItemInfoComponent,
    ListItemInfoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //angular material
    MatButtonModule,
    MatCheckboxModule,

    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
