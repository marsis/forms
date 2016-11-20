import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
onSubmit(formValues) {
    debugger
}
}
/*

template-driven подход определяет все компоненты формы в шаблоне с помощью директив


 */
