import { StatusRequisicao } from "../../enums/StatusRequisicao";
import { Requisicao, Usuario } from "./helpersType";

const mostrarUsuarios = (usuarios:Usuario[]) => {
    const usuariosArray = Array.isArray(usuarios) ? usuarios : (usuarios ? [usuarios] : []);
    if(usuariosArray){
        const lista = usuariosArray.map((usuario) => {
            return `
            <tr>
                <td>${usuario.nome}</td>
                <td>${usuario.login}</td>
                <td>${usuario.email}</td>
                <td>
                    <a href="/usuario/${usuario.id}"> <i class="bi bi-eye-fill"></i></a>
                    <a href="/usuario/update/${usuario.id}"> <i class="bi bi-pencil-fill"></i></a>
                    <a href="/usuario/remove/${usuario.id}"> <i class="bi bi-trash-fill"></i></a>
                </td>
            </tr>`;
        });
        return lista.join('');
    }else{
        return;
    }
};

const mostrarRequisicoes = (requisicoes: Requisicao[]) => {
    const requisicoesArray = Array.isArray(requisicoes) ? requisicoes : (requisicoes ? [requisicoes] : []);
    if(requisicoesArray){
        const lista = requisicoesArray.map((requisicao) => {
        return `
        <tr>
            <td>${requisicao.numero_requisicao}</td>
            <td>${requisicao.nome_solicitante}</td>
            <td>${requisicao.data}</td>
            <td>${StatusRequisicao[requisicao.status_requisicao]}</td>
            <td>
                <a href="/usuario/${requisicao.numero_requisicao}"> <i class="bi bi-eye-fill"></i></a>
                <a href="/usuario/remove/${requisicao.numero_requisicao}"> <i class="bi bi-trash-fill"></i></a>
            </td>
        </tr>`;
        });
        return lista.join('');
    }else{
        return;
    }
}


export {mostrarUsuarios, mostrarRequisicoes}