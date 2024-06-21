/* eslint-disable */

import React from 'react'

const NewsTemplate = ({header,paragraph,link,img}) => {
    const data =[
        {
            "heading": "Pinkfish Does It Again - Elevates Music Festival",
            "description": "Pinkfish Music & Arts Festival 2024 returned to Surf Beach at Sunway Lagoon, drawing 15,000 fans in 'sequins and silhouettes' for diverse performances.",
            "link": "https://www.msn.com/en-my/lifestyle/other/pinkfish-does-it-again-elevates-music-festival-to-new-heights-in-second-year/ar-BB1nVbBY",
            "img": "/news-1-21.webp"
        },
        {
            "heading": "Dutch DJ Armin van Buuren to headline Pinkfish festival at Sunway Lagoon in June",
            "description": "Dutch DJ Armin van Buuren returns after 7 years to Malaysia for Pinkfish Music & Arts Festival 2024, bringing his world-renowned EDM and trance music.",
            "link": "https://www.malaymail.com/news/life/2024/04/03/dutch-dj-armin-van-buuren-to-headline-pinkfish-festivalat-sunway-lagoon-in-june/127052",
            "img": "/news-2-21.webp"
        },
        {
            "heading": "Pinkfish Does It Again! Malaysia’s Most Anticipated Mid-Year Music Festival Returns",
            "description": "Pinkfish Music & Arts Festival 2024 returned to Sunway Lagoon, featuring international and local talents, multiple stages, and exciting art installations.",
            "link": "https://klfoodie.com/pinkfish-does-it-again-malaysias-most-anticipated-mid-year-festival-returns-kl/#google_vignette",
            "img": "/news-3-21.webp"
        },
        {
            "heading": "Pinkfish Does It Again – Elevates Music Festival To New Heights In Second Year",
            "description": "Pinkfish Music & Arts Festival 2024 exceeded expectations with more attendees and unforgettable experiences, featuring top DJs like Armin Van Buuren.",
            "link": "https://www.therakyatpost.com/fun/2024/06/10/pinkfish-does-it-again-elevates-music-festival-to-new-heights-in-second-year/?utm_source=Newswav&utm_medium=Website",
            "img": "/news-4-21.webp"
        },
    ]
    
  return (
   <>
   {data.map(each=>
    <div className='basis-1/3 border rounded border-white flex flex-col gap-4'>
<img src={each.img} alt='news image' />
<div className='flex flex-col gap-4 self-center pb-4 w-[90%]'>
<h1 className='news_card_header '>{each.heading}</h1>

<p className='news_card_text'>{each.description}</p>

<a href={each.link} target='_blank'>
<button type='button' className='news_read_btn'>Read More</button>
</a>
</div>
</div>
   )}


</>
  )
}

export default NewsTemplate