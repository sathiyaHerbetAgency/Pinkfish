/* eslint-disable */
"use client";

import { useEffect } from "react";
import { slickCDNLinks } from "../config/slickConfig";
import { slickCustomStyles } from "../styles/sliderStyles";

export const useSlickLoader = (sliderRef, slickSettings) => {
  useEffect(() => {
    const loadSlick = () => {
      // Load CSS
      const ensureCSS = () =>
        new Promise((resolve) => {
          if (!document.querySelector('link[href*="slick.css"]')) {
            const slickCSS = document.createElement("link");
            slickCSS.rel = "stylesheet";
            slickCSS.href = slickCDNLinks.css;

            const slickThemeCSS = document.createElement("link");
            slickThemeCSS.rel = "stylesheet";
            slickThemeCSS.href = slickCDNLinks.themeCss;

            slickCSS.onload = () => resolve();
            document.head.appendChild(slickCSS);
            document.head.appendChild(slickThemeCSS);
          } else {
            resolve();
          }
        });

      // Load jQuery and Slick JS
      const ensureJS = () =>
        new Promise((resolve) => {
          if (!window.jQuery) {
            const jqueryScript = document.createElement("script");
            jqueryScript.src = slickCDNLinks.jquery;
            jqueryScript.onload = () => {
              const slickScript = document.createElement("script");
              slickScript.src = slickCDNLinks.slickJs;
              slickScript.onload = resolve;
              document.head.appendChild(slickScript);
            };
            document.head.appendChild(jqueryScript);
          } else if (!window.jQuery.fn.slick) {
            const slickScript = document.createElement("script");
            slickScript.src = slickCDNLinks.slickJs;
            slickScript.onload = resolve;
            document.head.appendChild(slickScript);
          } else {
            resolve();
          }
        });

      Promise.all([ensureCSS(), ensureJS()]).then(() => {
        initializeSlick();
      });
    };

    const initializeSlick = () => {
      if (sliderRef.current && window.jQuery && window.jQuery.fn.slick) {
        const $ = window.jQuery;

        // Destroy existing slick instance if it exists
        if ($(sliderRef.current).hasClass("slick-initialized")) {
          $(sliderRef.current).slick("unslick");
        }

        // Initialize Slick
        $(sliderRef.current).slick(slickSettings);

        // Add custom styles (after slick.css is loaded)
        if (!document.querySelector("style[data-slick-custom]")) {
          const style = document.createElement("style");
          style.textContent = slickCustomStyles;
          style.setAttribute("data-slick-custom", "true");
          document.head.appendChild(style);
        }
      }
    };

    loadSlick();

    return () => {
      // Cleanup on unmount
      if (sliderRef.current && window.jQuery && window.jQuery.fn.slick) {
        const $ = window.jQuery;
        if ($(sliderRef.current).hasClass("slick-initialized")) {
          $(sliderRef.current).slick("unslick");
        }
      }
    };
  }, [sliderRef, slickSettings]);
};
