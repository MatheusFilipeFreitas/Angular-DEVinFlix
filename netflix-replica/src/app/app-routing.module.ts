import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WithMenuComponent } from './layout/with-menu/with-menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SerieComponent } from './pages/serie/serie.component';
import { AuthguardGuard } from './security/guard/authguard.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: WithMenuComponent,
    canActivate: [AuthguardGuard],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'series/:id',
        component: SerieComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
