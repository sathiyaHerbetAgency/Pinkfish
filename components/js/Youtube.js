/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId,text,type }) => 
  (
  <div className={`video-responsive rounded ${type==="PFC2025"?"border-none shadow-lg": "border-[2px]"} md:border-[4px]`}>
    <iframe
      className="w-[90vw] h-[200px] md:w-[853px] md:h-[480px]"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
