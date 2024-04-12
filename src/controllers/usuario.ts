import { Request, Response } from "express";

const usuario = async (req:Request, res: Response) => {
    const request = async (end:string = "") => {
        let stringReq = `${process.env.URL_API}/user/list`
        
        if(end){
            stringReq = `${process.env.URL_API}/user/search/${end}`;
        }
        try {
            const response = await fetch(stringReq);

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
        res.render("main/usuario", {
            mensagem : req.flash("mensagem"),
            error: req.flash("error")
        });


    }else if(req.method == "POST"){

        if(req.body.tipoReq == "todos"){
            await request()
        }else{
            await request(req.body.busca)
        }
    }
}

const criarUsuario = async (req: Request, res: Response) => {
    if(req.method == "GET"){
        res.render("main/sub/criarUsuario", {
            mensagem : req.flash("mensagem"),
            error: req.flash("error")
        });
    }else if(req.method == "POST"){
        try {
            const response = await fetch(`${process.env.URL_API}/user`, {
                method: "POST",
                body: JSON.stringify(req.body),
                headers: {
                "Content-Type": "application/json"
                }
            });
    
            if (!response.ok) {
                await response.json().then(data => {
                    req.flash("error", `Usuário não cadastrado, ${data.errosList[0]}`);
                });
                
                res.redirect(`/usuario`);
                throw new Error("Erro ao acessar API");
            }
    
            req.flash("mensagem", "Usuário cadastrado..");
            res.redirect(`/usuario`);
        } catch (err) {
            console.error("Erro:", err);
        }
    }
}


const deletarUsuario = async (req: Request, res: Response) => {
    if(req.method == "GET"){
        try {
            const response = await fetch(`${process.env.URL_API}/user/${req.params.id}`, {
                method: "DELETE",
                headers: {
                "Content-Type": "application/json"
                }
            });
    
            if (!response.ok) {
                await response.json().then(data => {
                    req.flash("error", `Usuário não deletado, ${data.errosList[0]}`);
            });
                
                res.redirect(`/usuario`);
                throw new Error("Erro ao acessar API");
            }
            req.flash("mensagem", "Usuário deletado com sucesso..");
            res.redirect(`/usuario`);
        } catch (err) {
            console.error("Erro:", err);
        }
    }
}




export default {usuario, criarUsuario, deletarUsuario}