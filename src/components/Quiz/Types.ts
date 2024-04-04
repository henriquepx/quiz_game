export interface RespostasState {
    [key: string]: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    p9: string;
    p10: string;
}
   
export interface Pergunta {
    pergunta: string;
    options: string[];
    resposta: string;
    id: string;
   }