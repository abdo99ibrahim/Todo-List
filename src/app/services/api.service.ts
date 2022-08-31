import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // api_URL = 'https://api.mohamed-sadek.com';
  constructor(private _httpClient:HttpClient) { }
  get(url:string){
    return this._httpClient.get(`${environment.api_URL}/${url}`)
  }
  post(url:string,body:any){
    return this._httpClient.post(`${environment.api_URL}/${url}`,body);
  }

  put(url:string,body:any){
    return this._httpClient.put(`${environment.api_URL}/${url}`,body);
  }

  delete(url:string){
    return this._httpClient.delete(`${environment.api_URL}/${url}`);
  }
}
