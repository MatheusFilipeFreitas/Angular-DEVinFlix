import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { SerieComponent } from './pages/serie/serie.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { WithMenuComponent } from './layout/with-menu/with-menu.component';
import { AuthguardGuard } from './security/guard/authguard.guard';
import { CategoryComponent } from './components/category/category.component';
import { NextDirective } from './directives/next.directive';
import { PrevDirective } from './directives/prev.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    SerieComponent,
    HeaderComponent,
    LoginComponent,
    WithMenuComponent,
    CategoryComponent,
    NextDirective,
    PrevDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
