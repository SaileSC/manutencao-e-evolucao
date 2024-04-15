import { Router } from "express";
import mainControler from "../controllers/main";
import loginControler from "../controllers/login"
import usuarioControler from "../controllers/usuario"
import requisicaoControler from "../controllers/requisicao"

const router = Router();

//pagina inicial (login)
router.get("/", loginControler.login)
router.post("/", loginControler.login)

//paginas Usuario
router.get("/usuario", usuarioControler.usuario)
router.post("/usuario", usuarioControler.usuario)
router.get("/usuario/criar", usuarioControler.criarUsuario)
router.post("/usuario/criar", usuarioControler.criarUsuario)
router.get("/usuario/remove/:id", usuarioControler.deletarUsuario)
router.get("/usuario/editar/:id", usuarioControler.alterarUsuario)
router.post("/usuario/editar/:id", usuarioControler.alterarUsuario)
router.get("/usuario/detalhar/:id", usuarioControler.detalharUsuario)



//paginas Requisicao
router.get("/requisicoes", requisicaoControler.requisicoes)
router.get("/requisicoes/criar", requisicaoControler.criarRequisicoes)
router.post("/requisicoes/criar", requisicaoControler.criarRequisicoes)


router.get("/identificacao", mainControler.identificacao)
router.get("/analise", mainControler.analise)
router.get("/projeto", mainControler.projeto)
router.get("/implementacao", mainControler.implementacao)
router.get("/testeSistema", mainControler.testeSistema)
router.get("/testeAceite", mainControler.testeAceite)
router.get("/entrega", mainControler.entrega)


export default router;