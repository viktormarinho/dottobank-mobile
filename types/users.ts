
export interface User {
    id: number;
    email: string;
    password: string;
    created_at: string;
    picture: string;
    first_time: boolean;
    cliente: Cliente;
    conta: Conta;
}

export interface Cliente {
    id: number;
    username: string;
    cpf: string;
    sexo: string;
    nascimento: string;
    telefone: string;
}

export interface Conta {
    id: number;
    dotto_id: string;
    tipo: string;
    saldo: string;
}
