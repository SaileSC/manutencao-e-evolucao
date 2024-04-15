import { Request, Response } from "express";

const requisicoes = async (req:Request, res:Response) =>{
    try {
        const response = await fetch(`http://localhost:3355/requisicoes`);
        if (!response.ok) {
            res.render("main/requisicoes");
            throw new Error("Erro ao acessar API");
        }
        const requisicoes = await response.json();
        req.session.value = requisicoes.length + 1;
        res.render("main/requisicoes", { requisicoes });
    } catch (err) {
        console.error("Erro:", err);
    }
}


const criarRequisicoes = (req:Request, res:Response) =>{
    const id = req.session.value;
    res.render("main/requisicao/criarRequisicao", {id})
}

export default {requisicoes, criarRequisicoes}