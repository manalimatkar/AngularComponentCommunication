import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyParentComponent } from './my-parent/my-parent.component';
import { MySiblingComponent } from './my-sibling/my-sibling.component';
import { MyChildComponent } from './my-parent/my-child/my-child.component';
import { MessageService } from  './message.service';
@NgModule({
  declarations: [
    AppComponent,
    MyParentComponent,
    MySiblingComponent,
    MyChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
