import { Request, Response } from "express";

const index = (req:Request, res: Response) => {
    res.render("login", {
        layout:false
    });
}

const usuario = async (req:Request, res: Response) => {
    const request = async (end: string = "") => {
        try {
            const response = await fetch(`http://localhost:3355/usuarios/${end}`);
            
            if (!response.ok) {
                res.render("main/usuario");

                throw new Error("Erro ao acessar API");
            }
            const usuarios = await response.json();
            res.render("main/usuario", { usuarios });
        } catch (err) {
            console.error("Erro:", err);
        }
    }
    

    if(req.method == "GET"){
        res.render("main/usuario");
    }else if(req.method == "POST"){

        if(req.body.tipoReq == "todos"){
            await request()
        }else{
            await request(req.body.busca)
        }
        
    }
}













const identificacao = (req:Request, res: Response) => {
    res.render("main/identificacao");
}

const analise = (req:Request, res: Response) => {
    res.render("main/analise");
}

const projeto = (req:Request, res: Response) => {
    res.render("main/projeto");
}

const implementacao = (req:Request, res: Response) => {
    res.render("main/implementacao");
}
const testeSistema = (req:Request, res: Response) => {
    res.render("main/testeSistema");
}
const testeAceite = (req:Request, res: Response) => {
    res.render("main/testeAceite");
}
const entrega = (req:Request, res: Response) => {
    res.render("main/entrega");
}


export default {index, usuario, identificacao, analise, projeto, implementacao, testeSistema, testeAceite, entrega}