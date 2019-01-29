import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Common/login/login.component';
import { RegisterComponent } from './Common/register/register.component';
import { UserhomeComponent } from './Doctor/userhome/userhome.component';
import { Register2Component } from './Doctor/register2/register2.component';
import { Register3Component } from './Patient/register3/register3.component';
import { SearchpComponent } from './Doctor/searchp/searchp.component';
import { ApplistComponent } from './Doctor/applist/applist.component';
import { MessageComponent } from './Patient/message/message.component';
import { HomeComponent } from './Common/home/home.component';
import { CalenderComponent } from './Doctor/calender/calender.component';
import { PatientprofileComponent } from './Patient/patientprofile/patientprofile.component';
import { BasicinfoComponent } from './Patient/basicinfo/basicinfo.component';
import { CurrentstateComponent } from './Patient/currentstate/currentstate.component';
import { LabComponent } from './Patient/lab/lab.component';
import { PrescriptionComponent } from './Patient/prescription/prescription.component';
import { PaymentComponent } from './FrontDesk/payment/payment.component';
import { MbasicComponent } from './MLT/mbasic/mbasic.component';
import { SearchmComponent } from './MLT/searchm/searchm.component';
import { RectestComponent } from './MLT/rectest/rectest.component';
import { RegistermComponent } from './MLT/registerm/registerm.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'user',component:UserhomeComponent},
  {path:'register2', component:Register2Component},
  {path:'register3', component:Register3Component},
  {path:'searchp', component:SearchpComponent},
  {path:'applist', component:ApplistComponent},
  {path:'message', component:MessageComponent},
  {path:'home', component:HomeComponent}, 
  {path:'calender', component:CalenderComponent}, 
  {path:'patientprofile', component:PatientprofileComponent}, 
  {path:'basicinfo', component:BasicinfoComponent}, 
  {path:'currentstate', component:CurrentstateComponent}, 
  {path:'lab', component:LabComponent}, 
  {path:'prescription', component:PrescriptionComponent}, 
  {path:'payment', component:PaymentComponent}, 
  {path:'mbasic', component:MbasicComponent}, 
  {path:'searchm', component:SearchmComponent}, 
  {path:'registerm', component:RegistermComponent}, 
  {path:'rectest', component:RectestComponent}, 

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }