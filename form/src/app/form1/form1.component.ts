import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   


isValid:boolean= false;



users=[];
add(fname,emails,subjects,Messages){
console.log(this.users)
  this.isValid= true

  this.users.push({
    'name':fname.value,'emailss':emails.value,'subjectss':subjects.value,'Messagess':Messages.value
  })
  
}


}
