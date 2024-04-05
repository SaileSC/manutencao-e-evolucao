import { Request, Response } from "express";

const index = (req:Request, res: Response) => {
    res.render("login", {
        layout:false
    });
}

const usuario = (req:Request, res: Response) => {
    const mensagem = "Saile Santos da Costa"
    res.render("main/usuario", {
        mensagem
    });
}

export default {index, usuario}