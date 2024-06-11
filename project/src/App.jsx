import { PlayList } from "./Playlist";
import { SongList } from "./SongList";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [songs, setSongs] = useState([
    { id: 101, title: "A", author: "Armine", duration: 8 },
    { id: 102, title: "B", author: "Hrach", duration: 7 },
    { id: 103, title: "C", author: "Artak", duration: 6 },
    { id: 104, title: "D", author: "Samvel", duration: 5 },
  ]);
  const removeSong = (id) => {
    setSongs(songs.filter((x) => x.id != id));
    setPlaylist(playlist.filter((x) => x.id !== id));
  };
  const moveSong = (id) => {
    const songToMove = songs.find((x) => x.id === id);
    if (songToMove && !playlist.includes(songToMove)) {
      setPlaylist([...playlist, songToMove]);
    }
  };
  const moveDown = (id) => {
    const songToMove = playlist.find((x) => x.id === id);
    setPlaylist([...playlist.filter((x) => x.id !== id), songToMove]);
  };
  return (
    <>
      <SongList items={songs} onDelete={removeSong} moveSong={moveSong} />
      <PlayList items={playlist} moveDown={moveDown} />
    </>
  );
}

export default App;
