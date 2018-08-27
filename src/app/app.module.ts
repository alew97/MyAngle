import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { RootComponent } from './root/root.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ShowPostComponentComponent } from './show-post-component/show-post-component.component';

@NgModule({
  declarations: [
    RootComponent,
    LoginComponent,
    HomeComponent,
    ShowPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
