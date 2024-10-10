import cron from "node-cron"
import fetchCryptoData from "../services/cryptoService.js"

const startCryptoJob = () => {
    cron.schedule('0 */2 * * *', () => {
      console.log('Fetching cryptocurrency data...');
      fetchCryptoData();
    });
}
export default startCryptoJob
