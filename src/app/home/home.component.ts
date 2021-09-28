import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../Products';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  // , private rs : RestService
  constructor(private router:Router) {
 
   }

public GoToDetails(){

  this.router.navigate([`details`])
}

private detailItem(id){
    console.log(id);
}

headers = ["id","name","model","purchaseDate"];
rows = [
        {
            "id" : "1",
            "name" : "Washing machine",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "2",
            "name" : "Dishwasher",
            "model" : "Bosh",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "3",
            "name" : "Vacuum cleaner",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "4",
            "name" : "Kitchen robot",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "5",
            "name" : "Masina de spalat",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "6",
            "name" : "Masina de spalat",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "7",
            "name" : "Coffee filter",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "8",
            "name" : "Mixer",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "9",
            "name" : "Coffee grinder",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "10",
            "name" : "Cooking set",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "11",
            "name" : "Chairs",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        },
        {
            "id" : "12",
            "name" : "Table",
            "model" : "Artic",
            "purchaseDate" : "20-20-2020",
            "details" : [
                {
                    "powers" : "5000RPM",
                    "size" : "1mW-/-1.5mH",
                    "color": "white",
                    "form" : "square",
                    "weight" : "90kgs"
                }
            ]
        }
    ]
}
 

// products : Products[] = []

// ngOnInit() : void {

  
// this.rs.getProducts().subscribe(
 
//   (response)=>{
//     this.products = response
//   },
//   (error)=>{
//     console.log("ERRRRRR")
//   }
// )
// }

// }
