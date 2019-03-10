import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

// const header = new HttpHeaders();
// header.set("Content-Type","application/json");
export class AllService {

  constructor(private _http:HttpClient) { }
  regiter(data){
    return this._http.post("http://localhost/client_api_4/register.php",data).pipe(map((res)=>{
      return res;
    }))
  }

  getUsers(){
    return this._http.get("http://localhost/client_api_4/getUsers.php").pipe(map((res)=>{
      return res;
    }))
  }

  delete(id){
    return this._http.post("http://localhost/client_api_4/delete.php",id).pipe(map((res)=>{
      return res;
    }))
  }
}
