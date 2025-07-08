/* eslint-disable */
export const slickSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  draggable: true,
  swipe: true,
  touchMove: true,
  accessibility: true,
  focusOnSelect: false,
  centerMode: false,
  variableWidth: false,
  speed: 500,
  cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "10px",
      },
    },
  ],
  customPaging: (slider, i) => '<div class="custom-dot"></div>',
}

export const slickCDNLinks = {
  css: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
  themeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css",
  jquery: "https://code.jquery.com/jquery-3.6.0.min.js",
  slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
}
