import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class DataService {
  
  constructor( private helper : HttpClient) { console.log("data service obj created.. "); }
  Delete(No) {
    return this.helper.delete("http://52.66.87.207:9898/emps/"+No);
  }

  Insert(empObj)
  { 
    return this.helper.post("http://52.66.87.207:9898/emps",empObj);
  }

 

  Select()
  {
    return this.helper.get("http://52.66.87.207:9898/emps/111");
  }

  SelectByNo(No)
  {
    return this.helper.get("http://52.66.87.207:9898/emps/"+No);
  }

  Update(emp) 
  {
    return this.helper.put("http://52.66.87.207:9898/emps/"+emp.No,emp);
  }
}
