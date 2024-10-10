import Crypto from "../models/crypto.js"

const getCryptoDeviation = async (req, res) => {
    const { coin } = req.query;
  
    try {
      const records = await Crypto.find({ name: coin }).sort({ fetchedAt: -1 }).limit(100);
  
      if (records.length < 2) {
        return res.status(400).json({ error: 'Not enough data for deviation' });
      }
  
      const prices = records.map(record => record.price);
      const mean = prices.reduce((a, b) => a + b) / prices.length;
      const variance = prices.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / prices.length;
      const deviation = Math.sqrt(variance);
  
      res.json({ deviation });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

export {getCryptoDeviation}