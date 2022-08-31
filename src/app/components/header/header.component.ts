import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  taskCounter:number=0;
  isLogged = false;
  constructor(private _taskSevice:TaskService,private _userService:UserService) { }

  ngOnInit(): void {
    // this.isLogged = this._userService.isLoggedIn();
    this._userService.logged.subscribe(status=>{
      this.isLogged = status;
    });
    this.isLogged = this._userService.isLoggedIn();
    this._taskSevice.get().subscribe((response:any)=>{
      this.taskCounter = response.Data.length;
    },(error:any)=>{});
  }

}
