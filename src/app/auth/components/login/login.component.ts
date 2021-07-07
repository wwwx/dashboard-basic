import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/auth.service';
import { Router } from '@angular/router';
import { APP_CODE } from '../../../shared/constant';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router, @Inject(APP_CODE) private appCode: string) {
    }

    submit() {
        // console.log(this.appCode);
        this.auth.login();
        this.router.navigate(['main']);
    }

    ngOnInit() {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['main']);
        }
    }

}
