import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../message.service';
@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit, OnDestroy {
  // Input property to store data sent from parent component
  @Input() message: string;

   // Property to store value emitted by "myMessage" Subject
  messageFromSibling: string;

  subscription: Subscription;

  // Output event emitter property to emit data from child to parent
  @Output() childMessage = new EventEmitter<string>();
  
  //Inject MessageService
  constructor(private messageService: MessageService) {
    //Subscribe to  "myMesasge" Subject Observable and store emitted value to property messageFromSibling
    this.subscription = this.messageService.getMessage()
      .subscribe(mymessage => this.messageFromSibling = mymessage)
  }

  ngOnInit() {
  }
  
  // Button click event handler function 
  updateParent() {
    // Emit childMessage message event with payload data
    this.childMessage.emit('Hello! My Parent !!!');
  }

  // Unsubscribe from subscription to prevent memory leaks
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
