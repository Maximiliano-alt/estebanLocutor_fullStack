import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class ContractComponent implements OnInit {
  form!: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.createFormGroup();
  }

  ngOnInit(): void {
  }
  saveInfo(event: Event){
    event.preventDefault();
    if(this.form.valid){
      console.log(this.form.value);
    }
    else{
      console.log('envio no valido')
    }

  }
  private createFormGroup(){
    this.form = this.formBuilder.group({
      name:['', [Validators.required]],
      phone: ['', [Validators.required]],
      email:['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      country:['', [Validators.required]],
      city:['', [Validators.required]],
      enterprise:['', [Validators.required]],
      service:['', [Validators.required]],
      message:['', [Validators.required]]
    })
  }
  getEmail() {
    return this.form.get('email');
}
  sendToEmail(){
    if(this.form.valid){

    }
  }
}
