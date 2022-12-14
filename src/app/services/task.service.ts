import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _apiService:ApiService) { }
  get(){
    return this._apiService.get('task/get')
  }
  post(task:Task){
    return this._apiService.post('task/post',task);
  }

  put(task:Task){
    return this._apiService.put('task/put',task);
  }

  delete(id:number){
    return this._apiService.delete(`Task/Delete?id=${id}`);
  }
}
