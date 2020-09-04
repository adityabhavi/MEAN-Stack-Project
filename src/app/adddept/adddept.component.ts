import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-adddept',
  templateUrl: './adddept.component.html',
  styleUrls: ['./adddept.component.css']
})
export class AdddeptComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

    public fbFormGroup = this.fb.group({
      dname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      deptname: ['', Validators.required],
      password: ['', Validators.required],
    });

  ngOnInit() {
  }

  async adddept(){
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3100/adddept';
    
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['depts']);
    } else {
      
    }

  }

}
