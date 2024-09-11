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

export const get = async () => {
  try {
    ("use server");
    const response = await axios.get<Response>(
      `${process.env.TOAPI}/api/stream`
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};

export const add = async (url: string) => {
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
