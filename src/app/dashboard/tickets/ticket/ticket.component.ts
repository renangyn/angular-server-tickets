import { Component, EventEmitter, input, Input, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  //data = input.required<Ticket>;
  @Input ()data!: Ticket;
  
  detailsVisible = signal(false)
  onTogleDetails(){
    this.detailsVisible.update((wasVisible) => !wasVisible)
}
}