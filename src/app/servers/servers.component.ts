import { Component, OnInit } from '@angular/core';
//import { setTimeout } from 'timers';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = '';
  serverCreated = false;
  servers = ['Testserver','Testserver 2'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    },3000)
   }

  
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server created successfully";
  }

  onUpdateServername(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
