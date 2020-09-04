import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-newmeet',
  templateUrl: './newmeet.component.html',
  styles: []
})
export class NewmeetComponent implements OnInit {
  

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

    public fbFormGroup = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      dept: ['', Validators.required],
      client: ['', Validators.required],
    });

   ngOnInit() {
    
  }

  async addnewmeet(){
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3100/addmeet';
    
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['smeet']);
    } else {
      
    }

  }
}
