export const Song = ({
  title,
  author,
  duration,
  id,
  onDelete,
  moveSong,
  moveDown,
  inPlaylist,
}) => {
  return (
    <div className={inPlaylist ? "in-playlist" : "song"}>
      <p>{title}</p>
      <strong>by {author}</strong>
      <br />
      <small>{duration}</small>
      <br />
      {inPlaylist ? (
        <button onClick={() => moveDown(id)}>Move Down</button>
      ) : (
        <div>
          <button onClick={() => onDelete(id)}>Delete</button>
          <button onClick={() => moveSong(id)}>Move</button>
        </div>
      )}
    </div>
  );
};
