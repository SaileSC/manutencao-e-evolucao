import { Request, Response } from "express";

const login = async (req:Request, res: Response) => {
    const request = async (login:string, senha:string) => {
        try {
            const response = await fetch(`http://127.0.0.1:8080/user/validarLogin/${login}/${senha}`,  {
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

const usuario = async (req:Request, res: Response) => {
    const request = async (end:string = "") => {
        let stringReq = `http://localhost:8080/user/list`
        
        if(end){
            stringReq = `http://localhost:8080/user/${end}`;
        }
        try {
            //const response = await fetch(`http://localhost:3355/usuarios/${end}`);
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


const novoUsuario = async (req: Request, res: Response) => {
        try {
            const response = await fetch(`http://localhost:8080/user`, {
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


export default {usuario, identificacao, analise, projeto, implementacao, testeSistema, testeAceite, entrega, login, novoUsuario}