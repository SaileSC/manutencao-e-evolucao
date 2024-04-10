import { Usuario } from "./helpersType";

const inserirUsuarios = (usuarios:Usuario[]) => {
    const usuariosArray = Array.isArray(usuarios) ? usuarios : (usuarios ? [usuarios] : []);

    if(usuariosArray){
        const lista = usuariosArray.map((usuario) => {
            return `<tr>
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




export {inserirUsuarios}