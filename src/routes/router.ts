import { Router } from "express";
import mainControler from "../controllers/main";

const router = Router();

router.get("/", mainControler.index)
router.get("/usuario", mainControler.usuario)
router.get("/identificacao", mainControler.identificacao)
router.get("/analise", mainControler.analise)
router.get("/projeto", mainControler.projeto)
router.get("/implementacao", mainControler.implementacao)
router.get("/testeSistema", mainControler.testeSistema)
router.get("/testeAceite", mainControler.testeAceite)
router.get("/entrega", mainControler.entrega)

export default router;