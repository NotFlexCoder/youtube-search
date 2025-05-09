
require('dotenv').config();
const fetch = require('node-fetch');

const apiKey = process.env.YOUTUBE_API_KEY;
const baseUrl = "https://www.googleapis.com/youtube/v3/search";

module.exports = async (req, res) => {
    const { search } = req.query;

    if (!search) {
        return res.status(400).json({ status: false, message: "No search query provided." });
    }

    const url = `${baseUrl}?part=snippet&type=video&q=${search}&key=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length) {
            const results = data.items.map(item => ({
                title: item.snippet.title,
                channel: item.snippet.channelTitle,
                duration: "Not available",
                imageUrl: item.snippet.thumbnails.high.url,
                link: `https://youtube.com/watch?v=${item.id.videoId}`
            }));
            return res.json({ status: true, result: results });
        }

        return res.status(404).json({ status: false, message: "No results found." });
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
};
