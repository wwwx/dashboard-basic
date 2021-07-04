import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    sidebarOpen = true;

    constructor() {
    }

    sidebarToggler() {
        this.sidebarOpen = !this.sidebarOpen;
    }

    ngOnInit() {
    }


}
