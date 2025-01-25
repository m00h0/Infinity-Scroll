import { config } from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.UNSPLASH_API_KEY;

app.use(express.static('public'));

app.get('/api/photos', async (req, res) => {
  const count = req.query.count || 30;
  const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Failed to fetch photos:', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});