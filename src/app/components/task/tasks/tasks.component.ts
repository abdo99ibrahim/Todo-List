import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  name: string = "Abdelrahman Ibrahim";
  id:number= 1000000;
  constructor(private _taskService:TaskService,private _userService:UserService,private _router:Router) { }

  ngOnInit(): void {
    if(!this._userService.isLoggedIn()){
      this._router.navigateByUrl('/user/login')
    }
    this._taskService.get().subscribe(
      (response:any)=>{
        // alert("Alert 1");
        console.log(JSON.stringify(response));
        this.tasks=response.Data;
      },
      (error:any)=>{}
    );
    // alert("Alert 2")
  }
  add(title: string): void {
    let task = new Task();
    task.Title = title;
    this._taskService.post(task).subscribe(
      (response:any)=>{
        this.tasks.push(task);
      },(error:any)=>{
        console.log("Error");
      }
    );
  }

  update(task: Task): void {
    task.IsDone =! task.IsDone;
    this._taskService.put(task).subscribe(
      (response:any)=>{
      },(error:any)=>{
      }
    );
  }

  delete(index: number): void {
    let task = this.tasks[index];
    this._taskService.delete(task.ID).subscribe(
      (response:any)=>{
        this.tasks.splice(index, 1);
      },(error:any)=>{
      }
    );

  }

  getPendingTasksCount():number{
    return this.tasks.filter(task=>!task.IsDone).length;
}
}
