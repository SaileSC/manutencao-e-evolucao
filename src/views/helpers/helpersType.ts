export interface Usuario{
    id:string
    nome:string
    login:string
    email:string
}

export interface Requisicao{
    numero_requisicao: number
    data: string
    nome_solicitante: string
    nome_sistema: string
    descricao_requisicao: string
    status_requisicao: number
    anexo: string
    fechamento: string
}