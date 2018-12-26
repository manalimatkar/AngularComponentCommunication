import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit {

  @Input() message:string;
  
  @Output() childMessage = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  updateParent() {
    this.childMessage.emit('Hello! My Parent !!!')
  }

}
