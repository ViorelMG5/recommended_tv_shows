export function Video({ videoReq }) {
  return (
    <>
      {videoReq !== undefined ? (
        <iframe
          title="movie preview"
          src={`https://www.youtube.com/embed/${videoReq}?autoplay=1&mute=0`}
        ></iframe>
      ) : (
        <div></div>
      )}
    </>
  );
}
