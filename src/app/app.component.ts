import {Component, OnInit} from "@angular/core";

@Component({
    selector: "app",
    templateUrl: "./app/app.html"
})
export class AppComponent implements OnInit {
	title = 'Test App Variable';
    ngOnInit() {
        console.log("Application component initialized ...");
    }
}