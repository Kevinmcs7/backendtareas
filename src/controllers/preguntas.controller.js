import Pregunta from '../models/pregunta.model.js';

export const getPreguntas = async (req, res) => {
    try {
        const pregunta = await Pregunta.find({
            user:req.user.id
        }).populate('user');
        res.json(pregunta)
    } catch (error) {
        return res.status(500).json({ message: "something went wrong"});
        
    }
}

export const createPregunta = async (req, res) => {
    try {
        const {title, pregunta, date } = req.body
    
        const newPregunta = new Pregunta({
            title,
            pregunta,
            date,
            user: req.user.id
        })
        const savedPregunta = await newPregunta.save();
        res.json(savedPregunta)
    } catch (error) {
        return res.status(500).json({ message: "something went wrong"});
        
    }

}

export const getPregunta = async (req, res) => {
    try {
        const pregunta = await Pregunta.findById(req.params.id).populate('user')
    if (!pregunta) return res.status(404).json({mesaage: 'pregunta no encontrada'})
    res.json(pregunta)
    } catch (error) {
        return res.status(404).json({ message: "pregunta no encontrada"});
    }
};

export const deletePregunta = async (req, res) => {
    try {
        const pregunta = await Pregunta.findByIdAndDelete(req.params.id) 
    if (!pregunta) return res.status(404).json({mesaage: 'pregunta no encontrada'})
    return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "pregunta no encontrada"});
        
    }
}

export const updatePregunta = async (req, res) => {
    try {
        const pregunta = await Pregunta.findByIdAndUpdate(req.params.id, req.body, {
            new :true
        });
        if (!pregunta) return res.status(404).json({mesaage: 'pregunta no encontrada'})
        res.json(pregunta)
    } catch (error) {
        return res.status(404).json({ message: "pregunta no encontrada"});
    }
}

