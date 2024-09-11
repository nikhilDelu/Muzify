import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Stream } from "../models/Stream";
import ytdl from "ytdl-core";
import { z } from "zod";

const YT_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|playlist\?|watch\?v=|watch\?.+(?:&|&#38;);v=))([a-zA-Z0-9\-_]{11})?(?:(?:\?|&|&#38;)index=((?:\d){1,3}))?(?:(?:\?|&|&#38;)?list=([a-zA-Z\-_0-9]{34}))?(?:\S+)?/;

const CreateSchemeSchema = z.object({
  url: z.string(),
});

async function getVideoDetails(videoId: string) {
  try {
    const info = await ytdl.getInfo(videoId);
    return info.videoDetails;
  } catch (error) {
    console.error("Error fetching video details:", error);
  }
}

export async function POST(req: NextRequest) {
  await dbConnect(); // Connect to MongoDB

  try {
    const data = CreateSchemeSchema.parse(await req.json());
    const isYt = data.url.match(YT_REGEX);

    if (!isYt) {
      return NextResponse.json(
        { message: "Invalid YouTube URL!" },
        { status: 400 }
      );
    }

    const extractedId = isYt[1] || data.url.split("?v=")[1]?.split("&")[0];
    const videoDetails = await getVideoDetails(extractedId);

    if (!videoDetails) {
      return NextResponse.json(
        { message: "Failed to fetch video details" },
        { status: 500 }
      );
    }

    const thumbnails = videoDetails.thumbnails || [];

    thumbnails.sort((a, b) => a.width - b.width);

    const newStream = await Stream.create({
      type: "Youtube",
      url: data.url,
      extractedId,
      title: videoDetails.title || "No Title",
      smallImg:
        thumbnails.length > 1
          ? thumbnails[thumbnails.length - 2].url
          : thumbnails[0]?.url || "defaultSmallImgUrl",
      bigImg: thumbnails[thumbnails.length - 1].url || "defaultBigImgUrl",
    });

    return NextResponse.json(
      { message: "Stream added successfully!", newStream },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: `Error while adding a stream: ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await dbConnect(); // Connect to MongoDB

  try {
    const streams = await Stream.find();
    return NextResponse.json({ streams }, { status: 200 });
  } catch (error) {
    console.error("Error fetching streams:", error);
    return NextResponse.json({ message: `Error: ${error}` }, { status: 500 });
  }
}
