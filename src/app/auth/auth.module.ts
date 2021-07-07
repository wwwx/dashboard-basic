import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatIconModule, MatInputModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { APP_CODE } from '../shared/constant';


@NgModule({
    declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,
        MatCardModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
    ],
    exports: [LoginComponent, RegisterComponent, ResetPasswordComponent],
    providers: [
        { provide: APP_CODE, useValue: 'dashboard_basic' }
    ]
})
export class AuthModule {
}
