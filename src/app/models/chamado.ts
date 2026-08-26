
export interface ChamadoInterface {
    id: number;
    titulo: string;
    prioridade: 'Baixa' | 'Média' | 'Alta';
    status: 'Aberto' | 'Em atendimento' | 'Finalizado';
    setor: 'Financeiro' | 'RH' | 'TI' | 'Administrativo';
}