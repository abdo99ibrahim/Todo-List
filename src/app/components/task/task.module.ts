import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { TasksComponent } from '../tasks/tasks.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

// Internal Routing
const routes: Routes = [
  {path:'task/details/:id',component:DetailsComponent},
  { path: 'task', component: TasksComponent, canActivate:[AuthGuard]},
  {path:'',component:TasksComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TaskModule { }
