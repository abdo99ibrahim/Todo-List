import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  name: string = "Abdelrahman Ibrahim";
  constructor(private _httpCient:HttpClient) { }

  ngOnInit(): void {
    this._httpCient.get(`https://api.mohamed-sadek.com/task/get`).subscribe(
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
    this._httpCient.post(`https://api.mohamed-sadek.com/task/post`,task).subscribe(
      (response:any)=>{
        this.tasks.push(task);
      },(error:any)=>{
        console.log("Error");
      }
    );
  }

  update(task: Task): void {
    task.IsDone =! task.IsDone;
    this._httpCient.put(`https://api.mohamed-sadek.com/task/put`,task).subscribe(
      (response:any)=>{
      },(error:any)=>{
      }
    );
  }

  delete(index: number): void {
    let task = this.tasks[index];
    this._httpCient.delete(`https://api.mohamed-sadek.com/Task/Delete?id=${task.ID}`).subscribe(
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
