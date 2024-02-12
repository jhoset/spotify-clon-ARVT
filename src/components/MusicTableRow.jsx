import { usePlayerStore } from "@/store/playerStore";
import { useEffect } from "react";


export const MusicTableRow = ({ song, index }) => {
    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state);
    const { id, image, title, artists, album, duration } = song;

    const isPlayingPlayList = currentMusic && currentMusic?.playlist?.albumId === song.albumId;
    const isPlayingCurrentSong = currentMusic && currentMusic?.song?.id == id;

    const currentSongPlayingMatch = (isPlaying && isPlayingCurrentSong && isPlayingPlayList);

    return (
        <>
            <tr className="group hover:bg-gray-500/20 font-light">
                <td className="whitespace-nowrap px-4 py-2 text-center">

                    <div className="flex flex-col items-center text-center w-4">
                        {

                            (currentSongPlayingMatch) ? (<img width={20} src="/public/gifs/sound-bar-animation.gif" alt="" />) : index + 1
                        }
                    </div>


                </td>
                <td className="whitespace-nowrap px-4 py-2 flex gap-3 items-center h-16">
                    <div className="h-10 w-10">
                        <img
                            src={image}
                            alt={title}
                            className="rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]"
                        />
                    </div>
                    <div className={currentSongPlayingMatch ? 'leading-none text-green-600 hover:text-green-500 font-bold' : 'leading-none text-gray-300 group-hover:text-white font-normal'}>
                        <a
                            href="#"
                            className=" hover:underline text-sm h-5"
                        >
                            {title}
                        </a>
                        <div className="text-sm text-gray-300 group-hover:text-white font-light">
                            {artists.join(', ')}
                        </div>
                    </div>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                    <a
                        href="#"
                        className="text-gray-300 group-hover:text-white hover:underline text-sm"
                    >
                        {album}
                    </a>
                </td>
                <td className="whitespace-nowrap text-xs px-4 py-2 text-right">
                    {duration}
                </td>
            </tr>
        </>
    )
}