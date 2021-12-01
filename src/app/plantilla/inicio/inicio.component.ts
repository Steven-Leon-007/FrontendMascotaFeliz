import { Component, OnInit } from '@angular/core';
declare function handleSubmit(): void;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor() { 
    handleSubmit();
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = "assets/js/main-inicio.component.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
  }

}
