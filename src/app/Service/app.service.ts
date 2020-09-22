import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {User} from '../Model/user.model'
@Injectable({
  providedIn: 'root'
})
export class AppService {
apiUrl:string="http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5"
  constructor(private http:HttpClient) { }

  getAll(){
return this.http.get<User[]>(this.apiUrl)
  }
}
