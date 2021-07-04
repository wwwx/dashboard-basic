import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatButtonModule, MatInputModule, MatIconModule} from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';


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
    exports: [LoginComponent, RegisterComponent, ResetPasswordComponent]
})
export class AuthModule { }
