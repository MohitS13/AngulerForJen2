import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message: string;

  constructor(private route : ActivatedRoute,
    private service : DataService,
    private router : Router) 
  { }

  ngOnInit() {
  }
  onInsertCallMe(myForm)
  {
    let empObj = myForm.form.value;
    console.log(empObj);

    var observableResult = this.service.Insert(empObj);

    observableResult.subscribe((result:any)=>{
      console.log(result);
      
      if(result.name == "ValidationError")
      {
        this.message = "recordAdded";
      }
      else{

        this.message = "recordAdded";
      }
      this.router.navigate(['emps/111'])

    });

  }

}
