import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps :any; 
  constructor(public service :DataService) { 
    console.log("home component created ..")
  }

  ngOnInit() {
    let ststusOfData = this.service.Select();
    ststusOfData.subscribe((result)=>{
      console.log(result);
      this.emps=result;
    })
  }
  ngOnDistroy()
  {
    console.log("home component distroyed...")
  }

}
