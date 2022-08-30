import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from './../../models/task';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  task:Task=new Task();
  constructor(private _activatedRoute:ActivatedRoute,private _httpClient:HttpClient) {
    // alert("constator");
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params=>{
      // alert("_activatedRoute");

      let id=params.get('id');
      this._httpClient.get(`https://api.mohamed-sadek.com/Task/GetByID?id=${id}`).subscribe((reponse:any)=>{
        this.task=reponse.Data;
      },(error:any)=>{

      })

    })
  }

}
