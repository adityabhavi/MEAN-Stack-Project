import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.css']
})
export class AddclientComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

    public fbFormGroup = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      organization: ['', Validators.required],
      sdept: ['', Validators.required],
      address: ['', Validators.required],

    });


  ngOnInit() {
  }

  async addnewclient (){
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3100/addclient';
    
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['clients']);
    } else {
      
    }

  }

}
