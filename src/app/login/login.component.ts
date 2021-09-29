import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passType: string = 'password'
  passShown: boolean = false;

  formGroup: FormGroup;
  constructor(private authService: AuthServiceService,private router:Router) { }

  public tooglePass() {
    if (this.passShown) {
      this.passShown = false;
      this.passType = 'password'
    } else {
      this.passType = 'text'
      this.passShown = true;
    }
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  loginProces() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(result => {
        if (result) {
          console.log(result + "login Success")
          sessionStorage.setItem('UserKey', result.token);
          
          let UserKeySuccess = sessionStorage.getItem("UserKey");
            this.router.navigate([`dashboard`])
        } else {
          console.log(result)
        }
      })
    }
  }
}
