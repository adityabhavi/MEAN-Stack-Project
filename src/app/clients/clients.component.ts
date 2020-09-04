import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { stringify } from 'querystring';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

    public fbFormGroup = this.fb.group({
      remove: ['', Validators.required],
    });

  async ngOnInit() {
    const url = 'http://localhost:3100/showclient';
    const result: any = await this.http.get(url).toPromise();
    
      this.clients=result;
      
      console.log(result);    
  }
  
  async removeclient(){
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3100/removeclient';
    
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      this.router.navigate(['clients']);
    } else {
      
    }

  }
}
