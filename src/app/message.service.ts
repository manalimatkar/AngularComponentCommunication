import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class MessageService {
    private myMessage = new Subject<string>();
 
    updateMessage(message: string) {
        this.myMessage.next(message);
    }
 
    clearMessage() {
        this.myMessage.next();
    }
 
    getMessage(): Observable<string> {
        return this.myMessage.asObservable();
    }
}
