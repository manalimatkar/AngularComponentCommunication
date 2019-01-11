import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit, OnDestroy {
  
  // Property bound to as input to child component
  parentMessage: string = "Parent Says Hello!!!!";

  // Property to store value emitted by "myMessage" Subject
  messageFromSibling: string;
  
  // Property to store value emitted from child component 
  messageFromChild: string;

  subscription: Subscription;
  
  //Inject MessageService
  constructor(private messageService: MessageService) {
    //Subscribe to  "myMesasge" Subject Observable and store emitted value to property messageFromSibling
    this.subscription = this.messageService.getMessage()
      .subscribe(mymessage => this.messageFromSibling = mymessage)
  }

  ngOnInit() {
  }

  // (childMessage) event handler function
  showMessageFromChild(message: any) {
    this.messageFromChild = message;
  }
 
  // Unsubscribe from subscription to prevent memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
