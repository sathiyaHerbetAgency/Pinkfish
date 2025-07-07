/* eslint-disable */
"use client"

import { useEffect } from "react"
import { slickCDNLinks } from "../config/slickConfig"
import { slickCustomStyles } from "../styles/sliderStyles"

export const useSlickLoader = (sliderRef, slickSettings) => {
  useEffect(() => {
    const loadSlick = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="slick.css"]')) {
        const slickCSS = document.createElement("link")
        slickCSS.rel = "stylesheet"
        slickCSS.href = slickCDNLinks.css
        document.head.appendChild(slickCSS)

        const slickThemeCSS = document.createElement("link")
        slickThemeCSS.rel = "stylesheet"
        slickThemeCSS.href = slickCDNLinks.themeCss
        document.head.appendChild(slickThemeCSS)
      }

      // Load jQuery and Slick JS
      if (!window.jQuery) {
        const jqueryScript = document.createElement("script")
        jqueryScript.src = slickCDNLinks.jquery
        jqueryScript.onload = () => {
          const slickScript = document.createElement("script")
          slickScript.src = slickCDNLinks.slickJs
          slickScript.onload = initializeSlick
          document.head.appendChild(slickScript)
        }
        document.head.appendChild(jqueryScript)
      } else if (!window.jQuery.fn.slick) {
        const slickScript = document.createElement("script")
        slickScript.src = slickCDNLinks.slickJs
        slickScript.onload = initializeSlick
        document.head.appendChild(slickScript)
      } else {
        initializeSlick()
      }
    }

    const initializeSlick = () => {
      if (sliderRef.current && window.jQuery && window.jQuery.fn.slick) {
        const $ = window.jQuery

        // Destroy existing slick instance if it exists
        if ($(sliderRef.current).hasClass("slick-initialized")) {
          $(sliderRef.current).slick("unslick")
        }

        // Initialize Slick
        $(sliderRef.current).slick(slickSettings)

        // Add custom styles for dots
        const style = document.createElement("style")
        style.textContent = slickCustomStyles
        if (!document.querySelector("style[data-slick-custom]")) {
          style.setAttribute("data-slick-custom", "true")
          document.head.appendChild(style)
        }
      }
    }

    loadSlick()

    return () => {
      // Cleanup on unmount
      if (sliderRef.current && window.jQuery && window.jQuery.fn.slick) {
        const $ = window.jQuery
        if ($(sliderRef.current).hasClass("slick-initialized")) {
          $(sliderRef.current).slick("unslick")
        }
      }
    }
  }, [sliderRef, slickSettings])
}
