import { RouterModule, Routes } from "@angular/router";

import { EliteComponent } from "./components/elite/elite.component";
import { EventsComponent } from "./components/events/events.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { TrainingComponent } from "./components/training/training.component";


const myRoutes : Routes=[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'training',component:TrainingComponent},
  {path:'elite',component:EliteComponent},
  {path:'events',component:EventsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent}
  
];

export const Routing = RouterModule.forRoot(myRoutes);