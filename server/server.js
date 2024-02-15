// server.js

const express = require('express');
const axios = require('axios');
const path = require('path');

const optionsController = require('./controllers/optionsController')
const app = express();
const PORT = process.env.PORT || 3000;
const API_TOKEN = 'cDhpOWx3UzN2UUhfNjB5YVdfdWNsekZjdHNJWFhfN2dBcU16RWNxV2E0TT0'; // Replace with your API token

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.get('/bundle.js', (req, res) => {
    console.log('Request for bundle.js received')
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'bundle.js'), {
    });
  });
  
app.get('/', (req, res) => {
    console.log('Request for INDEX.HTML received')
    res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
})

// Define a route to handle the API request
app.get('/api/options/:ticker/:expirationDate/:optionType/:strikePrice', async (req, res) => {
    console.log(req.params);
    const { ticker, expirationDate, optionType, strikePrice } = req.params;
    try {
        // Generate the option symbol using the optionsController
        const optionSymbol = optionsController.generateOptionSymbol(ticker, expirationDate, optionType, strikePrice);
        
        // Make the API request to fetch data
        const response = await axios.get(`https://api.marketdata.app/v1/options/quotes/${optionSymbol}/`, {
            headers: {
                Authorization: `Token ${API_TOKEN}`
            }
        });

        // Send the received data back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Serve the index.html file for all other routes
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
// });

// app.get('/bundle.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'bundle.js'), {
//         headers: {
//             'Content-Type': 'application/javascript'
//         }
//     });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
