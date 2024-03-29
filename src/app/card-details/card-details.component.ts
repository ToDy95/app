import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {


    }
    headers = ["powers", "size", "color", "form", "weight"];
    private id;
    row;

    rows = [
        {
            "id": "1",
            "name": "Washing machine",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "2",
            "name": "Dishwasher",
            "model": "Bosh",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5100RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "3",
            "name": "Vacuum cleaner",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "4",
            "name": "Kitchen robot",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "5",
            "name": "Masina de spalat",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "6",
            "name": "Masina de spalat",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "7",
            "name": "Coffee filter",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "8",
            "name": "Mixer",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "9",
            "name": "Coffee grinder",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "10",
            "name": "Cooking set",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "11",
            "name": "Chairs",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        },
        {
            "id": "12",
            "name": "Table",
            "model": "Artic",
            "purchaseDate": "20-20-2020",
            "details": [
                {
                    "powers": "5000RPM",
                    "size": "1mW-/-1.5mH",
                    "color": "white",
                    "form": "square",
                    "weight": "90kgs"
                }
            ]
        }
    ]
    ngOnInit(): void {
        this.activatedRoute.params.subscribe(p => {
            this.id = p["id"];
            this.row = this.rows.filter(x => x.id == this.id)[0];
        });

        let UserKeySuccess = sessionStorage.getItem("UserKey");
        let dashboardLink = window.location.href;

        if (dashboardLink == `http://localhost:4200/details/${this.id}` && !UserKeySuccess) {
            this.router.navigate([``])
        } else {
            console.log(UserKeySuccess)
        }
    }

}
