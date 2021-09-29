import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Products } from '../Products';
import { RestService } from '../rest.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // , private rs : RestService
    constructor(private router: Router, private spinner: NgxSpinnerService) {
        let UserKeySuccess = sessionStorage.getItem("UserKey");
        let dashboardLink = window.location.href;

        if (dashboardLink == 'http://localhost:4200/dashboard' && !UserKeySuccess) {
            this.router.navigate([``])
        } else {
            console.log(UserKeySuccess)
        }

    }
    gridColumns = 3;
    notEmptyPost = true;
    notScrolly = true;
    toggleGridColumns() {
        this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    }


    public GoToDetails() {

        this.router.navigate([`details`])
    }

    private detailItem(id) {
        console.log(id);
    }



    order;
    sortData() {
        if (this.order) {
            let newObj = this.rows.sort((a, b) => a[0].id - b[0].id);
            this.rows = newObj
        } else {
            let newObj = this.rows.sort((a, b) => b[0].id - a[0].id);
            this.rows = newObj
        }
        this.order = !this.order
    }
    isDesc;
    sortName(prop) {
        this.isDesc = !this.isDesc
        let direction = this.isDesc ? 1 : -1;

        this.rows.sort(function (a, b) {
            if (a[prop] < b[prop]) {
                return -1 * direction;
            } else if (a[prop] > b[prop]) {
                return 1 * direction;
            } else {
                return 0;
            }
        });
    }
    headers = ["id", "name", "model", "purchaseDate"];
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
                    "powers": "5000RPM",
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
    onScroll() {
        this.arry.push(this.rows)
        
        const length = this.arry.length
        if (length < 10){
            // this.rows.push(this.arry)
           
        }
        
        
        if (this.notEmptyPost && this.notEmptyPost) {
            this.spinner.show();
            // this.loadNextPost()
        }
        
    }
arry:any = [];
    // loadNextPost() {
    //    this.rows
    // }
}

