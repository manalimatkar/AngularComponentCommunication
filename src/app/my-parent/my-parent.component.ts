import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit, OnDestroy {

  parentMessage: string = "Parent Says Hello!!!!";
  messageFromSibling: string;
  messageFromChild: string;

  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage()
      .subscribe(mymessage => this.messageFromSibling = mymessage)
  }

  ngOnInit() {
  }

  showMessageFromChild(message: any) {
    this.messageFromChild = message;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
