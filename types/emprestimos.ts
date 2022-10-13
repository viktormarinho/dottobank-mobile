export interface Emprestimo {
    id: number;
    status: "A" | "R" | "E";
    valor: string;
    user: number;
}