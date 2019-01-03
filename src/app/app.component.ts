import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // message:string = 'Hello! From AppComponent !!';

  constructor(private messageService: MessageService) {
  }
  ngOnInit() {
    console.log("At app component");
    this.messageService.updateMessage('Hello! From AppComponent !!');
  }

}
