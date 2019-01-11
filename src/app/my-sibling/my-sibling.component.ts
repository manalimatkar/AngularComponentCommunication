import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-my-sibling',
  templateUrl: './my-sibling.component.html',
  styleUrls: ['./my-sibling.component.css']
})
export class MySiblingComponent implements OnInit, OnDestroy {
  mymessage: string;
  subscription: Subscription;

  // Inject MessageService
  constructor(private messageService: MessageService) {
    // Subscribe to  "myMesasge" Subject Observable and store emitted value to property mymessage
    this.subscription = this.messageService.getMessage()
     .subscribe(mymessage => { this.mymessage = mymessage; });
  }

  ngOnInit() {
    console.log("at sibling");
  }
  
  FupdateParent() {
    this.messageService.updateMessage("Sending Message from Sibling");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
