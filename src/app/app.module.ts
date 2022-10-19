import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SportsFacilitiesComponent } from './sports-facilities/sports-facilities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import { SportFacilityCardComponent } from './add-sport-facility-card/add-sport-facility-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { SportFacilityPopUpComponent } from './sport-facility-pop-up/sport-facility-pop-up.component';
import { AuthenticationGuard } from './authentication.guard';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UsersComponent } from './users/users.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { SportFacilityComponent } from './sport-facility/sport-facility.component';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { UserPopUpComponent } from './user-pop-up/user-pop-up.component';

registerLocaleData(localePl);


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    SportsFacilitiesComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    SportFacilityCardComponent,
    SportFacilityPopUpComponent,
    UsersComponent,
    SportFacilityComponent,
    UserPopUpComponent
  ],
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
