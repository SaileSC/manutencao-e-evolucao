import { Router } from "express";
import mainControler from "../controllers/main";

const router = Router();

router.get("/", mainControler.index)
router.get("/usuario", mainControler.usuario)
export default router;