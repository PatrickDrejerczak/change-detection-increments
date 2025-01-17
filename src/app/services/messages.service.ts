import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessagesService {
  private messages = signal<string[]>([]);
  allMessages = this.messages.asReadonly();
  messages$ = new BehaviorSubject<string[]>([]);

  addMessage(message: string) {
    this.messages.update((prevMessages) => [...prevMessages, message]);
    this.messages$.next(this.messages());
  }
}
