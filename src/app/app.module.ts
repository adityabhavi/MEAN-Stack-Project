import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddclientComponent } from './addclient/addclient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientsComponent } from './clients/clients.component';
import { DeptsComponent } from './depts/depts.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { SmeetComponent } from './smeet/smeet.component';
import { NewmeetComponent } from './newmeet/newmeet.component';

import { AdminComponent } from './admin/admin.component';
import { USidebarComponent } from './u-sidebar/u-sidebar.component';
import { UClientComponent } from './u-client/u-client.component';
import { USmeetComponent } from './u-smeet/u-smeet.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { ContactusComponent } from './contactus/contactus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddclientComponent,
    SidebarComponent,
    ClientsComponent,
    DeptsComponent,
    AdddeptComponent,
    SmeetComponent,
    NewmeetComponent,
    AdminComponent,
    USidebarComponent,
    UClientComponent,
    USmeetComponent,
    UserComponent,
    PagenotfoundComponent,
    SigninComponent,
    AdminsigninComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
