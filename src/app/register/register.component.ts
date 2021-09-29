import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
reactiveForm;
  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      passwordM : new FormControl(null, [Validators.required])
    })
   }

  get f(){return this.reactiveForm.controls}
submitted;
  onSubmit(){
    this.submitted = true;
    if(this.reactiveForm.invalid){
      return;
    }
  }
  ngOnInit(): void {
  }

}
