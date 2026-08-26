import { Component, signal } from '@angular/core';
import { ChamadosCard } from './components/chamados-card/chamados-card';
import { Cabecalho } from './components/cabecalho/cabecalho';
import { ChamadoInterface } from './models/chamado'; 

@Component({
  selector: 'app-root',
  imports: [ChamadosCard, Cabecalho],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Sistema de Chamados de TI';

 
  chamados = signal<ChamadoInterface[]>([
    {
      id: 1,
      titulo: 'Computador não liga',
      prioridade: 'Alta',
      status: 'Aberto',
      setor: 'Financeiro'
    },
    {
      id: 2,
      titulo: 'Instalar pacote Office',
      prioridade: 'Média',
      status: 'Em atendimento',
      setor: 'RH'
    },
    {
      id: 3,
      titulo: 'Troca de mouse',
      prioridade: 'Baixa',
      status: 'Finalizado',
      setor: 'TI'
    }
  ]);

  adicionarChamado(): void {
    const novoChamado: ChamadoInterface = { 
      id: 4,
      titulo: 'Novo chamado de teste',
      prioridade: 'Média',
      status: 'Aberto',
      setor: 'Administrativo'
    };

    // 3. Agora o .update() vai funcionar perfeitamente
    this.chamados.update(listaAtual => [
      ...listaAtual,
      novoChamado
    ]);
  }
}