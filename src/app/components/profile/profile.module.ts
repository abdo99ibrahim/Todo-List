import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {path:'',component:HomeComponent},
]
@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ],
  imports: [
  CommonModule,
  SharedModule,
  RouterModule.forChild(routes),
  ]
})
export class ProfileModule { }
