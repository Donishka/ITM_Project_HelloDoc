import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Common/login/login.component';
import { RegisterComponent } from './Common/register/register.component';
import { UserhomeComponent } from './Doctor/userhome/userhome.component';

import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './FrontDesk/payment/payment.component';
import { MbasicComponent } from './MLT/mbasic/mbasic.component';
import { SearchmComponent } from './MLT/searchm/searchm.component';
import { RectestComponent } from './MLT/rectest/rectest.component';
import { RegistermComponent } from './MLT/registerm/registerm.component';
import { AuthService } from './shared/services/auth.service';
import { HttpModule } from '@angular/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserhomeComponent,
    Register2Component,
    Register3Component,
    SearchpComponent,
    ApplistComponent,
    MessageComponent,
    HomeComponent,
    CalenderComponent,
    PatientprofileComponent,
    BasicinfoComponent,
    CurrentstateComponent,
    LabComponent,
    PrescriptionComponent,
    PaymentComponent,
    MbasicComponent,
    SearchmComponent,
    RectestComponent,
    RegistermComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],

  bootstrap: [AppComponent],

  providers: [
    AuthService
  ],

})
export class AppModule { }
