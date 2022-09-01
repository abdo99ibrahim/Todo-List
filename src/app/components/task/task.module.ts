import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TasksComponent } from './tasks/tasks.component';
import { SharedModule } from '../shared/shared.module';

// Internal Routing
const routes: Routes = [
  {path:'details/:id',component:DetailsComponent},
  { path: '', component: TasksComponent, canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [TasksComponent,DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TaskModule { }
