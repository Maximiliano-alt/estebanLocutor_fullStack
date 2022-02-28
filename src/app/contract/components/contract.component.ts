import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { EmailMessageService } from 'src/app/services/email-message.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class ContractComponent implements OnInit {
  form!: FormGroup;


  constructor(private formBuilder: FormBuilder, public messageService: EmailMessageService) {
    this.createFormGroup();
  }

  ngOnInit(): void {
  }
  contactForm(form:any){
    //event.preventDefault();
    this.messageService.sendMessage(form).subscribe(() => {
      try {
        Swal.fire({icon: 'success',text: 'Se envió el formulario correctamente'})
      } catch (error) {
        Swal.fire({icon: 'warning',title: 'Oops...',text: 'Ocurrió un problema'});

      }

    });

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
