import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpEventType } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

// const header = new HttpHeaders();
// header.set("Content-Type","application/json");
export class AllService {
  constructor(private _http:HttpClient) { }
  regiter(data){
    //console.log(data);
    const headers = new HttpHeaders().set('Content-Type', []);
    return this._http.post("http://localhost/client_api_4/register.php",data,{ headers, reportProgress: true, observe: 'events' }).pipe(map((event)=>{
      if(event.type === HttpEventType.UploadProgress) {
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };
      }else if(event.type ===  HttpEventType.Response){
          return event.body;
      }else{
          return `Unhandled event: ${event.type}`;
      }
    }))
  }

  private urlSource = new BehaviorSubject('true');
  isUrlSet = this.urlSource.asObservable();

  changeUrl(url: string) {
    this.urlSource.next(url)
  }

  update(data){
    return this._http.post("http://localhost/client_api_4/update.php",data).pipe(map((res)=>{
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

  getUser(id){
    return this._http.get("http://localhost/client_api_4/getUser.php?id="+id).pipe(map((res)=>{
      return res;
    }))
  }

  login(data){
    return this._http.post("http://localhost/client_api_4/login.php",data).pipe(map((res)=>{
      return res;
    }))
  }

  checkLife(data){
    return this._http.get("http://localhost/client_api_4/heartBet.php?id="+data).pipe(map((res)=>{
      return res;
    }))
  }


}
