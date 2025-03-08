import { NextResponse } from 'next/server';

export async function GET() {
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

  if (!API_KEY || !CHANNEL_ID) {
    console.error('Missing API_KEY or CHANNEL_ID');
    return NextResponse.json({ error: 'API key or channel ID not configured' }, { status: 500 });
  }

  try {
    const searchResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10&type=video`
    );

    if (!searchResponse.ok) {
      throw new Error(`Search API error: ${searchResponse.statusText}`);
    }

    // Check if the response is empty or malformed
    const searchText = await searchResponse.text();
    if (!searchText) {
      throw new Error('Empty response from YouTube search API');
    }

    const searchData = JSON.parse(searchText);
    if (!searchData.items || searchData.items.length === 0) {
      throw new Error('No videos found');
    }

    const videoIds = searchData.items.map(item => item.id.videoId).join(',');

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=snippet,contentDetails,statistics`
    );

    if (!videosResponse.ok) {
      throw new Error(`Videos API error: ${videosResponse.statusText}`);
    }

    const videosText = await videosResponse.text();
    if (!videosText) {
      throw new Error('Empty response from YouTube videos API');
    }

    const videosData = JSON.parse(videosText);
    if (!videosData.items || videosData.items.length === 0) {
      throw new Error('No video details found');
    }

    const videoData = videosData.items.map(item => ({
      id: item.id,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      viewCount: item.statistics.viewCount,
      likeCount: item.statistics.likeCount,
      duration: item.contentDetails.duration,
    }));

    return NextResponse.json(videoData, { status: 200 });
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return NextResponse.json({ error: 'Failed to fetch videos: ' + error.message }, { status: 500 });
  }
}
