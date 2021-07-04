import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {MaterialModule} from '../shared/material.module';


@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        SidenavComponent,
        HomeComponent,
        DashboardComponent,
    ],
    imports: [
        CommonModule,
        MainRoutingModule,
        MaterialModule,
    ]
})
export class MainModule {
}
