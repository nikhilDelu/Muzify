"use server";
import axios from "axios";
import youtubesearchapi from "youtube-search-api";

interface Song {
  id: number;
  title: string;
  artist: string;
  votes: number;
  url: string;
  addedBy: string;
  smallImg: string;
  bigImg: string;
}
interface Response {
  streams: Song[];
}

const get = async () => {
  try {
    ("use server");
    // Ensure this format
    // const response = await axios.get(`${process.env.TOAPI}/api/stream`);
    const response = await axios.get(
      `https://cloudserver-4.onrender.com/api/stream`
    );
    // Ensure this format

    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const YT_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|playlist\?|watch\?v=|watch\?.+(?:&|&#38;);v=))([a-zA-Z0-9\-_]{11})?(?:(?:\?|&|&#38;)index=((?:\d){1,3}))?(?:(?:\?|&|&#38;)?list=([a-zA-Z\-_0-9]{34}))?(?:\S+)?/;

const add = async (url: string) => {
  const isYt = url.match(YT_REGEX);

  if (!isYt) {
    console.log("Enter valid url");
    return;
  }
  const extractedId =
    isYt[1] ||
    url.split("v=")[1]?.split("&")[0] ||
    url.split("youtu.be/")[1]?.split("?")[0];
  console.log("extracted id : ", extractedId);
  const videoDetails = await youtubesearchapi.GetVideoDetails(extractedId);
  const song = videoDetails;
  try {
    ("use server");
    // await axios.post(`${process.env.TOAPI}/api/stream`, {
    //   song,
    // });
    console.log("song from action.ts: ", { song, url });
    await axios.post(`https://cloudserver-4.onrender.com/api/stream`, {
      song,
      url,
    });

    get();
  } catch (error) {
    console.error("Failed to add song:", error);
  }
};

export { add, get };
