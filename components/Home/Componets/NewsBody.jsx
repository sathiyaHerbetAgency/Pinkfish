/* eslint-disable */
import React from 'react'
import NewsContainer from './NewsContainer';

const NewsBody = ({check}) => {

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
            image:"./Home/News/pf/pf_news_1.png",
            title:'Pinkfish Does It Again - Elevates Music Festival To New Heights',
            description:'Sunway Lagoon buzzed with 15,000 diverse music lovers and art enthusiasts, decked out in ‘sequins and silhouettes’.',
            date:"10 June 2024",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        },
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
            image:"./Home/News/pf/pf_news_1.png",
            title:'Pinkfish Does It Again - Elevates Music Festival To New Heights',
            description:'Sunway Lagoon buzzed with 15,000 diverse music lovers and art enthusiasts, decked out in ‘sequins and silhouettes’.',
            date:"10 June 2024",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        }
    ]
    const PFL=[
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
            image:"./Home/News/pf/pf_news_1.png",
            title:'Pinkfish Does It Again - Elevates Music Festival To New Heights',
            description:'Sunway Lagoon buzzed with 15,000 diverse music lovers and art enthusiasts, decked out in ‘sequins and silhouettes’.',
            date:"10 June 2024",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        },
        {
            image:"./Home/News/pf/pf_news_1.png",
            title:'Pinkfish Does It Again - Elevates Music Festival To New Heights',
            description:'Sunway Lagoon buzzed with 15,000 diverse music lovers and art enthusiasts, decked out in ‘sequins and silhouettes’.',
            date:"10 June 2024",
            author:'By The Rakyat Post',
            link:'By The Rakyat Post',
            btn:'#PFF2024'
        }
    ]

    function checkContents(){
        if(check==="PFF"){
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