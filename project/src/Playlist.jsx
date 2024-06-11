import { Song } from "./Song";
export const PlayList = ({ items, moveDown }) => {
  console.log(items);
  return (
    <div>
      <h3>Playlist</h3>
      {items.map((elm) => (
        <Song key={elm.id} {...elm} moveDown={moveDown} inPlaylist={true} />
      ))}
    </div>
  );
};
