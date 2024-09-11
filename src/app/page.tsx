"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, PlayIcon, PauseIcon, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Youtube, { YouTubeProps } from "react-youtube";
import YouTube from "react-youtube";
import { add, get } from "../app/action";

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

declare global {
  interface Window {
    YT: {
      Player: new (element: HTMLElement, options: any) => any;
    };
  }
}

export default function Page() {
  const [current, setCurrent] = useState<Song | null>();
  const [newSongUrl, setNewSongUrl] = useState("");
  const [queue, setQueue] = useState<Song[]>([]);
  const iframeRef = useRef<YouTube | null>(null);
  const [adding, setAdding] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const getList = async () => {
    try {
      const response: Response | undefined = await get();
      if (response) {
        setQueue(response?.streams!);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const addSong = async (url: string) => {
    const isSongInQueue = queue.some((queuedSong) => queuedSong.url === url);
    if (isSongInQueue) {
      setNewSongUrl("");
      return;
    }
    try {
      setAdding(true);
      await add(url);
      setNewSongUrl("");
      getList();
    } catch (error) {
      console.error("Failed to add song:", error);
    }
    setAdding(false);
  };

  useEffect(() => {
    try {
      getList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const playPause = (song: Song) => {
    setCurrent(song);
    if (isPlaying) {
      iframeRef?.current?.internalPlayer?.pauseVideo();
      setIsPlaying(false);
    } else {
      iframeRef?.current?.internalPlayer?.playVideo();
      setIsPlaying(true);
    }
    return { message: "success" };
  };
  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="h-screen flex flex-col relative bg-black text-white gap-4 font-sans p-4 pt-0 md:pt-0 md:p-8">
      <Navbar />

      <div className="relative h-full overflow-hidden flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <div className="bg-white/10 rounded-3xl flex flex-col items-start overflow-hidden">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden flex items-center justify-center">
              {current ? (
                <Youtube
                  id="player"
                  className="absolute top-0 left-0 w-full h-full"
                  ref={iframeRef}
                  videoId={getYouTubeVideoId(current?.url ?? "")}
                  opts={opts}
                  onEnded={() => setCurrent(null)}
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="480"
                  height="480"
                  viewBox="0 0 48 48"
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <path
                    fill="#FF3D00"
                    d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                  ></path>
                  <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              )}
            </div>

            <div className="h-full w-full flex items-center justify-between pl-6 p-2">
              <div className="w-full h-12 overflow-hidden flex-col justify-center items-center -gap-2 font-mono leading-tight pt-3">
                <h3 className="font-semibold text-[12px]">
                  {current?.title || "No song playing"}
                </h3>
                <p className="text-gray-400 text-[8px]">
                  {current?.artist || "Add songs to the queue"}
                </p>
              </div>

              <div className="flex h-full w-full items-center justify-end px-4">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full w-8 h-8 bg-white/10 hover:bg-white/20 transition-colors"
                  onClick={() => {
                    current && playPause(current);
                  }}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <PlayIcon className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3  h-full flex flex-col gap-4 relative">
          <div className="bg-white/10 rounded-3xl p-6">
            <div className="flex">
              <Input
                type="text"
                placeholder="Add song URL"
                value={newSongUrl}
                onChange={(e) => setNewSongUrl(e.target.value)}
                className="flex-1 bg-white/5 border-0 rounded-l-full focus:ring-0 text-white placeholder-gray-400"
              />
              <Button
                disabled={adding}
                onClick={() => addSong(newSongUrl)}
                className="rounded-r-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Plus className="h-4 w-4 mr-2" />
                {adding ? "Adding..." : "Add"}
              </Button>
            </div>
          </div>

          <ScrollArea className="h-72  overflow-y-auto w-full rounded-xl">
            <div className="space-y-4">
              {/* {JSON.stringify(queue)} */}
              {queue &&
                queue.map((song, index) => (
                  <div
                    key={song.id}
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl"
                  >
                    <Image
                      src={song.smallImg ?? ""}
                      width={50}
                      height={50}
                      objectFit="cover"
                      alt="Thumbnail"
                      className="aspect-square h-full rounded-xl"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold">{song.title}</h4>
                      <p className="text-sm text-gray-400">{song.artist}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* <Avatar className="w-6 h-6">
                            <AvatarImage src={session?.user.image ?? ""} />
                            <AvatarFallback>
                              <User className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar> */}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="group text-gray-400 transition-colors"
                        onClick={async () => {
                          playPause(song);
                        }}
                      >
                        {song.addedBy}
                        {current?.url === song.url && isPlaying ? (
                          <PauseIcon className="size-4 mr-1" />
                        ) : (
                          <PlayIcon className="h-4 w-4 mr-1" />
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

function getYouTubeVideoId(url: string) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}
