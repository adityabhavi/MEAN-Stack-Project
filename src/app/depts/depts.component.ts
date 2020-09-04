import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit {
  clients: any = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

    public fbFormGroup = this.fb.group({
      removedept: ['', Validators.required],
    });

  async ngOnInit() {
    const url = 'http://localhost:3100/showdept';
    const result: any = await this.http.get(url).toPromise();
    
      this.clients=result;
      
      console.log(result); 
  }

  async removedept(){
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3100/removedept';
    
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['depts']);
    } else {
      
    }

  }

}
