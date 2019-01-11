import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // Inject Message service at constructor
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    console.log("At app component");
    /* 
      Update "myMessage" Subject next value,
      Compoents subscribed to "myMessage" Subject will display this message
    */    
    this.messageService.updateMessage('Hello! From AppComponent !!');
  }

}
