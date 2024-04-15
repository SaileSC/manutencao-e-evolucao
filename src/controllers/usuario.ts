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
        const error = req.session.error;
        const mensage = req.session.mensage;
        req.session.error = "";
        req.session.mensage = "";
        res.render("main/usuario", {mensage,error});

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
        const error = req.session.error;
        req.session.error = "";

        res.render("main/usuario/criaUsuario", {error});
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
                    req.session.error = `Usuário não cadastrado, ${data.errosList[0]}`;
                });
                
                res.redirect(req.originalUrl);
                throw new Error("Erro ao acessar API");
            }
    
            req.session.mensage = "Usuário cadastrado..";
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
                    req.session.error =  `Usuário não deletado, ${data.errosList[0]}`;
                });
                
                res.redirect(`/usuario`);
                throw new Error("Erro ao acessar API");
            }
            
            req.session.mensage =  "Usuário deletado com sucesso..";
            res.redirect(`/usuario`);
        } catch (err) {
            console.error("Erro:", err);
        }
    }
}


const alterarUsuario = async (req:Request, res:Response) => {
    if(req.method == "GET"){
        try {
            const response = await fetch(`${process.env.URL_API}/user/${req.params.id}`);
            if (!response.ok) {
                await response.json().then(data => {
                    req.session.error = `Usuário não existe, ${data.errosList[0]}`;
            });
                
                res.redirect(`/usuario`);
                throw new Error("Erro ao acessar API");
            }
            req.session.mensage = "Usuário acessado com sucesso..";
            res.render(`main/usuario/editaUsuario`, {usuario: await response.json()});
        } catch (err) {
            console.error("Erro:", err);
            
        }
    }else if(req.method == "POST"){
        console.log(req.body)
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
                req.session.error = `Usuário não alterado, ${data.errosList[0]}`;
                });

                res.redirect(`/usuario/editar/${req.params.id}`);
                throw new Error("Erro ao acessar API");
            }


            req.session.mensage = "Usuário Alterado com sucesso..";
            res.redirect(`/usuario`);
        } catch (err) {
            console.error("Erro:", err);
        }
    }
}


const detalharUsuario = async (req:Request, res:Response) => {
    if(req.method == "GET"){
        try {
            const response = await fetch(`${process.env.URL_API}/user/${req.params.id}`);
            if (!response.ok) {
                await response.json().then(data => {
                    req.session.error = `Erro ao acessar Usuário, ${data.errosList[0]}`;
                });
                
                res.redirect(`/usuario`);
                throw new Error("Erro ao acessar API");
            }
            res.render(`main/usuario/detalhaUsuario`, {usuario: await response.json()});
        } catch (err) {
            console.error("Erro:", err);
            
        }
    }
}



export default {usuario, criarUsuario, deletarUsuario, alterarUsuario, detalharUsuario}