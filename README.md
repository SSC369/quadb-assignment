# QuadB Assignment

This project is a Node.js-based web application that fetches cryptocurrency data using the WazirX API, stores it in MongoDB, and serves it through an Express API. It also includes a front-end to display the data dynamically.

## Hosted Link
https://quadb-936392.netlify.app/

## Application Demo
https://drive.google.com/file/d/1gMvoxkGU8SIcezwHUgE2Nng8WMdM5z8E/view?usp=drive_link

## Features

- Fetches real-time cryptocurrency data from the WazirX API.
- Stores the top 10 cryptocurrencies in a MongoDB database.
- Serves data via a REST API using Express.
- Frontend dynamically updates the cryptocurrency data every 60 seconds.

## Technologies Used

- **Node.js**: For the backend server.
- **Express.js**: For building the API.
- **MongoDB & Mongoose**: For database management.
- **Axios**: For making HTTP requests to external APIs.
- **Nodemon**: For automatic restarting of the server during development.
- **CORS**: To enable cross-origin requests.
- **dotenv**: For environment variable management.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/quadb-assignment.git
   cd quadb-assignment
   ```

2. **Install dependencies**:

   Make sure you have [Node.js](https://nodejs.org/) installed.

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root of your project with the following values:

   ```bash
   MONGO_URI=<your-mongodb-connection-string>
   PORT=<your-port-number>
   ```

4. **Start the server**:

   ```bash
   npm start
   ```

   The server will start on the port specified in your `.env` file (default: `3000` if unspecified).

## API Endpoints

- **GET /getTop10**: Fetches the top 10 cryptocurrencies from the MongoDB database.

## Frontend

- The frontend dynamically displays cryptocurrency data and updates every 60 seconds using Axios to fetch data from the `/getTop10` endpoint.

## Folder Structure

```
/quadb-assignment
│
├── /public           # Frontend files (HTML, CSS, JS)
├── /routes           # API route handlers
├── .env              # Environment variables
├── .gitignore        # Files to ignore in Git
├── index.js          # Main server file
├── package.json      # Project dependencies and scripts
```



Feel free to modify the sections to suit your project’s specific details. Let me know if you'd like to add anything further!
