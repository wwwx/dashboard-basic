import { NgModule } from '@angular/core';
import {
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidenavComponent,
        HomeComponent,
        DashboardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
