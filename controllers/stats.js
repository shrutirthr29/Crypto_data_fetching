import Crypto from "../models/crypto.js"

const getCryptoStats = async (req, res) => {
    const { coin } = req.query;
  
    try {
      const crypto = await Crypto.findOne({ name: coin }).sort({ fetchedAt: -1 });
      if (!crypto) {
        return res.status(404).json({ error: 'Coin not found' });
      }
  
      res.json({
        price: crypto.price,
        marketCap: crypto.marketCap,
        change24h: crypto.change24h
      });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };

export {getCryptoStats}