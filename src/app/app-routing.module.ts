import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddclientComponent } from './addclient/addclient.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ClientsComponent } from './clients/clients.component';
import { DeptsComponent } from './depts/depts.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { SmeetComponent } from './smeet/smeet.component';
import { NewmeetComponent } from './newmeet/newmeet.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { USidebarComponent } from './u-sidebar/u-sidebar.component';
import { UClientComponent } from './u-client/u-client.component';
import { USmeetComponent } from './u-smeet/u-smeet.component';
import { UserComponent } from './user/user.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'addclient',component:AddclientComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'clients',component:ClientsComponent},
  {path:'depts',component:DeptsComponent},
  {path:'adddept',component:AdddeptComponent},
  {path:'smeet',component:SmeetComponent},
  {path:'newmeet',component:NewmeetComponent},
  {path:'signin',component:SigninComponent},
  {path : 'admin', component:AdminComponent},
  {path:'usidebar',component:USidebarComponent},
  {path:'uclient',component:UClientComponent},
  {path:'usmeet',component:USmeetComponent},
  {path:'user',component:UserComponent},
  {path:'error',component:PagenotfoundComponent},
  {path:'adminsignin',component:AdminsigninComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'**',redirectTo:'/error',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
