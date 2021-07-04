import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: HomeComponent },
            { path: 'dashboard', component: DashboardComponent },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {
}
