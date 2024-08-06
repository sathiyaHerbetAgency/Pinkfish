/* eslint-disable */
import React from 'react'
import NewsContainer from './NewsContainer';

const NewsBody = ({check}) => {
    const ALL=[
        {
            image:"./Home/News/pf/pf_news_1.png",
            title:'Pinkfish Does It Again - Elevates Music Festival To New Heights',
            description:'Sunway Lagoon buzzed with 15,000 diverse music lovers and art enthusiasts, decked out in ‘sequins and silhouettes’.',
            date:"10 June 2024",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        },
        {
            image:"./Home/News/pf/pf_news_2.png",
            title:'Dutch DJ Armin van Buuren to headline Pinkfish festival at Sunway Lagoon in June',
            description:'The trance maestro will be spinning the decks at the Surf Beach in Sunway Lagoon on June 8 alongside Ukrainian DJ Miss Monique, Korean rapper Sik-K and other acts.',
            date:"03 April 2024",
            author:'By The Rakyat Post',
            link:'By Malay Mail',
            btn:'#PFF2024'
        },
        {
            image:"./Home/News/pf/pf_news_3.png",
            title:'Pinkfish Does It Again! Malaysia’s Most Anticipated Mid-Year Music Festival Returns',
            description:'Back with a bang, the second edition of Pinkfish Music & Arts Festival 2024 soared to new heights, returning to the iconic Surf Beach at Sunway Lagoon on 8th June 2024.',
            date:"09 June 2024",
            author:'By KL Foodie ',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        }
    ]
    const PFF=[
        {
            image:"./Home/News/pf/pf_news_1.png",
            title:'Pinkfish Does It Again - Elevates Music Festival To New Heights',
            description:'Sunway Lagoon buzzed with 15,000 diverse music lovers and art enthusiasts, decked out in ‘sequins and silhouettes’.',
            date:"10 June 2024",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        },
        {
            image:"./Home/News/pf/pf_news_2.png",
            title:'Dutch DJ Armin van Buuren to headline Pinkfish festival at Sunway Lagoon in June',
            description:'The trance maestro will be spinning the decks at the Surf Beach in Sunway Lagoon on June 8 alongside Ukrainian DJ Miss Monique, Korean rapper Sik-K and other acts.',
            date:"03 April 2024",
            author:'By The Rakyat Post',
            link:'By Malay Mail',
            btn:'#PFF2024'
        },
        {
            image:"./Home/News/pf/pf_news_3.png",
            title:'Pinkfish Does It Again! Malaysia’s Most Anticipated Mid-Year Music Festival Returns',
            description:'Back with a bang, the second edition of Pinkfish Music & Arts Festival 2024 soared to new heights, returning to the iconic Surf Beach at Sunway Lagoon on 8th June 2024.',
            date:"09 June 2024",
            author:'By KL Foodie ',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        }
    ]
    const PFC=[
        {
            image:"./Home/News/pc/pc_news_1.png",
            title:'KSHMR, Coone & More: M’sians Can Party ‘Til the New Year at Pinkfish Countdown 2023!',
            description:'One of Malaysia’s biggest countdown extravaganzas will be happening soon where Malaysians can welcome the new year on an exciting note!',
            date:"23 November 2023",
            author:'By Word of Buzz ',
            link:'By The Rakyat Post',
            btn:'#PFC2023'
        },
        {
            image:"./Home/News/pc/pc_news_2.png",
            title:'Pinkfish Countdown: The Ultimate New Year’s Eve Bash',
            description:'Kick off the New Year with the hottest beats and an unforgettable night. Music lovers, brace yourselves for the ultimate curated musical experience this New Year’s Eve.',
            date:"28 December 2023",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFC2023'
        },
        {
            image:"./Home/News/pc/pc_news_3.png",
            title:'#Showbiz: Malaysians welcome new year with electrifying EDM spectacle at Pinkish Countdown 2023',
            description:'The carefully curated artiste lineup, culminating in a breathtaking countdown, created an unforgettable night of music and celebration.',
            date:"1 January 2024",
            author:'By New Strait Times',
            link:'By The Rakyat Post',
            btn:'#PFC2023'
        }
    ]
    const PFL=[
        {
            image:"./Home/News/pl/pl_news_1.png",
            title:'US Rapper Tyga Is Coming To Malaysia For The First Time In August',
            description:'Look forward to a night of high energy trap and hip hop hits. ',
            date:"05 Jul 2023",
            author:'By Says',
            link:'By The Rakyat Post',
            btn:'#PFL'
        },
        {
            image:"./Home/News/pl/pl_news_2.png",
            title:'#Showbiz: Tyga to perform in KL next month, first round of tickets sold out in an hour',
            description:'Tyga which is an acronym for Thank You God Always rose to fame through his debut studio album No Introduction in 2008.',
            date:"07 July 2023",
            author:'By New Strait Times   ',
            link:'By The Rakyat Post',
            btn:'#PF '
        },
        {
            image:"./Home/News/pl/pl_news_3.png",
            title:'Get a “Taste” of Rapping Sensation Tyga Live in KL This August! Here’s Why You Can’t Miss It',
            description:'Malaysians, get ready to “Go Loko” for Tyga Live in Kuala Lumpur, coming to you this 9 August in Zepp KL!',
            date:"13 July 2023",
            author:'By Word of Buzz',
            link:'By The Rakyat Post',
            btn:'#PFL'
        }
    ]

    function checkContents(){
        if(check==="ALL"){
            return ALL
        }else if(check==="PFF"){
            return PFF
        }else if(check==="PFC"){
            return PFC
        }else{
            return PFL
        }
    }

  return (
    <div className="grid md:grid-cols-3 gap-4 grid-1 self-center py-11">
        {checkContents().map(each=>(
            <NewsContainer link={each.link} title={each.title} description={each.description} image={each.image} btn={each.btn} author={each.author} date={each.date} />
        ))
        }
    </div>
  )
}

export default NewsBody