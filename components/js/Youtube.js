/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = () => (
  <div className={`video-responsive rounded  border-[2px] md:border-[4px]`}>
    <iframe
      className="w-[90vw] h-[200px] md:w-[853px] md:h-[480px]"
      src='https://www.youtube.com/embed/F8k-yI4zWLg'
      frameBorder="0"
      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
export default YoutubeEmbed;
