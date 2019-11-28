import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  emp:any;
  constructor(private route : ActivatedRoute,
    private service : DataService,
    private router : Router) { console.log("edit component created...")}

  ngOnInit() 
  {
    this.route.paramMap.subscribe((result)=>{
      let No = result.get("No");
      console.log(No);

      let observableResult1 = this.service.SelectByNo(No);
      observableResult1.subscribe((result)=>{
        console.log(result[0]);
       this.emp = result[0];
      });
      
    });
  }
  
  onUpdateCallMe()
  {
    console.log("here");
    let observableResult = this.service.Update(this.emp);

    observableResult.subscribe((resultofUpdate)=>{
      console.log(resultofUpdate);
      this.router.navigate(['emps/111']);

    });
  
  }

} 
