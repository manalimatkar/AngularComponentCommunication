import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../message.service';
@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit, OnDestroy {

  @Input() message: string;
  messageFromSibling: string;
  subscription: Subscription;

  @Output() childMessage = new EventEmitter<string>();

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
      .subscribe(mymessage => this.messageFromSibling = mymessage)
  }

  ngOnInit() {
  }

  updateParent() {
    this.childMessage.emit('Hello! My Parent !!!');
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
