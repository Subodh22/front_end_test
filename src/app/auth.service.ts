import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

interface myData
  {
    success:boolean,
    message:string
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getUserDetails(username)
  {
    return this.http.post("/test_api/neo4j_post",username
    )
  }
}
