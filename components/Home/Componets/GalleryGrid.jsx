/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import "../../../styles/live.css";
import "../../../styles/contact.css";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const imageSets = {
  pf: ["pf_1.png", "pf_2.png", "pf_3.png", "pf_4.png", "pf_5.png", "pf_6.png"],
  pc: ["pc_1.png", "pc_2.png", "pc_3.png", "pc_4.png", "pc_5.png", "pc_6.png"],
  pl: ["pl_1.png", "pl_2.png", "pl_3.png", "pl_4.png", "pl_5.png", "pl_6.png"],
  pf_mob: ["pf_mob_1.png", "pf_mob_2.png", "pf_mob_3.png", "pf_mob_4.png", "pf_mob_5.png", "pf_mob_6.png"],
  pc_mob: ["pc_mob_1.png", "pc_mob_2.png", "pc_mob_3.png", "pc_mob_4.png", "pc_mob_5.png", "pc_mob_6.png"],
  pl_mob: ["pl_mob_1.png", "pl_mob_2.png", "pl_mob_3.png", "pl_mob_4.png", "pl_mob_5.png", "pl_mob_6.png"]
};

const GalleryGrid = ({ check }) => {
  const galleryRef = useRef();

  useEffect(() => {
    const galleryElements = galleryRef.current.querySelectorAll('a');
    galleryElements.forEach((element) => {
      const img = new Image();
      img.src = element.href;
      img.onload = () => {
        element.setAttribute('data-pswp-width', img.width);
        element.setAttribute('data-pswp-height', img.height);
      };
    });

    let lightbox = new PhotoSwipeLightbox({
      gallery: '#my-test-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, [check]);

  return (
    <div id="my-test-gallery" ref={galleryRef}>
      {(check === "pf" || check === "pc" || check === "pl" || check === "pf_mob" || check === "pc_mob" || check === "pl_mob") && (
        <div className="flex flex-col gap-1 md:gap-3">
          <div className="flex gap-1 md:gap-3">
            {imageSets[check].slice(0, 3).map((file, index) => (
              <a
                href={`./Home/Gallery/${check.toUpperCase().replace('_MOB', '')}/${file}`}
                key={"my-test-gallery" + '-' + index}
                target="_blank"
                rel="noreferrer"
                className="gap-1"
              >
                <img src={`./Home/Gallery/${check.toUpperCase().replace('_MOB', '')}/${file}`} className="w-[100%] h-[100%]" alt={`${check}-${index + 1}`} />
              </a>
            ))}
          </div>
          <div className="flex gap-1 md:gap-3">
            {imageSets[check].slice(3).map((file, index) => (
              <a
                href={`./Home/Gallery/${check.toUpperCase().replace('_MOB', '')}/${file}`}
                key={"my-test-gallery" + '-' + (index + 3)}
                target="_blank"
                rel="noreferrer"
                className="gap-1"
              >
                <img src={`./Home/Gallery/${check.toUpperCase().replace('_MOB', '')}/${file}`} className="w-[100%] h-[100%]" alt={`${check}-${index + 4}`} />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryGrid;
