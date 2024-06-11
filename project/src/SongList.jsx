import { Song } from "./Song";
export const SongList = ({ items, onDelete, moveSong }) => {
  return (
    <div>
      <h3>SongList</h3>
      {items.map((elm) => (
        <Song
          key={elm.id}
          {...elm}
          onDelete={onDelete}
          moveSong={moveSong}
          inPlaylist={false}
        />
      ))}
    </div>
  );
};
