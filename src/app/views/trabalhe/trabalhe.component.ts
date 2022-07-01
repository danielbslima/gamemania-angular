import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-trabalhe',
  templateUrl: './trabalhe.component.html',
  styleUrls: ['./trabalhe.component.css']
})
export class TrabalheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new User ("", "", "", "")
  onSubmit(){
    console.log(this.userModel)
  }
}
