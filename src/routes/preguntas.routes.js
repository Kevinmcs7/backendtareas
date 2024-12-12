import {Router} from 'express' ;
import { authRequired } from "../middlewares/validateToken.js";
import { getPreguntas, 
    getPregunta ,
    createPregunta,
    updatePregunta,
    deletePregunta
} from "../controllers/preguntas.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPreguntaSchema } from "../schemas/pregunta.schema.js";

const router = Router()

router.get('/tareas', authRequired, getPreguntas)
router.get('/tareas/:id', authRequired, getPregunta)
router.post('/tareas', authRequired, validateSchema(createPreguntaSchema), createPregunta)
router.delete('/tareas/:id', authRequired, deletePregunta)
router.put('/tareas/:id', authRequired, updatePregunta)



export default router


