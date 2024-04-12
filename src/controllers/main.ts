import { Request, Response } from "express";



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


const identificacao = (req:Request, res: Response) => {
    let usuarioContent = ""
    if(req.session.user){
        usuarioContent =  `
        id: ${req.session.user?.id}
        nome: ${req.session.user?.nome}
        login: ${req.session.user?.login}
        email: ${req.session.user?.email}

        `
    }
    
    res.render("main/identificacao", {
        usuario: usuarioContent
    });
}

export default {analise, projeto, implementacao, testeSistema, testeAceite, entrega,identificacao }