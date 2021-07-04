import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from '../../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Output() toggleSidebarForme: EventEmitter<any> = new EventEmitter();

    constructor(private auth: AuthService, private router: Router) { }
    ngOnInit() {
    }

    toggleSidebar() {
        this.toggleSidebarForme.emit();
    }

    logout() {
        this.auth.logout();
        this.router.navigate(['login']);
    }

}
