import { Request, Response } from "express";

const login = async (req:Request, res: Response) => {
    const request = async (login:string, senha:string) => {
        try {
            const response = await fetch(`${process.env.URL_API}/user/validarLogin/${login}/${senha}`,  {
                method : "POST"
            });
            if (!response.ok) {
                 res.render("login", {
                    mensagem: "Usuario ou Senha incorretos",
                    layout:false
                });
                throw new Error("Erro ao acessar API");
            }
              
            req.session.user = await response.json();
            res.redirect("/usuario");
        } catch (err) {
            console.error("Erro:", err);
        }
    }
    

    if(req.method == "GET"){
        res.render("login", {
            layout:false
        });
    }else if(req.method == "POST"){
        await request(req.body.login, req.body.senha)
    }
}

export default {login}