## 📺 YouTube Search API

This simple API allows you to search for YouTube videos by keyword using the official YouTube Data v3 API. It returns basic information like the video title, channel, thumbnail, and direct YouTube link.

## 🚀 Features

- 🔍 Search YouTube videos by keyword.
- 📦 Lightweight and easy to integrate.
- 📡 Built using `node-fetch` for fast API requests.
- 🧩 Supports `.env` configuration for API key management.

## 📦 Requirements

- Node.js 14+
- `dotenv` and `node-fetch` packages
- A valid [YouTube Data API v3 key](https://console.developers.google.com/)

## 📡 Usage

**1. Endpoint**  
Send a GET request to your deployed API or local server:
```
GET /api/youtube?search=YOUR_QUERY
```

**2. Query Parameters**

| Parameter | Required | Description                              |
|-----------|----------|------------------------------------------|
| `search`  | ✅       | The keyword or phrase to search for.     |

**✅ Example Request**
```bash
curl "http://localhost:3000/api/youtube?search=javascript+tutorial"
```

**✅ Example Response**
```json
{
  "status": true,
  "result": [
    {
      "title": "JavaScript Tutorial for Beginners",
      "channel": "CodeAcademy",
      "duration": "Not available",
      "imageUrl": "https://i.ytimg.com/vi/xyz123/default.jpg",
      "link": "https://youtube.com/watch?v=xyz123"
    }
  ]
}
```

**❌ Error Responses**

```json
{
  "status": false,
  "message": "No search query provided."
}
```

```json
{
  "status": false,
  "message": "No results found."
}
```

```json
{
  "status": false,
  "message": "Internal server error"
}
```

## 🔍 Code Explanation

- Loads environment variables using `dotenv`.
- Accepts `search` query and forms a YouTube API request URL.
- Parses the response and extracts useful video metadata.
- Returns a clean JSON result or a helpful error message.

## ⚠️ Error Handling

- ❗ 400: If the `search` query is missing.
- ❗ 404: If no results are found.
- ❗ 500: If the YouTube API fails or there's a fetch issue.

## 🛠️ Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/youtube-search-api.git
   cd youtube-search-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your API key:
   ```
   YOUTUBE_API_KEY=your_youtube_data_api_key
   ```

4. Run the server locally (if applicable):
   ```bash
   node index.js
   ```

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](https://github.com/NotFlexCoder/youtube-search/blob/main/LICENSE) file for details.
