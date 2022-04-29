import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public userInfo : any;

  constructor() { }

  ngOnInit(): void {

    this.userInfo = localStorage.getItem("userInfo");
    this.userInfo = JSON.parse(this.userInfo);
    console.log(this.userInfo);
    
  }

}
