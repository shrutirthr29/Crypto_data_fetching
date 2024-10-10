---

# Cryptocurrency Data Fetching API

This project is a server-side application built using **Node.js**, **Express**, and **MongoDB**. It periodically fetches cryptocurrency data (Bitcoin, Ethereum, Matic) from the **CoinGecko API**, stores the data in a MongoDB database, and provides an API to retrieve the latest stats and calculate the standard deviation of prices.

## Features

1. **Background Job**: Fetches and stores cryptocurrency data (price, market cap, and 24-hour change) every 2 hours.
2. **API Endpoints**:
   - `/api/stats?coin=<coin>`: Fetches the latest stats (price, market cap, and 24-hour change) for the requested cryptocurrency.
   - `/api/deviation?coin=<coin>`: Calculates and returns the standard deviation of the price for the last 100 records of the requested cryptocurrency.
   
## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (using Mongoose ODM)
- **node-cron** for scheduling background tasks
- **dotenv** for environment variable management
- **CoinGecko API** for real-time cryptocurrency data

## Getting Started

### Prerequisites

Before running this project, ensure you have the following installed on your local machine:

- **Node.js** (v12.x or higher)
- **MongoDB** (or use MongoDB Atlas)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/crypto-fetching-api.git
   cd crypto-fetching-api
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory with the following content:

   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

   Replace `<username>`, `<password>`, and `<dbname>` with your MongoDB Atlas credentials.

4. **Run the app**:

   ```bash
   npm start
   ```

   The app should now be running at `http://localhost:5000`.

### API Endpoints

1. **Fetch Latest Stats**

   - **URL**: `GET /api/stats`
   - **Query Parameters**:
     - `coin`: The cryptocurrency to fetch stats for. Possible values are `bitcoin`, `ethereum`, and `matic-network`.
   - **Example**:
     ```bash
     http://localhost:5000/api/stats?coin=bitcoin
     ```
   - **Response**:
     ```json
     {
       "price": 40000,
       "marketCap": 800000000,
       "24hChange": 3.4
     }
     ```

2. **Calculate Price Deviation**

   - **URL**: `GET /api/deviation`
   - **Query Parameters**:
     - `coin`: The cryptocurrency to calculate deviation for. Possible values are `bitcoin`, `ethereum`, and `matic-network`.
   - **Example**:
     ```bash
     http://localhost:5000/api/deviation?coin=bitcoin
     ```
   - **Response**:
     ```json
     {
       "deviation": 4082.48
     }
     ```
---
