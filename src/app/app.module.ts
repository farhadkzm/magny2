import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ServiceComponent} from './service/service.component';
import {ServiceListComponent} from './service/service-list/service-list.component';
import {ServiceMapComponent} from './service/service-map/service-map.component';
import {ServiceSearchComponent} from './service/service-search/service-search.component';
import {ServiceNavComponent} from './service/service-nav/service-nav.component';
import {ServiceInfoComponent} from './service/service-info/service-info.component';
import {ProfileComponent} from './profile/profile.component';
import {MyServicesComponent} from './my-services/my-services.component';
import {NotificationComponent} from './notification/notification.component';
import {MapItemInfoComponent} from './service/service-map/map-item-info/map-item-info.component';
import {ListItemInfoComponent} from './service/service-list/list-item-info/list-item-info.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import {AgmCoreModule} from '@agm/core';


import {FlexLayoutModule} from "@angular/flex-layout";
import {Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: '', component: NotificationComponent},
  {path: 'notifications', component: NotificationComponent},
  {path: 'my_services', component: MyServicesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ServiceListComponent,
    ServiceMapComponent,
    ServiceSearchComponent,
    ServiceNavComponent,
    ServiceInfoComponent,
    MyServicesComponent,
    ProfileComponent,
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
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

    BrowserAnimationsModule,
    FlexLayoutModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_5xR0k1AhYbVW5OP_t6XFncWE7xDHw_0'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
