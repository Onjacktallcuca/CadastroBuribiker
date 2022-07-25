import express from 'express';
import mongoose from 'mongoose';

import AtletaMessage from '../models/atleta.js';

const router = express.Router();

export const getAtletas = async (req, res) => { 
    try {
        const atletas = await AtletaMessage.find();
                
        res.status(200).json(atletas);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAtleta = async (req, res) => { 
    const { id } = req.params;

    try {
        const atleta = await AtletaMessage.findById(id);
        
        res.status(200).json(atleta);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAtleta = async (req, res) => {
    const { nome, rh, idAtleta, tags, time, selectedFile} = req.body;

    const newAtleta = new AtletaMessage({ nome, rh, idAtleta, tags, time, selectedFile })

    try {
        await newAtleta.save();

        res.status(201).json(newAtleta );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAtleta = async (req, res) => {
    console.log(req.params);
    const { id } = req.params;


    const { nome, rh, idAtleta, tags, time, selectedFile } = req.body;
    
    console.log(req.body);

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No post with id: ${id}`);

    const updatedAtleta = { nome, rh, idAtleta, tags, time, selectedFile, _id: id };

    await AtletaMessage.findByIdAndUpdate(id, updatedAtleta, { new: true });

    res.json(updatedAtleta);
}

export const deleteAtleta = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Nenhum atleta com esse id: ${id}`);

    await AtletaMessage.findByIdAndRemove(id);

    res.json({ message: "Atleta deletado com sucesso." });
}

export const likeAtleta = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`Nenhum atleta com esse id: ${id}`);
    
    const atleta = await AtletaMessage.findById(id);

    const updatedAtleta = await AtletaMessage.findByIdAndUpdate(id, { likeCount: atleta.likeCount + 1 }, { new: true });
    
    res.json(updatedAtleta);
}


export default router;