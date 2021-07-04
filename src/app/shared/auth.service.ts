import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }
    isLoggedIn() {
        return !!localStorage.getItem('Auth-Token');
    }

    logout() {
        localStorage.removeItem('Auth-Token');
    }

    login() {
        localStorage.setItem('Auth-Token', '908sf8098sdfsdf0sd9f80s0d98f9sdf0ds98f09sdf8');
    }
}
