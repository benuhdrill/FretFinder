const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/analyze', (req, res) => {
  const song = req.query.song;

  res.json({
    song: song,
    chords: ["C", "G", "Am", "F"],
    difficulty: "easy",
    tutorial: "https://youtube.com/results?search_query=" + encodeURIComponent(song + " guitar tutorial")
  });
});

app.listen(3000, () => {
  console.log("API running at http://localhost:3000");
});
