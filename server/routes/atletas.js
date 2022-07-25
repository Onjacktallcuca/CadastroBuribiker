import express from 'express';

import { getAtletas, getAtleta, createAtleta, updateAtleta, likeAtleta, deleteAtleta } from '../controllers/atletas.js';

const router = express.Router();

router.get('/', getAtletas);
router.post('/', createAtleta);
router.get('/:id', getAtleta);
router.patch('/:id', updateAtleta);
router.delete('/:id', deleteAtleta);
router.patch('/:id/likeAtleta', likeAtleta);

export default router;