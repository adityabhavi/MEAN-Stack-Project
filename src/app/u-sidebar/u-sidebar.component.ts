import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-sidebar',
  templateUrl: './u-sidebar.component.html',
  styleUrls: ['./u-sidebar.component.css']
})
export class USidebarComponent implements OnInit {

  constructor() { }

  openNav() {
    document.getElementById("mySidepanel").style.width = "350px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  ngOnInit() {
  }

}
