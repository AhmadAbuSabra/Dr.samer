// utils/youtube-api.ts
import axios from 'axios';

const YOUTUBE_API_KEY: string ='AIzaSyDfB6mux3IRN4O6kXJbXKekL2EyvsaLq00'; // Assumed to be stored in your .env.local file
const CHANNEL_ID: string = 'UCwX1Ru-iKLHXMijT6n9S6Nw'; // Your Channel ID

export interface VideoItem {
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    liveBroadcastContent: string;
  };
}

export const getChannelVideos = async (): Promise<VideoItem[]> => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 50,
        order: 'date',
        type: 'video',
        key: YOUTUBE_API_KEY,
      },
    });

    // Cast the response data items to VideoItem[]
    return response.data.items as VideoItem[];
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching videos:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
    return [];
  }
};
