import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


declare function handleSubmit(): void;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public aFormGroup!: FormGroup;
  myScriptElement: HTMLScriptElement;

  constructor(private formBuilder: FormBuilder) { 
    
    handleSubmit();
    this.myScriptElement = document.createElement('script');
    this.myScriptElement.src = "assets/js/main-inicio.component.js";
    document.body.appendChild(this.myScriptElement);
  }

  ngOnInit(): void {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  siteKey: string = "6LfRn34dAAAAAJi5sEb7ewQCAlyM9iNFccif8_5R";

}
