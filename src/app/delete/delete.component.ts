import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor( public service : DataService,
    public route:ActivatedRoute ,
    public router:Router ) 
  {

  }

  ngOnInit() 
  {

    this.route.paramMap.subscribe((result)=>{

      console.log(result);
      let No = result.get("No");
      console.log(" u are deleting "+ No);
       var observable = this.service.Delete(No);
       observable.subscribe((delRes)=>{
         console.log(delRes);
         this.router.navigate(["emps/111"]);

       }); 
    });

  }

}
