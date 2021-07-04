import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private auth: AuthService, private router: Router) { }

    submit() {
        this.auth.login();
        this.router.navigate(['main']);
    }

    ngOnInit() {
    }

}
