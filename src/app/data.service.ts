import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class DataService {
  
  constructor( private helper : HttpClient) { console.log("data service obj created.. "); }
  Delete(No) {
    return this.helper.delete("http://localhost:9898/emps/"+No);
  }

  Insert(empObj)
  { 
    return this.helper.post("http://localhost:9898/emps",empObj);
  }

 

  Select()
  {
    return this.helper.get("http://localhost:9898/emps/111");
  }

  SelectByNo(No)
  {
    return this.helper.get("http://localhost:9898/emps/"+No);
  }

  Update(emp) 
  {
    return this.helper.put("http://localhost:9898/emps/"+emp.No,emp);
  }
}
