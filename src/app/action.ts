"use server";
import axios from "axios";

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
    const response = await axios.get("http://localhost:3000/api/stream");
    // Ensure this format

    console.log(response.data);
    return response;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

const add = async (url: string) => {
  try {
    ("use server");
    await axios.post(`${process.env.TOAPI}/api/stream`, {
      url,
    });

    get();
  } catch (error) {
    console.error("Failed to add song:", error);
  }
};

export { add, get };
