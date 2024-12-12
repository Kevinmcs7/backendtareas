import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
import preguntasRoutes from "./routes/preguntas.routes.js";
import  cors from "cors";

const app = express()

// Middleware para manejar CORS
app.use(cors({
    origin: 'https://frontendtareascorregido.vercel.app', // URL del frontend
    credentials: true, // Permitir cookies y cabeceras de autenticación
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Middleware para manejar solicitudes preflight (OPTIONS)
app.options('*', cors({
    origin: 'https://frontendtareascorregido.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware para permitir CORS manualmente en las respuestas
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://frontendtareascorregido.vercel.app');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", preguntasRoutes);

export default app;


 