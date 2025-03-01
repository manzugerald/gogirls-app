// app/api/videos/route.js
export async function GET(req) {
    const API_KEY = process.env.YOUTUBE_API_KEY;
    const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;
  
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('API_KEY from .env.local:', API_KEY || 'undefined');
    console.log('CHANNEL_ID from .env.local:', CHANNEL_ID || 'undefined');
  
    if (!API_KEY || !CHANNEL_ID) {
      console.error('Missing API_KEY or CHANNEL_ID');
      return new Response(JSON.stringify({ error: 'API key or channel ID not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    try {
      // Step 1: Fetch video IDs from search endpoint
      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`
      );
      const searchText = await searchResponse.text();
      console.log('Raw search response:', searchText);
      if (!searchResponse.ok) {
        throw new Error(`Search API error: ${searchResponse.status} - ${searchText}`);
      }
      const searchData = JSON.parse(searchText);
      const videoIds = searchData.items.map(item => item.id.videoId).join(',');
  
      // Step 2: Fetch detailed video properties using videos endpoint
      const videosResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails,statistics`
      );
      const videosText = await videosResponse.text();
      console.log('Raw videos response:', videosText);
      if (!videosResponse.ok) {
        throw new Error(`Videos API error: ${videosResponse.status} - ${videosText}`);
      }
      const videosData = JSON.parse(videosText);
  
      // Map video data with additional properties
      const videoData = videosData.items.map(item => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.high.url,
        publishedAt: item.snippet.publishedAt, // e.g., "2023-10-01T12:00:00Z"
        viewCount: item.statistics.viewCount, // e.g., "12345"
        likeCount: item.statistics.likeCount, // e.g., "678"
        duration: item.contentDetails.duration, // e.g., "PT4M33S" (ISO 8601)
      }));
  
      return new Response(JSON.stringify(videoData), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Error fetching YouTube videos:', error);
      return new Response(JSON.stringify({ error: 'Failed to fetch videos: ' + error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }