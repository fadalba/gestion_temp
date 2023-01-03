import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  registerForm!:FormGroup
  title = 'angularvalidate';
  submitted=false

  constructor(private formBuilder:FormBuilder){

  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      nom:['',[Validators.required,Validators.minLength(4)]],
      prenom:['',Validators.required],
      role:['',Validators.required],
      photo:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      
    })
  }

   listDeroulant=['admin','user'];

  onSubmit(){
    this.submitted = true
    
    if(this.registerForm.invalid){
      return 
    }
    alert("Success")
  }

}
