
import { useEffect, useState } from "react";

import { MusicTableRow } from "./MusicTableRow";

const Time = () => {
  return (
    <>
      <svg
        role="img"
        height="16"
        width="16"
        aria-hidden="true"
        viewBox="0 0 16 16"
        fill="currentColor"
      ><path
        d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
      ></path><path
        d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"
      ></path></svg
      >
    </>
  )
}

export const MusicTable = ({ songs }) => {

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);


  return (
    <>
      {
        domLoaded && (
          <table className="table-auto text-left min-w-full divide-y-2 divide-gray-500/30">
            <thead>
              <tr className="text-gray-300">
                <th className="font-light px-4 py-2 whitespace-nowrap min-w-4 pl-5">#</th>
                <th className="font-light px-4 py-2 whitespace-nowrap">Title</th>
                <th className="font-light px-4 py-2 whitespace-nowrap">Album</th>
                <th className="font-light px-4 py-2 whitespace-nowrap flex justify-end mr-1">
                  <Time />
                </th>
              </tr>
            </thead>
            <tbody>
              {
                songs.map((song, index) => (
                  <MusicTableRow key={index} song={song} index={index} />
                ))
              }
            </tbody>
          </table>
        )
      }
    </>
  )



}



