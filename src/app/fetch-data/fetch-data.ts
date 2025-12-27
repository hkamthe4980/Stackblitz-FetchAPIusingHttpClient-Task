import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient ,HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-fetch-data',
  imports: [ CommonModule,HttpClientModule],
  standalone: true,
  templateUrl: './fetch-data.html',
  styleUrl: './fetch-data.css',
})
export class FetchData {
  users:any[]=[]
  constructor( private http : HttpClient){}
  ngOnInit(){
     this.http.get<any[]>("https://jsonplaceholder.typicode.com/users")
     .subscribe(res=>{
      this.users = res
      console.log(this.users)
      
     })
  }
}
