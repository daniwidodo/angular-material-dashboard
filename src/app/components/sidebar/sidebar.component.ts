import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

  click()
  {
    console.log("klik");
  }
   logout()
   {
     console.log("logout");
   }

}