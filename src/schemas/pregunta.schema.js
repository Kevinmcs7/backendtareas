import { z } from "zod";

export const createPreguntaSchema = z.object({
    title: z.string({
        required_error: 'Title is required'
    }),
    pregunta: z.string({
        required_error: 'pregunta must be a string'
    }),
    date : z.string().datetime().optional(),
});