import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.css']
})
export class AdminsigninComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }
  navbarOpen = false;
 
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;
    console.log(data);
    // ajax call

    /*if(data.username === 'aditya' && data.password === 'bhavi'){
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['user']);
    }else{
      this.uiInvalidCredential = true;
    }*/


    const url = 'http://localhost:3100/auth-user';
    
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid','true');
      this.router.navigate(['admin']);
    } else {
      this.uiInvalidCredential = true;
    }
  }

}
