import { Component, input } from '@angular/core';
import { ChamadoInterface } from '../../models/chamado';

@Component({
  selector: 'app-chamados-card',
  imports: [],
  templateUrl: './chamados-card.html',
  styleUrl: './chamados-card.css',
})
export class ChamadosCard {
  chamadoDoCard = input.required<ChamadoInterface>();
}
