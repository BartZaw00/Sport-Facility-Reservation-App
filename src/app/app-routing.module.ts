import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SportsFacilitiesComponent } from './sports-facilities/sports-facilities.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthenticationGuard } from './authentication.guard';
import { UsersComponent } from './users/users.component';
import { SportFacilityComponent } from './sport-facility/sport-facility.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'sports-facilities',component:SportsFacilitiesComponent, canActivate:[AuthenticationGuard]},
  {path:'sport-facility',component:SportFacilityComponent, canActivate:[AuthenticationGuard] },
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'users',component:UsersComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
