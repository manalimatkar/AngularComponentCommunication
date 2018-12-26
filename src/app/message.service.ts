import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
 
@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<string>();
 
    updateMessage(message: string) {
        this.subject.next(message);
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<string> {
        return this.subject.asObservable();
    }
}
