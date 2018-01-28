import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ServiceComponent} from './service/service.component';
import {ServiceListComponent} from './service/service-list/service-list.component';
import {ServiceMapComponent} from './service/service-map/service-map.component';
import {ServiceSearchComponent} from './service/service-search/service-search.component';
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
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import {AgmCoreModule} from '@agm/core';


import {FlexLayoutModule} from "@angular/flex-layout";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: ServiceComponent},
  {path: 'notifications', component: NotificationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my_services', component: MyServicesComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: AdminComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ServiceListComponent,
    ServiceMapComponent,
    ServiceSearchComponent,
    ServiceInfoComponent,
    MyServicesComponent,
    ProfileComponent,
    NotificationComponent,
    MapItemInfoComponent,
    ListItemInfoComponent,
    MenuComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
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
    MatCardModule,
    MatExpansionModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB_5xR0k1AhYbVW5OP_t6XFncWE7xDHw_0'
    }),
  ],
  entryComponents: [ServiceInfoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
