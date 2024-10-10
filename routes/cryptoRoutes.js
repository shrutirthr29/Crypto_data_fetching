import express from 'express';
import { getCryptoStats } from '../controllers/stats.js';
import { getCryptoDeviation } from '../controllers/deviation.js';
const router = express.Router();

router.get('/stats', getCryptoStats);
router.get('/deviation', getCryptoDeviation);

export default router
