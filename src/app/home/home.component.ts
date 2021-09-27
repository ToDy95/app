import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numbers = [];
  constructor(private router:Router) {
    for (let i = 0; i < 10; i++){
      this.numbers.push(i);
    }

   }

public GoToDetails(){

  this.router.navigate([`details`])
}
  ngOnInit(): void {
  }

}

