import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TrainingComponent } from './components/training/training.component';
import { EventsComponent } from './components/events/events.component';
import { EliteComponent } from './components/elite/elite.component';
import { LoginComponent } from './components/login/login.component';
import { StarterComponent } from './components/starter/starter.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    TrainingComponent,
    EventsComponent,
    EliteComponent,
    LoginComponent,
    StarterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
