import { Request, Response } from "express";

const requisicoes = async (req:Request, res:Response) =>{
    try {
        const response = await fetch(`http://localhost:3355/requisicoes`);
        if (!response.ok) {
            res.render("main/requisicoes");
            throw new Error("Erro ao acessar API");
        }
        const requisicoes = await response.json();
        res.render("main/requisicoes", { requisicoes });
    } catch (err) {
        console.error("Erro:", err);
    }
}


const criarRequisicoes = (req:Request, res:Response) =>{
    res.render("main/sub/criarRequisicao")
}

export default {requisicoes, criarRequisicoes}