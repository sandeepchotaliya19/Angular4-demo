import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  //templateUrl: './warning-alert.component.html',
  template:'<p>This is  a warning, You are in danger!</p>',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
