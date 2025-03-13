import { Component, EventEmitter, input, Input, Output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //data = input.required<Ticket>({alias: 'teste'});
  @Input ()data!: Ticket;
  @Output () close = new EventEmitter();
  
  detailsVisible = signal(false)
  onTogleDetails(){
    this.detailsVisible.update((wasVisible) => !wasVisible)
}

onMarkAsCompleted() {
  this.close.emit();
}
}