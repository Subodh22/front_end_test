import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService,
              private router:Router) { }
  datapoints=[]

  ngOnInit()  {
  }
  loginUser(event)
  {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#Username').value
    const quer=
    {
      "name":username
    }
    this.Auth.getUserDetails(quer).subscribe(data=>{
      this.datapoints=[data]
      console.log(this.datapoints)
    })
    console.log(username)
  }
}
