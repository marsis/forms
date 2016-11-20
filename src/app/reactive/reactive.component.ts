import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import {Observable} from "rxjs";
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  public userName = new FormControl('initial Value');
public o: Observable<string>;
 /* constructor() {
    this.userName.valueChanges
      .debounceTime(500)
      .subscribe(value => console.log(value));
  }*/

 public dateRange = new FormGroup({
   from: new FormControl(),
   to: new FormControl()
 });
public registrationForm;
 constructor(formBuilder: FormBuilder){
   this.registrationForm = formBuilder.group({
     'username': [''],
     'passwordGroup': formBuilder.group({
       'password': [''],
       'pasconfirm': ['']
     })
   });

this.registrationForm.valueChanges
  .subscribe((value => console.log(value)));


   this.dateRange.valueChanges
     .subscribe(value => console.log(value));


   this.o = this.userName.valueChanges
     .debounceTime(500);
   //  .subscribe(value => console.log(value));
 }


  ngOnInit() {
  }

}

/*

в реактивном подходе все создается внутри компонента, а потом прописывается

хтмл
 */
