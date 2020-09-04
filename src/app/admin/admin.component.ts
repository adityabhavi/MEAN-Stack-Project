import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem('sid')){
      this.router.navigate(['adminsignin'])
    }
  }

  signout(){
    sessionStorage.removeItem('sid');
      this.router.navigate(['adminsignin']);
  }

}
