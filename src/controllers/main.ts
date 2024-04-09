import { Request, Response } from "express";

const index = (req:Request, res: Response) => {
    res.render("login", {
        layout:false
    });
}

const usuario = (req:Request, res: Response) => {
    fetch('http://localhost:3355/usuarios')
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao obter os dados');
        }
        return response.json();
    })
    .then(usuarios => {
        res.render("main/usuario", {
            usuarios

        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
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