/* eslint-disable */
const Head = ({title,description}) =>{
  return(
  <>
    <title>{title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property='og:title' content='Pinkfish Festival'/>
    <meta property='og:image' content='/thumbnail.png'/>
    <meta property='og:description' content={description}/>
    <meta property='og:url' content='www.pinkfishfestival.com'/>
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
    <link rel="icon" href="/fav_icon.png" />
  </>
);
};
export default Head;
