import React from 'react';
import ReactPlayer from 'react-player';
function Youtube(props) {
  return (
    <div className="video-container">
      <ReactPlayer
        className="player"
        width="100%"
        height="100%"
        url={props.urlplayer}
        controls={true}
      />
    </div>
  );
}

export default Youtube;
