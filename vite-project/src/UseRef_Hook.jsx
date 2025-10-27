
import React, { useRef } from "react";

function UseRef_Hook() {
  //  Create a reference for the video element
  const videoRef = useRef(null);

  //  Play /  Pause handlers
  const playVideo = () => videoRef.current.play();
  const pauseVideo = () => videoRef.current.pause();

  //  Rewind /  Forward handlers
  const rewind1s = () => (videoRef.current.currentTime -= 1);
  const forward1s = () => (videoRef.current.currentTime += 1);

  //  Volume Controls (0–1 range)
  const increaseVolume = () => {
    if (videoRef.current.volume < 1) videoRef.current.volume = 1; // Full volume
  };
  const decreaseVolume = () => {
    if (videoRef.current.volume > 0) videoRef.current.volume = 0; // Mute
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>🎬 VideoPlayer</h2>

      {/* Video element linked with ref */}
      <video
        ref={videoRef}
        width="600"
        style={{
          borderRadius: 10,
          boxShadow: "0 0 10px teal",
        }}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>

      {/* 🎛 Controls */}
      <div style={{ marginTop: 20 }}>
        <button style={btnStyle("#007bff")} onClick={playVideo}>
          ▶ Play
        </button>
        <button style={btnStyle("#dc3545")} onClick={pauseVideo}>
          ⏸ Pause
        </button>
        <button style={btnStyle("#b8dc35")} onClick={rewind1s}>
          ⏪ -1s
        </button>
        <button style={btnStyle("#b8dc35")} onClick={forward1s}>
          ⏩ +1s
        </button>
        <button style={btnStyle("#35dcc6")} onClick={decreaseVolume}>
          🔈 Volume -
        </button>
        <button style={btnStyle("#358bdc")} onClick={increaseVolume}>
          🔊 Volume +
        </button>
      </div>
    </div>
  );
}

//  Reusable Button Style Function
const btnStyle = (bg) => ({
  marginLeft: 10,
  padding: "6px 10px",
  background: bg,
  color: "white",
  border: "none",
  borderRadius: 6,
  cursor: "pointer",
});

export default UseRef_Hook;
