import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-u-client',
  templateUrl: './u-client.component.html',
  styleUrls: ['./u-client.component.css']
})
export class UClientComponent implements OnInit {
  clients: any = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

 async ngOnInit() {
    const url = 'http://localhost:3100/showclient';
    const result: any = await this.http.get(url).toPromise();
    
      this.clients=result;
      
      console.log(result);
  }

}
