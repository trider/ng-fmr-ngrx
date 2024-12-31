import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable, of, filter } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  public usersGet():Observable<any>{
   
    return of(Users).pipe();
  }

  public userGet(userId:string):Observable<any>{
   
    return of(Users.find((res:any)=>res.id===parseInt(userId))).pipe()
  }

  

  

}
